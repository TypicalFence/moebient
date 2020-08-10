// Background
export function BackgroundImage({ url }) {
    this.url = url;
}

export class BackgroundService {
    constructor() {
        if (this.constructor === BackgroundService) {
            throw new Error("Base class can't be instantiated.");
        }
    }

    async getImage() {
        throw new Error("Method 'getImage()' must be implemented.");
    }
}

// Weather
export const WeatherState = {
    sunny: "sunny",
    rain: "rain"
};

export function WeatherStatus({ location, temperature, state }) {
    this.location = location;
    this.temperature = temperature;
    this.state = state;
}

export class WeatherService {
    constructor() {
        if (this.constructor === WeatherService) {
            throw new Error("Base class can't be instantiated.");
        }
    }

    async getWeather() {
        throw new Error("Method 'getWeather()' must be implemented.");
    }
}
