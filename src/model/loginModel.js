import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
  {
    senha: {
      type: String,
      required: [true, "O usuário deve informar a senha"],
    },
    email: {
      type: String,
      required: [true, "O usuário deve informar a senha"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Login = mongoose.model("Login", loginSchema);

export default Login;