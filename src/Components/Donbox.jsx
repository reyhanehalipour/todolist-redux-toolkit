import React from 'react'
import {  useSelector ,useDispatch} from "react-redux";


import {
 
  toggleCompleted,
} from "../Store/ToDoSlice.jsx";
import TitleTask from './TitleTask.jsx';

export default function Donbox() {

  const todoList = useSelector((state) => state.todo.todoList);
  


  const sortToDoList = todoList.filter((todo) => todo.completed == true)
  console.log(sortToDoList)

  const dispatch = useDispatch();


  
  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted({ id }));
  };

  
  return (

    <>
   
   
   
    <div>
       <TitleTask title={'DONBOX'}/>
    

              {sortToDoList.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center  mb-6 bg-Tangaroa  rounded-md  py-4 px-8 justify-between"
                >
                  <div className={`${
                      todo.completed
                        ? "line-through text-greenTeal"
                        : "text-sunsetOrange"
                    }`}

                    onClick={() => {
                      handleToggleCompleted(todo.id);
                    }}
                    
                  >
                    {todo.task}
                  </div>
                  <div>
                 
                  </div>
                </div>
              ))}
                
    

              
    </div>
    </>
  )
}
