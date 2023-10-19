import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import { BaseColaboradores } from "./db/db";
function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [items, setItems] = useState(BaseColaboradores);
  const [alert, setAlert] = useState(null);

  const agregarItem = (colaborador) => {
    const nuevoColaborador = {
      ...colaborador,
      id: (colaboradores.length + 1).toString(),
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
    setItems([...colaboradores, nuevoColaborador]);
    setAlert({ mensaje: "Colaborador agregado exitosamente", tipo: "success" });
  };
  const buscarItems = (query) => {
    const results = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(query.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(query.toLowerCase()) ||
        colaborador.edad.toString().includes(query) ||
        colaborador.cargo.toLowerCase().includes(query.toLowerCase()) ||
        colaborador.telefono.includes(query)
      );
    });
    setItems(results);
  };
  return (
    <>
      <div className="buscador">
        <Buscador onBuscar={buscarItems} />
      </div>
      <div className="formulario">
        <Formulario onAgregarItem={agregarItem} alert={alert} />
        <div className="tabla">
          <Listado data={items} />
        </div>
      </div>
    </>
  );
}

export default App;
