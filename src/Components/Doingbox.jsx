import React from 'react'
import {  useSelector ,useDispatch} from "react-redux";

import {
  
  toggleCompleted,
} from "../Store/ToDoSlice.jsx";
import TitleTask from './TitleTask.jsx';

export default function Doingbox() {

  const dispatch = useDispatch();
  
  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted({ id }));
  };

  const todoList = useSelector((state) => state.todo.todoList);

  const DoingList = todoList.filter((todo) => todo.completed == false)
  

  
  return (
    <>
    <div>
    <TitleTask title={'DOINGBOX'}/>
              
             {DoingList.map(todo=>(
              <div>
              <div 
                  className={`${
                      todo.completed
                        ? "line-through text-greenTeal"
                        : "text-sunsetOrange"
                    }   flex items-center  mb-6 bg-Tangaroa  rounded-md  py-4 px-8 justify-between`}
                  

                  onClick={() => {
                      handleToggleCompleted(todo.id);
                    }}
                  
              >
              {todo.task}
                    
              </div>
    
                    </div>
             ))}


             

    
    </div>
    </>
  )
}
