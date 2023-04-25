import { Route, Routes,Navigate } from "react-router-dom";
import { navData } from "./constants/NavData";

function App() {
  return (
    <div className="App">
      <Routes>
      {navData.map(({ id, link,element }) => (
          <Route
            key={id}
            path={link}
            element={element}
          />
        ))}
        <Route
          path="*"
          element={
           <Navigate to={'/'}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
