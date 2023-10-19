/* eslint-disable react/prop-types */
import Alert from "react-bootstrap/Alert";
const Alerta= ({ mensaje, tipo })=> {
  return(
    <Alert variant={tipo}>
      <p>{mensaje}</p>
    </Alert>
  )
}

export default Alerta;