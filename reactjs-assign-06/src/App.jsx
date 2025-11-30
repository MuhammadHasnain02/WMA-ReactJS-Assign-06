import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MiddleSection from "./components/MiddleSection";

function App() {

  return (

    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <MiddleSection />
      <Footer />
    </div>
    
  );
  
}

export default App