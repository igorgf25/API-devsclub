import mongoose from "mongoose";

const vagaSchema = mongoose.Schema(
    {
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
