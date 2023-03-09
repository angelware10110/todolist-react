import { useState } from 'react';

import FormForTask from './FormForTask';
import TableForTasks from './TableForTasks';

const ToDoMain = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Clean my room",
            isCompleted: false
        },
        {
            id: 2,
            text: "Do my homework",
            isCompleted: false
        },
        {
            id: 3,
            text: "Go to the cinema",
            isCompleted: true
        }
        ]);

console.log(tasks);

  return (
    <div>

        <FormForTask />
        <TableForTasks list={tasks} />

    </div>
  )
}

export default ToDoMain