import {Route, Routes} from "react-router-dom";
import Hub from "./pages/Hub.jsx";
import AddProduct from "./pages/produit/AddProduct.jsx";
import AllProduct from "./pages/produit/AllProduct.jsx";
import ModifierProduct from "./pages/produit/ModifierProduct.jsx";
import ProductHub from "./pages/produit/ProductHub.jsx";
import Login from "./pages/Login.jsx";
import AddUser from "./pages/user/AddUser.jsx";
import CategorieHub from "./pages/categorie/CategorieHub.jsx";
import AddCategorie from "./pages/categorie/AddCategorie.jsx";
import AllCategorie from "./pages/categorie/AllCategorie.jsx";
import RequireToken from "./auth/RequireToken.js";
import ModifierCategorie from "./pages/categorie/ModifierCategorie.jsx";

function App() {

  return (
      <main>
          <Routes>
              <Route exact path="/" element={<Hub/>}/>
              <Route exact path="connexion" element={<Login/>}/>
              <Route exact path="addUser" element={<AddUser/>}/>

              <Route element={<RequireToken/>}>
              <Route exact path="hubP" element={<ProductHub/>}/>
              <Route exact path="addproduct" element={<AddProduct/>}/>
              <Route exact path="allproduct" element={<AllProduct/>}/>
              <Route exact path="modifierP/:id" element={<ModifierProduct/>}/>


              <Route exact path="hubC" element={<CategorieHub/>}/>
              <Route exact path="addCategorie" element={<AddCategorie/>}/>
              <Route exact path="allCategorie" element={<AllCategorie/>}/>
              <Route exact path="modifierC/:id" element={<ModifierCategorie/>}/>
              </Route>

          </Routes>
      </main>
  )
}

export default App
