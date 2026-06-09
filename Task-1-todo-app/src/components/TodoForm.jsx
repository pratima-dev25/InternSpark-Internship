import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4} from 'uuid';
import DarkMode from "./DarkMode";

export default function TodoForm(){

    // Stores all todo items.
    const [todo, setTodo] = useState([{
        id: uuidv4(),
        task: "sample task",
        isDone: false,
    }]);

    // Stores Validation error msg.
    const [error, setError] = useState("");

    const [darkMode, setDarkMode] = useState(true);


    // Stores current input value.
    let [newTask, setNewTask] = useState("");
    


    let handleSubmit = (e) =>{
        e.preventDefault();
       
        // Validation...
        if(!newTask){
            setError("⚠️Task cannot be empty!");
            return;
        }

        setError("");

        // Add new task to todo list.
        setTodo((prevTodo) => {
            return[...prevTodo, {id: uuidv4(), task:newTask, isDone:false}];
        })
        
        // Reset input field.
        setNewTask("");
    }

    let handleChange = (e) => {
        e.preventDefault();

        // Set new task value.
        setNewTask(e.target.value);
    }
    

    let deleteTodo = (id) => {

        // Filter tasks.
        setTodo((prevTodo) => prevTodo.filter( (item) => item.id != id ));
    }

    let doneTask = (id) => {
        setTodo((prevTodo) =>

            prevTodo.map( (item) => 
                {
                    if(item.id == id){
                        return{...item, isDone: !item.isDone,};
                    }else{
                        return item; 
                    }

                }
        ));
    }





    return(
        <div>
            
            <div className={darkMode ? "bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 w-screen h-screen flex flex-wrap justify-center items-center"
                :"bg-gradient-to-r from-indigo-200 via-blue-200 to-green-200 w-screen h-screen flex flex-wrap justify-center items-center"}>

                <div className={darkMode? " border flex min-h-0 w-200 rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 justify-center items-center flex-wrap shadow-xl/20"
                    :"flex min-h-0 w-200 rounded-xl bg-gradient-to-r from-indigo-300 via-blue-300 to-green-300 justify-center items-center flex-wrap shadow-xl/20"}>

                    <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>

                    <form onSubmit={handleSubmit} className="flex justify-center flex-wrap mr-6 ">

                        <div className="w-full"> {error && ( <p className="text-red-500 mt-5 text-center mb-5 text-2xl" >{error}</p>)} </div>
                        <h1 className= { darkMode ? "font-bold text-3xl mt-5 text-white" : "font-bold text-3xl mt-5" } > ADD YOUR TASK </h1>
                            
                        <div>

                            <input value={newTask} onChange={handleChange} className="bg-gray-200 shadow-xl/20 rounded hover:bg-white my-5 h-12 text-2xl" placeholder="Enter your task" type="text" />

                            <select name="priority" id="priority" className="bg-indigo-300 shadow-xl/20 rounded hover:bg-sky-700 my-5 mx-5  h-12 text-xl">
                                <option value="very-low">Priority</option>
                                <option value="very-low">Very-Low</option>
                                <option value="low">Low</option>
                                <option value="high">High</option>
                            </select>

                            <button type="submit" className="bg-indigo-500 hover:bg-sky-700 rounded-full w-30 h-12 px-6 py-3 text-center text-l text-white mb-5 shadow-xl/20 "> Add Task </button>

                        </div>
                            
                    </form>

                    <TodoList todos={todo} deleteTodo={deleteTodo} doneTask={doneTask} darkMode={darkMode}/>
                        
                </div>
                    
            </div>

            
        </div>
    );
}