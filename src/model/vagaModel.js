import mongoose from "mongoose";
import skillSchema from "./skillSchema.js";

const vagaSchema = mongoose.Schema(
    {
        empresa: {
            type: mongoose.Types.ObjectId,
            ref: 'Empresa',
            require: [true, 'A vaga deve possuir uma empresa']
        },
        skills: [skillSchema] ,
        ativa: {
            type: Boolean,
            default: true
        }

    }
);

const Vaga = mongoose.model("Vaga", vagaSchema);

export default Vaga;
