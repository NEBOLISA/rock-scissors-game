// context.js
import { createContext, useContext, useState } from "react";

const PlayContext = createContext();

export function usePlayContext() {
  return useContext(PlayContext);
}

export const PlayProvider = ({ children }) => {
  const initialCount = parseInt(localStorage.getItem("points")) || 0;

  const [data, setData] = useState("");
  const [points, setPoints] = useState(initialCount);

  return (
    <PlayContext.Provider value={{ data, setData, points, setPoints }}>
      {children}
    </PlayContext.Provider>
  );
};
