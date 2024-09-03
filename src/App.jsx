import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Login from "./components/Login";
export default function App() {
  return (
    <div className="App bg-violet-900 h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
