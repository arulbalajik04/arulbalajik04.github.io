// CUSTOM HOOK — types out each word, waits, deletes it, then moves to the next.
import { useEffect, useState } from "react";

const TYPE_MS = 100;
const DELETE_MS = 50;
const PAUSE_MS = 2000;

export function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[wordIndex % words.length];

    let delay = typing ? TYPE_MS : DELETE_MS;
    if (typing && text === word) delay = PAUSE_MS;

    const timer = setTimeout(() => {
      if (typing) {
        if (text === word) setTyping(false);
        else setText(word.slice(0, text.length + 1));
      } else if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, typing, wordIndex, words]);

  return text;
}
