import React from "react";
import { useCountdown } from "../hooks/useCountdown";

const Countdown = () => {
  const daysUntilSouthKorea = "2023-05-18";
  const daysUntilHemvandring = "2023-12-31";
  const [sydkorea] = useCountdown(daysUntilSouthKorea);
  const [hem] = useCountdown(daysUntilHemvandring);

  // https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg
  return (
    <div className="py-4 bg-gray-800 rounded-xl mt-2 p-4 flex justify-between text-center">
      <div className="flex gap-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
          width={120}
          height={120}
        />
        <div className="flex flex-col self-center">
          <span className="font-mono text-5xl">
            <span>{sydkorea}</span>
          </span>
          days
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col self-center">
          <span className="font-mono text-5xl">
            <span>{hem}</span>
          </span>
          days
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default Countdown;
