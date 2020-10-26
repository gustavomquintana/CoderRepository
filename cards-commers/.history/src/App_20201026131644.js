import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  const handlePress = ( ) => {
    return <> </>
  }

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer titulo='Ofertas de la semana'/>
        <ItemCount onClick={handlePress}  stock="12" initial="1" />
    </div>
  );
}

export default App;
