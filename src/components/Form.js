import {Form} from'react-bootstrap';
import './Form.css';

const FormController = () =>{
    return(
<Form className='wdt'>
    <div className='ss '>
      <Form.Label>Comentarios</Form.Label>
    </div>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
    )
}
export default FormController;