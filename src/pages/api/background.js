import { getBackgroundService } from "../../service";

const service = getBackgroundService();

export default (req, res) => {
    service.getImage().then(img => {
        res.statusCode = 200;
        res.json(img);
    }).catch((error) => {
        console.error(error);
        res.statusCode = 500;
        res.json({ error: "internal" });
    });
};
