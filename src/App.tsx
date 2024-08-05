
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";


function App() {

  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/novo',
      element: <Cadastro />
    }
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={rotas} />
    </ Provider>
  )
}

export default App;
