import Card from "../Card/Card.tsx";
import type { Card as CardType } from "../../types/cards.ts";
import "./PlayerSeat.css";

interface Props {
  cards: CardType[];
}
export default function PlayerSeat({ cards }: Props) {
  return (
    <div className="player-seat-container">
      <p className="player-seat-label">PLAYER SEAT</p>
      <div className="player-seat">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            isLatest={index === cards.length - 1}
          />
        ))}
        {cards.length === 0 && (
          <p className="empty-label">No cards yet. Click Deal.</p>
        )}
      </div>
    </div>
  );
}
