import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
