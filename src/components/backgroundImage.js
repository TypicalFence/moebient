import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class BackgroundImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.initialImage
        };
    }

    async getNewImage() {
        try {
            const data = await fetch("/api/background").then(r => r.json());

            if (data.url) {
                return data.url;
            }
        } catch {}

        return null;
    }

    async updateImage() {
        const state = { ...this.state };
        const nexImage = await this.getNewImage();
        state.image = nexImage;
        this.setState(state);
    }

    componentDidMount() {
        setInterval(() => this.updateImage(), 300000);
    }

    render() {
        const { state } = this;

        let img = null;

        if (state.image) {
            img = <img src={state.image} />;
        }

        return <div className="background-image">
            <TransitionGroup>
                <CSSTransition
                    key={state.image}
                    timeout={1000}
                    classNames="fade"
                    appear
                >
                    {img}
                </CSSTransition>
            </TransitionGroup>
            <style global>{`
                .background-image {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                }

                .background-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: bottom;
                }
                
                .fade-enter, .fade-appear {
                    opacity: 0;
                }

                .fade-enter-active, .fade-appear-active {
                    opacity: 1;
                    transition: opacity 1000ms;     
                }
                
                .fade-exit {
                    opacity: 1;
                }
                .fade-exit-active {
                    opacity: 0;
                    transition: opacity 1000ms;
}               }
            `}</style>
        </div>;
    }
}

export default BackgroundImage;
