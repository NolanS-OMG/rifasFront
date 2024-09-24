import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import ComponentWithNav from "./Components/General/ComponentWithNav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComponentWithNav><HomePage /></ComponentWithNav>}></Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App
