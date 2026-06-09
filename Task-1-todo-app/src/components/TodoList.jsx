import { useState } from "react";
import DarkMode from "./DarkMode";


export default function TodoList({todos, deleteTodo, doneTask, darkMode}){
   
    
    return(

        <div className="flex justify-center items-center flex-wrap w-full">

            <h1 className={ darkMode ? "font-bold text-3xl text-center mt-10 text-white"
            :"font-bold text-3xl text-center mt-10 "}>
                Your Task To Do
            </h1>
    
            <div  className=" space-y-4 max-h-[450px] overflow-y-auto w-full m-5">

                <div className="h-[3px] bg-gradient-to-r from-indigo-400 via-blue-400 to-green-400 mb-6"></div>
                
                <ul>
                    
                    {todos.map((todo) => (
                        <div className="flex justify-around items-center bg-gray-300 shadow-xl/20 rounded-2xl p-5 px-10 m-5">

                            <li className="text-xl list-disc list-inside  h-10 w-full" key={todo.id}>
                                <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}> {todo.task} </span>
                            </li>

                            <button className="w-16 h-9 border rounded-xl bg-gray-800 hover:bg-gray-600" onClick={() => deleteTodo(todo.id)}>🗑️</button> 
                            &nbsp;&nbsp;&nbsp;
                            <button className="w-15 h-9 border rounded-xl bg-gray-800 hover:bg-gray-400" onClick={() => doneTask(todo.id)}>👍</button>
                         
                        </div>
                    ))}
                    
                </ul>
            

            </div>
        </div>
    );
}