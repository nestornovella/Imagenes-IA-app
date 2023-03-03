import { useState } from 'react';
import Styles from '../styles/search.module.css'



function Search({inputFunct}) {

    const [input , setInput] = useState("")

    return (
        <div className={Styles.container}>
            <h2>GENERATE YOUR PICTURE!</h2>
            <div>
                <form>
                    <div className={Styles.searchContainer}>
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" />
                        <button onClick={(e)=> {e.preventDefault(); inputFunct(input); setInput("")} }>search</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;