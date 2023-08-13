import express from "express";
import routesHandler from "./routes/handler.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza esto con la URL de tu aplicación cliente
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Si necesitas enviar cookies u otras cabeceras de autenticación
}));
app.use(express.json());
app.use("/", routesHandler);

export default app;