import mongoose from 'mongoose';
import { autorSchema } from './Autor.js';

const livroSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    titulo: { type: String, required: true},
    editora: { type: String},
    preco: { type: Number},
    paginas: { type: Number},
    autor: {type: autorSchema}
}, { versionKey: false });

const Livro = mongoose.model("Livros", livroSchema, "Livros");

export default Livro;

