import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log("Email e senha enviados:", email, password);
        
        //Aqui ele envia oos dados para a minha api 127.0.0.1:8000/api/V1/login utilizando axios
       axios.post("http://127.0.0.1:8000/api/V1/login", { email, password })
           .then(response => {
               console.log("Resposta da API:", response.data);
           })
           .catch(error => {
               console.error("Erro ao enviar dados:", error);
           });
    }

    return (
    <>
      <div className="container" >
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center text-center">
            <div className="col-md-3 my-2">
              <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            </div>
            <div className="col-md-3 my-2">
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="senha"
              />
            </div>
            <button className="col-md-6 btn btn-primary mx-2 my-2" type="submit">
              Entrar
            </button>
            <p>
              <a href="/register">Criar Conta</a>
            </p>
            <p>
              <a href="/">Voltar a Página Inicial</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
