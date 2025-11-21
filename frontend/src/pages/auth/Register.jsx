import { useState } from "react";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email e senha enviados:", email, password);

    //aqui os dados são enviados para api utilizando axios
    axios
      .post(
        "http://127.0.0.1:8000/api/V1/users",
        { name, email, password },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer 7|wv3waqGxIGwh2AD3MYPOLtnlUgvAjoHESYLPnd7H`,
          },
        }
      )
      .then((response) => {
        console.log("Resposta da API:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  }
  return (
    <>
      <div className="container text-center">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className=" rounded shadow p-4 mb-4">
            <h2>Crie sua conta</h2>
            <div className="row justify-content-center text-center">
              <div className="col-md-3 my-2">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="nome"
                />
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-3 my-2">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-3 my-2">
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="senha"
                />
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <button
                className="col-md-3 btn btn-primary mx-2 my-2"
                type="submit"
              >
                Entrar
              </button>
              <p>
                <a href="/register">Criar Conta</a>
              </p>
              <p>
                <a href="/">Voltar a Página Inicial</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
