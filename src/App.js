import "./App.css";
import Form from "./component/Form/Form";
import fireBaseInitialization from "./FIrebase/firebase.init";

fireBaseInitialization();
function App() {
  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}

export default App;
