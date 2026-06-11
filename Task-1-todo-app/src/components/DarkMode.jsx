// import { useState, useEffect } from "react";


export default function DarkMode({darkMode, setDarkMode}) {
    return(
        <button className="border md:ml-150 mt-10 px-4 py-2 rounded-3xl bg-blue-300 text-indigo-600" onClick={ () => setDarkMode(!darkMode)}>
            {darkMode ? "☀️Light" : "🌚Dark"}
        </button>
    );
}