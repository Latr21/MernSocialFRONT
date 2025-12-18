import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(); // useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!date) return <>Loading...</> // Loading si jamais la valeur par défaut du state date est undefined

  return (
    <div>
      <p>
        {date.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </p>
    </div>
  );
};

export default Clock;
