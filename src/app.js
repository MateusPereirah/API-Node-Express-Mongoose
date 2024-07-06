import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);


const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de Conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso.");
});

// 

export default app;