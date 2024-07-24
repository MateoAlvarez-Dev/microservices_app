import express, { Request, Response } from 'express';
import { AppDataSource } from './config/connection-db';
import { DataSource } from 'typeorm';
import teamLeaderRouter from './router/teaml-ledaer.route';
import { client } from './config/eureka-client';

const app = express();
const PORT = 3000;


app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome user!" });
})

app.use("/api/v1/team-leader", teamLeaderRouter);

AppDataSource.initialize().then((source:DataSource) => {

    console.log("db connected");
    app.listen(PORT, () => {
        console.log("The server has been created. PORT= " + PORT);
        client.start(error => {
            console.log(error || "Eureka Client Started");
        });
    });

}).catch((reason) => {
    console.log(reason);
});