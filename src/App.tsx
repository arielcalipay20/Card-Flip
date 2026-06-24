import useCards from "./hooks/useCards";
import Controls from "./components/Controls/Controls";
import PlayerSeat from "./components/PlayerSeat/PlayerSeat";
import "./index.css";

function App() {
  const { cards, dealCard, flipBack, flipFront, slideOut } = useCards();
  return (
    <div className="app">
      <h1 className="app-title">Card Deal & Flip Animation</h1>

      <Controls
        onDeal={dealCard}
        onFlipBack={flipBack}
        onFlipFront={flipFront}
        onSlideOut={slideOut}
      />

      <p className="hint">
        &#x1F6C8; Use buttons above to deal, flip and remove the latest card.
      </p>

      <PlayerSeat cards={cards} />
    </div>
  );
}

export default App;
