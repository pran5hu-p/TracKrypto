import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {CoinDetail} from "./pages/CoinDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:id" element={<CoinDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
