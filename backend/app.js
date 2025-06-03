import { configDotenv } from "dotenv";
import Server from "./models/Server.js"

configDotenv();
const server = new Server();
//*Iniciando el servidor
server.listen();