import Navbar from "./Navbar";
import Etusivu from "./pages/Etusivu";
import Lorem from "./pages/Lorem";
import Ipsum from "./pages/Ipsum";
import Admin from "./pages/Admin";

function App () {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Etusivu/>
      break
    case "/lorem":
      component = <Lorem/>
      break
    case "/ipsum":
      component = <Ipsum/>
      break
    case "/admin":
      component = <Admin/>
      break  
  }

  return( 
  <>
    <Navbar/>
    <div className="container">{component}</div>
  </>
  )
}

export default App;
