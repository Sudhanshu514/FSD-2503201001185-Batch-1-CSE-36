import React from "react";

// Simple Function (Not a React Component)
function add(a, b) {
    return a + b;
}

// React Component
function Welcome() {
    return (
        <h1>Jai Ho..</h1>
    );
}

// Another React Component
function Info() {
    return (
        <div>
            <p>This is a paragraph.</p>
        </div>
    );
}

// Main App Component
function App() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Your React Component</h1>

            <Welcome />
            <Info />

            <h3>How to use Components</h3>
            <p>use component like HTML tag :&lt;Welcome /8gt;</p>
             <h3>difference between function and component</h3>
            <p>normal function as a :::Addition of 10 and 20 = {add(10, 20)}</p>
            {/* This is a React Comment */}
        </div>
    );
}

export default App;