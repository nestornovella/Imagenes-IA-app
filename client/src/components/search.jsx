import { useState } from 'react';
import Styles from '../styles/search.module.css'



function Search({inputFunct, loading}) {

    const [input , setInput] = useState("")
    
    return (
        <div className={Styles.container}>
            <h2>GENERATE YOUR PICTURE!</h2>
            <div>
                <form>
                    <div className={Styles.searchContainer}>
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" />
                        <button className={loading ? Styles.loading : Styles.null} onClick={(e)=> {e.preventDefault(); inputFunct(input); setInput("")} }>{!loading ? "search" : "loading..."}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;