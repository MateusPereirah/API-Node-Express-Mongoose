import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRotas.js"

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Curso de Node.js"));

    app.use((req, res, next) => {
        console.log('Middleware global executado!');
        next();
    });

    app.use(express.json(), livros, autores)
};

export default routes;