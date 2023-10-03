import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiPencil } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";



import {
  setTodoList,
  addTodo,
  updateTodo,
 
} from "../Store/ToDoSlice.jsx";

import TaskButton from './TaskButton.jsx';
import TitleTask from './TitleTask.jsx';





export default function Todobox() {


  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
 

  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [newTask, setNewTask] = useState("");


  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);
  useEffect(() => {
    const localTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (localTodoList) {
      dispatch(setTodoList(localTodoList));
    }
  }, []);

  
  const handleAddTodo = (task) => {
    if (task.trim().length === 0) {
      alert('plz enter the task')
    } else {
      dispatch(addTodo({ task: task, id: Date.now() }));
      setNewTask("");
      setShowModal(true);
    }
    
  };

  const handleUpdateToDoList = (id, task) => {
    if (task.trim().length === 0) {
      alert("Please enter a task");
    } else {
      dispatch(updateTodo({ task: task, id: id }));
      setNewTask('')
      setCurrentTodo(null)
      setShowModal(false);
     
      
    }
  };
  const handleDeleteToDo = (id) => {
    const updatedToDoList = todoList.filter((todo) => todo.id != id);
    dispatch(setTodoList(updatedToDoList));
    localStorage.setItem("todoList", JSON.stringify(updatedToDoList));

  };

  

  return (
    <>
    <div>

           
    <TitleTask title={'TODOBOX'}/>

            


             {todoList.map(todo=>(
          <div key={todo.id}>
              <div  className="flex  mb-5 bg-Tangaroa   text-white 
                 rounded-md  py-4 px-8 justify-between">
                  <div>
              {todo.task}
                  </div>

                  <div>
              <button
                      className="bg-blue-500 text-white p-1 rounded-md ml-2"
                      onClick={() => {
                        setShowModal(true);
                        setCurrentTodo(todo);
                        setNewTask(todo.task);
                      }}
                    >
                      <TiPencil />
                    </button>
                    <button
                      className="bg-sunsetOrange text-white p-1 rounded-md ml-2"
                      onClick={() => handleDeleteToDo(todo.id)}
                    >
                      <BsTrash />
                    </button>

                  </div>
                 </div>
    
                    </div>
             ))}


           <TaskButton setShowModal={setShowModal}/>

           


           {showModal && (
            <div className="fixed w-full left-0 top-0 h-full
             bg-transparentBlack flex items-center justify-center">
               <div className="bg-white p-8 rounded-md">
           
                    <input className="border p-2 rounded-md outline-none mb-8 ml-8"
                       value={newTask}
                       onChange={(e) => setNewTask(e.target.value)}
                       placeholder={
                       currentTodo ? "Update your task here" : "Enter your task here"
                        }/>
     
                       <div className="flex justify-between">
                       {currentTodo ? (
                         <div>
                           <button onClick={() => {
                                 setShowModal(false);
                                 handleUpdateToDoList(currentTodo.id, newTask);}}
                              className="bg-green-500  text-white py-3 px-10 rounded-md ml-4">
                              Save
                           </button>

                            <button onClick={() => 
                                    setShowModal(false)}
                               className="bg-red-600 rounded-md text-white py-3 px-9 ml-4">
                              Cancel
                           </button>
                       </div> 
                     
        ) : (
          <>
                 <button className="bg-red-600 rounded-md text-white py-3 px-9 ml-4"
                        onClick={() => setShowModal(false)} >
                         Cancel
                 </button>

                 <button className="bg-green-500 text-white py-3 px-10 rounded-md ml-4"
                         onClick={() => {handleAddTodo(newTask);
                        setShowModal(false);}} >
                         Add
                 </button>      
          </>
        )}
      </div>
   
 
    </div>
  </div>
      )}
             
    </div>
   
    </>
  )
}
