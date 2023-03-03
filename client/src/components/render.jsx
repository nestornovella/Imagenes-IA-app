import { useEffect, useState } from 'react';
import { sendData } from '../functions/apiFunctios';
import Styles from '../styles/render.module.css';



function Render({ inputValue }) {

    const [image, setImage] = useState([])

    useEffect(() => {
        if (inputValue) {
            sendData(inputValue)
                .then(response => response.json())
                .then(data => setImage((prev) => [...prev, data]))

        }
    }, [inputValue])

    console.log(image)

    return (
        <div className={Styles.container}>
            {image?.map((image , index)=> {
                return <img key={index} src={image.data[0].url} alt="imageGenerate" />  
            })
            }
     
        </div>
    );
}

export default Render;