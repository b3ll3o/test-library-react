import React, { useState } from 'react';

export default () => {

  const [ task, updateTask ] = useState('');
  const [ tasks, updateTasks ] = useState([]);

  const handleInputChange = e => updateTask(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();

    if(task.trim()){
      updateTasks([ ...tasks, task ]);
      updateTask('');
    }
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
      >
        <input 
          data-testid='form-field'
          onChange={handleInputChange}
          placeholder='Type a new task here'
          value={task}
          type='text'
        />
        <button
          type='submit'
          data-testid='form-btn'
        >
          Add new task
        </button>
      </form>
      <table data-testid='table'>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          { tasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}