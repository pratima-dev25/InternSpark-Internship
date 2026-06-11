import { useState } from "react";
import DarkMode from "./DarkMode";


export default function TodoList({todos, deleteTodo, doneTask, darkMode}){
   
    
    return(

        <div className="flex justify-around items-center flex-wrap gap-2 w-ful max-w-4xl m-5">

            <h1 className={ darkMode ? "font-bold text-2xl text-center mt-10 text-white"
            :"font-bold text-2xl text-center mt-10 "}>
                Your Task To Do
            </h1>
    
            <div  className=" space-y-4 max-h-[300px] md:max-h-[400px] overflow-y-auto overflow-x-hidden w-full">

                <div className="h-[3px] bg-gradient-to-r from-indigo-400 via-blue-400 to-green-400 mb-6"></div>
                
                <ul>
                    
                    {todos.map((todo) => (
                        <div className="flex justify-between items-center w-full bg-gray-300 shadow-xl/20 rounded-2xl p-3 m-10 break-all whitespace-normal ">

                            <li className=" flex-1 md:text-xl list-disc list-inside h-10 w-full" key={todo.id}>
                                <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}> {todo.task} </span>
                            </li>

                            <div className="flex gap-2">
                                <button className="md:w-16 md:h-9 border rounded bg-gray-800 hover:bg-gray-600" onClick={() => deleteTodo(todo.id)}>🗑️</button> 
                                &nbsp;&nbsp;&nbsp;
                                <button className="md:w-15 md:h-9 border rounded bg-gray-800 hover:bg-gray-400" onClick={() => doneTask(todo.id)}>👍</button>
                            </div>
                         
                        </div>
                    ))}
                    
                </ul>
            

            </div>
        </div>
    );
}