import NavBar from "../NavBar/NavBar";
import "./Header.css";

export default function Header() {
  return (
    <>
      <NavBar />
      <div className="container-header mt-5 mb-5">
        <div className="content-title mb-4">
          <h1>CEP Register</h1>
        </div>
        <div className="mb-3">
          <p>Sistema de Consulta e Gerenciamento de Endereços</p>
        </div>
        <div>
          <button className="btn btn-primary">Novo Registro</button>
          <button className="btn btn-secondary mx-4">Ver Registros</button>
        </div>
      </div>
    </>
  );
}
