import type { CardColor, Suit } from "../types/cards";

// get color of card
export const getCardColor = (suit: Suit): CardColor => {
  return suit === "♥" || suit === "♦" ? "red" : "black";
};

// picks a random item from any array
export const getRandom = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};
