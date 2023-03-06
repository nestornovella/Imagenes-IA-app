import { useEffect, useState } from 'react';
import { sendData } from '../functions/apiFunctios';
import Styles from '../styles/render.module.css';



function Render({ inputValue ,loadingFunct}) {

    const [image, setImage] = useState([])

    useEffect(() => {
        if (inputValue) {
            loadingFunct(true)
            sendData(inputValue)
                .then(response => response.json())
                .then(data => setImage((prev) => [...prev, data]))
                .catch((error)=>{
                    console.log(error)
                })
        }
    
    }, [inputValue])
    
 

    return (
        <div onLoad={()=> loadingFunct(false)} className={Styles.container}>
            {image.length&& image.map((image , index)=> {
                return <img key={index} src={image.data[0].url} alt="imageGenerate" />  
            })
            }
     
        </div>
    );
}

export default Render;