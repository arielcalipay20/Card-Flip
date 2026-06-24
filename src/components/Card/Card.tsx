import "./Card.css";
import type { Card as CardType } from "../../types/cards";
import { getCardColor } from "../../helpers/helpers";

interface Props {
  card: CardType;
  isLatest: boolean;
}

export default function Card({ card, isLatest }: Props) {
  const color = getCardColor(card.suit);

  // build css class for main and inner container
  const wrapperClass = [
    "card-wrapper",
    "slide-in",
    card.isExiting ? "slide-out" : "",
  ].join(" ");

  const innerClass = ["card-inner", card.isFlipped ? "flipped" : ""].join(" ");

  return (
    <div>
      <div className={wrapperClass}>
        <div className={innerClass}>
          <div className="card-back">
            <div className="card-back-pattern"></div>
          </div>
          <div className={`card-front ${color}`}>
            <div className="card-corner">
              <span>{card.value}</span>
              <span>{card.suit}</span>
            </div>
            <span className="card-center-suit">{card.suit}</span>
            <div className="card-corner bottom">
              <span>{card.value}</span>
              <span>{card.suit}</span>
            </div>
          </div>
        </div>
        {isLatest && (
          <span className="latest-label">
            <span>&#9650;</span> Latest Card (Selected)
          </span>
        )}
      </div>
    </div>
  );
}
