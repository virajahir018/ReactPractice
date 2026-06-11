import User from "./Component/Student";
import Counter from "./Component/count";
import Axios from "./Component/axios";
import "./App.css";

function App() {
  return (
    <>
      <User name="Viraj" />
      <User name="Rahul" />
      <Counter/>
      {/* <Axios/> */}

    </>
  );
}

export default App;