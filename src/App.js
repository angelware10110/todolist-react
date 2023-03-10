


import ToDoMain from "./components/ToDoMain";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="App">
            <h1 className="my-5">To do list</h1>
            <ToDoMain />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;