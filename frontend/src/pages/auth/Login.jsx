import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email e senha enviados:", email, password);

    //Aqui ele envia oos dados para a minha api 127.0.0.1:8000/api/V1/login utilizando axios
    axios
      .post("http://127.0.0.1:8000/api/V1/login", { email, password })
      .then((response) => {
        console.log("Resposta da API:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  }

  return (
    <>
      <div className="container vh-100 m-auto align-items-center d-flex justify-content-center">
       <a href="/" className="btn btn-secondary position-absolute top-0 start-0 m-3 rounded shadow"> Voltar a Página Inicial</a>
        <div
          className="card rounded-3 shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: "400px" }}
        >
          <div className="card-header">
            <h5 className="text-center">Faça o Login</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu email..."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Sua senha..."
                  />
                </div>
              </div>
              <div className="row justify-content-center text-center">
                <div className="col-md-6 my-2">
                  <button type="submit" className="btn btn-primary w-100">
                    Entrar
                  </button>
                </div>
              </div>
              <ul className="list-unstyled mt-3 text-center">
                <li>
                  <a href="/register">Ainda não possui uma conta? Crie uma</a>
                </li>
                <li>
                  <a href="/forgot">Esqueceu a senha?</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
