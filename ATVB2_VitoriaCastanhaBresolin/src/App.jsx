import {Routes, Route} from "react-router-dom";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { HomePage } from "./pages/Home";

import './assets/css/normalize.css';
import './assets/css/global.css';


function App() {

  return (
    <div className="App">
      
      <Header/>
      <main>
        <Routes>
          <Route path="*" element={<HomePage/>} />
        </Routes>
      </main>


      <Footer/>
    </div>

  )
}

export default App