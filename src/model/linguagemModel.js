import mongoose from 'mongoose';

const linguagemSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: [true, 'A linguagem deve possuir um nome'],
        },
        classificacao: [String],
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

const Linguagem = mongoose.model('Linguagem', linguagemSchema);

export default Linguagem;
