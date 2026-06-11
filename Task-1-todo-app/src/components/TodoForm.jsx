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
    
            
            <div className={darkMode ?"bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 w-full max-w-screen min-h-screen  flex flex-wrap justify-center items-center"
                :"bg-gradient-to-r from-indigo-200 via-blue-200 to-green-200 w-full max-w-screen  min-h-screen flex flex-wrap justify-center items-center"}>

                <div className={darkMode? " border flex w-full max-w-4xl mx-4 shadow-xl p-4 md:p-8 rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 justify-center items-center flex-wrap shadow-xl/20"
                    :"flex w-full max-w-4xl mx-4 rounded-xl shadow-xl p-4 md:p-8 bg-gradient-to-r from-indigo-300 via-blue-300 to-green-300 justify-center items-center flex-wrap shadow-xl/20"}>

                    <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>

                    <div className="w-full"> {error && ( <p className="text-red-500 mt-5 text-center mb-5 md:text-2xl" >{error}</p>)} </div>
                    <h1 className= { darkMode ? "font-bold text-2xl md:text-4xl my-3 text-white" : "font-bold text-2xl md:text-4xl my-3" } > ADD YOUR TASK </h1>

                    <form onSubmit={handleSubmit} className="flex justify-center flex-col md:flex-row gap-3 mx-3 md:mx-10 ">

                       
                        <div>

                            <input value={newTask} onChange={handleChange} className="bg-gray-200 shadow-xl/20 rounded hover:bg-white my-5 h-12 w-full md:w-96 text-base md:text-xl" placeholder="Enter your task" type="text" />

                            <select name="priority" id="priority" className="bg-indigo-300 shadow-xl/20 rounded hover:bg-sky-700 my-5 md:mx-3  h-12 text-xl w-full md:w-auto">
                                <option value="very-low">Priority</option>
                                <option value="very-low">Very-Low</option>
                                <option value="low">Low</option>
                                <option value="high">High</option>
                            </select>

                            <button type="submit" className="bg-indigo-500 hover:bg-sky-700 rounded-full h-12 px-4 py-2 text-center text-l text-white mb-5 shadow-xl/20 w-full md:w-auto"> Add Task </button>

                        </div>
                            
                    </form>

                    <TodoList todos={todo} deleteTodo={deleteTodo} doneTask={doneTask} darkMode={darkMode}/>
                        
                </div>
                    
            </div>

            

    );
}