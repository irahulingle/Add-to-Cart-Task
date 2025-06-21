import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
