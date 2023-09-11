import { useEffect, useState } from "react"
import BasicCard from "../components/Card";
import css from "./Home.module.css"

function Home() {

    const [kanye, setRest] = useState([])

    useEffect(() => {
        kayneRest()
    }, [])

    async function kayneRest() {
        try {
            var response = await fetch('https://api.kanye.rest/')
            var data = await response.json()

        setRest(data)
        } catch (error) {
            console.error("Não foi possível executar o fetch.")
        }
        
    }

    return (
        <div className={css.div}>
                <img src={process.env.PUBLIC_URL + '/images/kanye.png'} alt="KanyeREST" />
            <BasicCard frase={kanye.quote} />
            <button className={css.button} onClick={kayneRest}>Obter mais perólas</button>
        </div>
    )
}

export default Home