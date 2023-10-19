/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";
import{ useState } from "react";


function Buscador({ onBuscar }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    onBuscar(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(query);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group>
        <Form.Control
          type="text"
          placeholder="Buscar colaborador"
          value={query}
          onChange={handleInputChange}
        />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Buscador;
