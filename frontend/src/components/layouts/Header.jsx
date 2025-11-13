import { useEffect, useState } from "react";
import api from "../../services/api";
import logo from "../../assets/images/logo.png";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //buscar dados do usuario
    api
      .get("/users/2")
      .then((response) => setUser(response.data))
      .catch((error) =>
        console.error("Erro ao buscar dados do usuário:", error)
      );
  }, []);

  return (
    <header className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="/" className="logo">
                <img src={logo} width={80} height={80} alt="Alya" />
              </a>
              {/* ***** Logo End ***** */}

              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li>
                  <a href="/#welcome">Inicio</a>
                </li>
                <li className="submenu">
                  <a href="javascript:;">Informações</a>
                  <ul>
                    {/* <li><a href="green-index.html#features">Features</a></li> */}
                    <li>
                      <a href="/#our-team">Nossa Equipe</a>
                    </li>
                    <li>
                      <a href="/#pricing-plans">Planos</a>
                    </li>
                    <li>
                      <a href="/#blog">Latests Blogs</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:;">Outros</a>
                  <ul>
                    <li>
                      <a href="/about">Sobre-Nós</a>
                    </li>
                    <li>
                      <a href="green-features.html">Serviços</a>
                    </li>
                    <li>
                      <a href="green-faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="green-blog.html">Blog</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contactos</a>
                </li>
              </ul>
              {user ? (
                <span>Bem-vindo, {user.name}</span>
              ) : (
                <span>Carregando...</span>
              )}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}

              {/* ***** Header Buttons Start ***** */}
              <ul className="header-buttons">
                <li>
                  <a className="btn-nav-line" href="#login">
                    Entar
                  </a>
                </li>
                <li>
                  <a className="btn-nav-primary" href="#register">
                    Criar Conta
                  </a>
                </li>
              </ul>
              {/* ***** Header Buttons End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
