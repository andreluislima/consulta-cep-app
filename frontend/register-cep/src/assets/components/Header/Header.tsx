import NavBar from "../NavBar/NavBar";
import "./Header.css";

export default function Header() {
  return (
    <>
      <NavBar />
      <div className="container-header mt-2 mb-5 p-5">
        <div className="content-title">
          <h1>CEP Register</h1>
        </div>
        <div className="mt-3 mb-3">
          <p>Sistema de Consulta e Gerenciamento de Endereços</p>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary">Novo Registro</button>
          <button className="btn btn-secondary mx-4">Ver Registros</button>
        </div>
      </div>
    </>
  );
}
