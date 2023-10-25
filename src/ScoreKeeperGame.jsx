import { useState } from "react"
export default function ScoreKeeperGame({ numPlayers = 3, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))
    // const incrementScore = (idx) => {
    //     setScores(prevScores => {
    //         const copy = [...prevScores]
    //         copy[idx] += 1
    //         return copy
    //     })
    // }
    const incrementScore = (idx) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if (i === idx) return score + 1
                return score
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0))
    }
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, index) => {
                    return (
                        <li key={index}>
                            Player {index + 1}: {score}
                            <button onClick={() => incrementScore(index)}>+1</button>
                            {score >= target && "   Winner!!"}
                        </li>
                    )
                })}
            </ul>
            <ul>
                <button onClick={reset}>Reset</button>
            </ul>
        </div>
    )
}