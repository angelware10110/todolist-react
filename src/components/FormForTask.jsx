import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const FormForTask = ({ addToDoNewTask }) => {
  const [inputValue, setinputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputValue) return;

    addToDoNewTask(inputValue);
    setinputValue('');

  }
 
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New task</Form.Label>
        <Form.Control
        type="text"
        placeholder="Enter new task"
        value={inputValue}
        onChange={event => setinputValue(event.target.value)}
         />

      </Form.Group>
    </Form>
  )
}

export default FormForTask 