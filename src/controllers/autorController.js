import { autor } from "../models/Autor.js";

class AutorController{

    static async listarAutores(req, res){
        try{
            const autores = await autor.find({});
            res.status(200).json(autores);
        }catch(erro){
            res.status(500).json({message: "Falha ao buscar autores."});
        }
    }

    static async listarAutor(req, res){
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        }catch(erro){
            res.status(500).json({message: "Autor não encontrado"})
        }
    }

    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(200).json({message: "Criado com sucesso.", novoAutor});
        }catch(erro){
            res.status(500).json({message: "Não foi possível cadastrar o autor"})
        }
    }

    static async atualizarAutor(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Atualizado com sucesso!"});
        }catch(erro){
            res.status(500).json({message: "Falha ao atualizar o autor."});
        }
    }

    static async excluirAutor(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Excluido com sucesso."});
        }catch(erro){
            res.status(500).json({message: "Erro ao excluir autor."});
        }
    }

}

export default AutorController;