export type Suit = "♠" | "♥" | "♦" | "♣";

export type CardValue =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export interface Card {
  id: string;
  suit: Suit;
  value: CardValue;
  isFlipped: boolean;
  isExiting: boolean;
}

export type CardColor = "black" | "red";
