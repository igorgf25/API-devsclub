import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "contato.devsclub@gmail.com",
        pass: "lyzkkryokstexndd"
    },
    tls: {
        rejectUnauthorized: false
    }
})


// exemplo construção de email
// const options = {
//     from: "contato.devsclub@outlook.com",
//     to: "",
//     subject: "",
//     text: ""
// }

export default transporter;