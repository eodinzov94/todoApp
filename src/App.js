import React from 'react';
import './Components/CommonStyles/Common.css';
import Navbar from "./Components/Navbar/Navbar";
import TodosBody from "./Components/TodoBody/TodosBody";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
        <main>
            <Navbar/>
            <TodosBody/>
            <Footer/>
        </main>
    </div>
  );
}

export default App;
