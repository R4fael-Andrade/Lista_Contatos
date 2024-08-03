
import { Provider } from "react-redux";
import ListaDeContatos from "./containers/ListaDeContatos";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <ListaDeContatos />
      
    </ Provider>
  )
}

export default App;
