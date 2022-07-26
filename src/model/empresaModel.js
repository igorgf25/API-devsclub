import mongoose from 'mongoose';

const empresaSchema = mongoose.Schema(
    {
        senha: {
            type: String,
            required: [true, 'A empresa deve informar a senha'],
        },
        password_reset_token: {
            type: String,
            select: false,
        },
        password_reset_expires: {
            type: Date,
            select: false,
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'A empresa deve informar a senha'],
        },
        telefone: {
            type: String,
            unique: true,
            required: [
                true,
                'A empresa deve informar um telefone para contato',
            ],
        },
        nome: {
            type: String,
            required: [true, 'A empresa  deve informar seu nome'],
        },
        descricao: {
            type: String,
            require: [true, 'A empresa deve possuir uma descrição'],
        },
        cnpj: {
            type: String,
            unique: true,
            required: [true, 'A empresa  deve informar seu CNPJ'],
        },
        roles: {
            type: Number,
            default: 2001,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

const Empresa = mongoose.model('Empresa', empresaSchema);

export default Empresa;
