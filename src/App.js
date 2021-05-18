import logo from "./logo.svg";
import "./App.css";
import Counter from "./Component/Counter";
import LifeCycle from './Component/LifeCycle'
import { Component } from "react";
function App() {
    return (
        <div className="App">
            <Counter />
            <LifeCycle/>
        </div>
    );
}

export default App;
