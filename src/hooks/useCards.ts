import { useState, useCallback } from "react";
import type { Card } from "../types/cards";
import { SUITS, VALUES } from "../constants/constants";
import { getRandom } from "../helpers/helpers";

export default function useCards() {
  const [cards, setCards] = useState<Card[]>([]);

  // deal cards
  const dealCard = useCallback(() => {
    const newCard: Card = {
      id: crypto.randomUUID(),
      suit: getRandom(SUITS),
      value: getRandom(VALUES),
      isFlipped: false,
      isExiting: false,
    };

    setCards((prev) => [...prev, newCard]);
  }, []);

  // flip front
  const flipFront = useCallback(() => {
    setCards((prev) => {
      if (prev.length === 0) {
        return prev;
      }
      return prev.map((card, index) => {
        return index === prev.length - 1 ? { ...card, isFlipped: true } : card;
      });
    });
  }, []);

  // flip back
  const flipBack = useCallback(() => {
    setCards((prev) => {
      if (prev.length === 0) {
        return prev;
      }
      return prev.map((card, index) => {
        return index === prev.length - 1 ? { ...card, isFlipped: false } : card;
      });
    });
  }, []);

  // slide out
  const slideOut = useCallback(() => {
    setCards((prev) => {
      if (prev.length === 0) {
        return prev;
      }

      const latestId = prev[prev.length - 1].id;

      setTimeout(() => {
        setCards((current) => {
          return current.filter((card) => {
            return card.id !== latestId;
          });
        });
      }, 500);

      return prev.map((card) => {
        return card.id === latestId ? { ...card, isExiting: true } : card;
      });
    });
  }, []);

  return { cards, dealCard, flipFront, flipBack, slideOut };
}
