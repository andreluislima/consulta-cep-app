import "./App.css";
import Form from "./assets/components/Form";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
 
function App() {
  return (
    <>
      <div className="container-fluid container-app">
        <Header/>
        <Home/>
        

        <div>
          <h2>FORM</h2>
          <Form />
        </div>

      </div>
      {/* </div> */}
    </>
  );
}

export default App;
