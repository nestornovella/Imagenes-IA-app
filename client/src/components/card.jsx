import Styles from '../styles/card.module.css';



function Card(image) {
    return ( 
        <div className={Styles.container}>
            <img width={256}height={256} src={'image'} alt="generateImage"/>
        </div>
     );
}

export default Card;