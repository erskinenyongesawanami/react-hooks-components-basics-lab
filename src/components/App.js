import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// ✅ Step 1: Define the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// ✅ Step 2: Use all components inside App
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
