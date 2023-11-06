import "./App.css";
import { HomePage } from "./Components/Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HtmlPage } from "./Components/Pages/InnerPages/HtmlPage";
import { HtmlPageInner2 } from "./Components/Pages/InnerPages/HtmlPage/htmlpage";
import { LoginPage } from "./Components/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/html" element={<HtmlPage />}></Route>
          <Route exact path="/html/:id" element={<HtmlPageInner2 />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
