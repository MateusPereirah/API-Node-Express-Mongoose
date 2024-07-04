import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true},
    editora: { type: String},
    preco: { type: Number},
    paginas: { type: Number}
}, { versionKey: false });

const Livro = mongoose.model("Livros", livroSchema, "Livros");

export default Livro;
