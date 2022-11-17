import Home from "./pages/home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./style1.css";
import historical from "./pages/historical/historical"
import ForgetPasswordPage from "./pages/ForgotPassword/ForgetPasswordPage";
import fusioncharts from "./components/FusionCharts/fusioncharts";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="dashboard" element={<Home/>} component={Home } />
            <Route path="login" element={<Login />} component={ Login } />
            <Route path="/forget-password" element={<ForgetPasswordPage/>} component={ForgetPasswordPage}/>
            <Route path="register"element={<Register />} component={ Register } />
            <Route path="data-visualization"  element={<fusioncharts/>} component={fusioncharts}/>
            <Route path="historical" element={<historical/>} component={historical } />
            <Route path="transformers">
              <Route index element={<List />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Transformer" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
