import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId()},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
}, {versionKey: false});

const autor = mongoose.model("Autores", autorSchema, "Autores");

export {autor, autorSchema};