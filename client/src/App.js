import { useState } from "react";
import Render from "./components/render";
import Search from "./components/search";
import Styles from "./styles/app.module.css"

function App() {

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  function handleInput(input){
    setInput(input)
  }

  function loadingChange (value){
    setLoading(value)
  }


  return (
    <div className={Styles.container}>
      <div>
        <Search loading={loading}  inputFunct={handleInput}/>
      </div>
      <div className={Styles.render}>
        <Render loadingFunct={loadingChange} inputValue={input}/>
      </div>
    </div>
  );
}

export default App;
