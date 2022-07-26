import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contato.devsclub@gmail.com',
        pass: 'lyzkkryokstexndd',
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export default transporter;
