import Login from "./components/auth/Login";
import Header from "./components/header/Header";

function App() {

  return (
    <div className="App">
      <Header />
      <Login saludo='hi man, logeado' />
      <h1 className="text-rose-500 bg-black text-center">river Transport </h1>
    </div>
  );
}

export default App;
