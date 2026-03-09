import { useMemo, useState } from "react"
import { letterToImage } from "../../utils/librasImg"
import "./style.scss"

export default function TextFiel() {
    const [word, setWord] = useState("")

    function handleChange(event: any) {
        setWord(event.target.value.toUpperCase())
    }

    const letters = useMemo(
        () => word.split("").filter((letter) => letterToImage[letter]),
        [word]
    )
    
    return (
        <div className="text-field">
            <form className="text-field-input">
                
                <textarea onChange={handleChange} placeholder="Digite o texto aqui..." value={word} />
            </form>

            <main className="text-field-main">
                {letters.map((letter, index) => (
                    <div className="text-field-letters" key={index}>
                        <div className="text-field-img">
                            <img src={letterToImage[letter]} alt={`Letra ${letter} em Libras`} key={`${letter}-${index}`} />
                        </div>
                        <span>{letter}</span>
                    </div>
                ))}
            </main>
        </div>

    
    )
}