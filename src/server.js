import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "../.env" });
const connectionString = process.env.MONGO_CONNECTION_STRING;
const port = process.env.PORT || 4000;

mongoose.connect(connectionString, (err, data) => {
  err ? console.log(err) : console.log("Conexão com banco de dados realizada com sucesso");
})

const server = app.listen(port, () => {
  console.log(`Api rodando na porta ${port}`);
})

