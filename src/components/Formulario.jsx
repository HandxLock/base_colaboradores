/* eslint-disable react/prop-types */
import{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = ({ onAgregarItem, alert }) => {
  const [colaborador, setColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setColaborador({ ...colaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };


    if (
      colaborador.nombre &&
      isValidEmail(colaborador.correo) &&
      colaborador.edad &&
      colaborador.cargo &&
      colaborador.telefono
    ) {
      onAgregarItem(colaborador);
      setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setError(null);
    } else {
      setError("Por favor, complete todos los campos correctamente.");
    }


  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={colaborador.nombre}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="correo"
            placeholder="Correo"
            value={colaborador.correo}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="edad"
            placeholder="Ingresa Edad"
            value={colaborador.edad}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="cargo"
            placeholder="Ingresa Cargo"
            value={colaborador.cargo}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="telefono"
            placeholder="Ingresa Teléfono"
            value={colaborador.telefono}
            onChange={handleInputChange}
          />
        </Form.Group>
        {alert && (
          <div className={`alert alert-${alert.tipo}`}>{alert.mensaje}</div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        <Button type="submit" variant="success" className="form-control mt-3">
          Agregar
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;
