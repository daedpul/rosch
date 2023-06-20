
import { BrowserRouter , Routes, Route} from "react-router-dom";
import ContactUs from "../src/pages/contactus/contactus"
import LandingPage from "../src/pages/landingPage/landingPage"
import NavigationBar from "./pages/navigationBar/navigationBar";
function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/contact" element={<ContactUs />}/> */}
            {/* <Route path="/" element={<LandingPage />}/> */}
          </Routes>
      
    </div >
  );
}

export default App;
