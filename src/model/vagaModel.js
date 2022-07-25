import mongoose from "mongoose";

const vagaSchema = mongoose.Schema(
    {

        titulo: {
            type: String,
            require: [true, 'A vaga deve possuir um titulo']
        },
        descricao: {
            type: String,
            require: [true, 'A vaga deve possuir uma descrição']
        },
        empresa: {
            type: mongoose.Types.ObjectId,
            ref: 'Empresa',
            require: [true, 'A vaga deve possuir uma empresa']
        },
        skills: [String] ,
        ativa: {
            type: Boolean,
            default: true
        }

    }
);

const Vaga = mongoose.model("Vaga", vagaSchema);

export default Vaga;
