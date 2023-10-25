import "./App.css"
import Counter from './Counter'
import ScoreKeeper from "./ScoreKeeper"
import EmojiClicker from "./EmojiClicker"
import ScoreKeeperGame from "./ScoreKeeperGame"

function App() {
  return (
    <>
      <ScoreKeeperGame numPlayers={10} target={5} />
    </>
  )
}

export default App
