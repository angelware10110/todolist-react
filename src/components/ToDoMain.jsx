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

        const addToDoNewTask = (text) => {
            //turiu iskviesti setTasks metoda
            //turiu prideti nauja uzduoti i esamu uzduociu sarasa
            const temVar = [...tasks, {text, isCompleted: false }];
            setTasks(temVar);

        }


  return (
    <div>

        <TableForTasks list={tasks}  />
        <FormForTask addToDoNewTask={addToDoNewTask} />


    </div>
  )
}

export default ToDoMain