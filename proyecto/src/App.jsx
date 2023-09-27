import Navegador  from "./components/NavBar.jsx"
import Brand from "./components/Brand.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"



function App() {
  return (
    <>

    <Navegador/>
    <Brand/>
    <ItemListContainer
    greeting="Bienvenido a shop-online"
    /> 

   
    
    </>
  )

}

export default App
