import Table from 'react-bootstrap/Table';

const TableForTasks = (props) => {
  return (
    <Table striped bordered hover variant="bright">
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Process</th>
        </tr>
      </thead>
      <tbody>

      {
        props.list.map((task, index)=>(
            <tr key={index}>
                <td>{index +1}</td>
                <td>{task.text}</td>
                <td>{task.isCompleted ? "Done" : "Still in progress..."}</td>

            </tr>
        ))
    }
      </tbody>
    </Table>
  );
}

export default TableForTasks;