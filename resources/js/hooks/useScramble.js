import { useState, useCallback } from "react";
import { generateScramble } from "@/utils/scramble";

export const useScramble = (minLength = 22, maxLength = 26) => {
  const [scramble, setScramble] = useState(generateScramble(minLength, maxLength));

  const generateNewScramble = useCallback(() => {
    setScramble(generateScramble(minLength, maxLength));
  }, [minLength, maxLength]);

  return { scramble, generateNewScramble };
}
