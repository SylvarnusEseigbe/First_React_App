import './App.css'
import { useState } from 'react'


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  

  const handleChange = (e)=>{
    setNewTask(e.target.value);
  }

  const addTask = ()=>{
    const task = {
      id: todoList.length===0? 1: todoList[todoList.length-1].id + 1,
      taskName: newTask,
      taskComplete: false
    };

    setTodoList([...todoList, task]);
  }

  const deleteTask = (id)=>{
    const newTodoList = todoList.filter((task)=>{
      if(task.id===id){
        return false
      }else{
        return true
      }
    });

    setTodoList(newTodoList);
  }

  const completeTask = (id)=>{
    const newTodoList = todoList.map((task)=>{
      if(task.id===id){
        return {...task, taskComplete:true}
      }else{
        return task
      }
    });

    setTodoList(newTodoList);
  }

  const resetTask = (id)=>{
    const newTodoList = todoList.map((task)=>{
      if(task.id===id){
        return {...task, taskComplete:false}
      }else{
        return task
      }
    });

    setTodoList(newTodoList);
  }
  
  return (
    <div className='App'>

      <div className='appTitle'>
        <h1>React To-Do App</h1>
      </div>

      <div className="addTask">
        <input onChange={handleChange}/>

        <button onClick={addTask}>Add Task</button>

      </div>

      <div className="list">
      {todoList.map((task)=>{
        // eslint-disable-next-line react/jsx-key
        return <div className='list-item'>
          <h1 style={{color: task.taskComplete===true? '#299617': 'black'}}>{task.taskName}</h1> 

          <button onClick={()=> completeTask(task.id)} className='btnComplete'>Completed</button>

          <button onClick={()=> resetTask(task.id)} className='btnReset'>Reset</button>

          <button onClick={()=> deleteTask(task.id)} className='btnDelete'>X</button>
        </div>
      })}

      </div>
     
    </div>
  )
}

export default App
