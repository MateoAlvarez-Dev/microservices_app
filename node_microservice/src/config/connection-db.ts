import { DataSource } from "typeorm";
import * as mysql2 from "mysql2";

export const AppDataSource = new DataSource({
    type: "mysql",
    username: "user",
    password: "password",
    host: "192.168.89.171",
    port: 3307,
    database: "riwi_db_meta",
    synchronize: true, // si detecta nuevas entidades las creara dentro de la DB
    entities: ["src/entity/**/*.ts"], // todo lo que este dentro de estas rutas lo va a agarrar
    driver: mysql2
})