import { useEffect } from "react";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./context/context-provider";
import Home from "./pages/home";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);

  return (
    <>
      <ContextProvider>
        <Home />
      </ContextProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
