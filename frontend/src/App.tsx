import { useRef, useState } from "react";

export default function App() {
  const [clickControl, setClickControl] = useState<boolean>(false);
  const dates = useRef<Date[]>([]);

  function handleClick() {
    if (!clickControl) {
      // Deleta datas salvas, caso houver
      dates.current = [];

      // Seta novo valor, para controle
      setClickControl(true);

      // Inserimos uma data no array
      dates.current.push(new Date());
    } else {
      // Retornamos o controle para 0
      setClickControl(false);

      // Inserimos a data final no array
      dates.current.push(new Date());

      // Salvando variáveis úteis para usá-las no body
      const tempoPassadoMs =
        dates.current[1].getTime() - dates.current[0].getTime();
      const tempoPassadoSegundos =
        (dates.current[1].getTime() - dates.current[0].getTime()) / 1000;
      const data = dates.current[0];

      // Enviando dados para serem salvos no backend
      fetch("http://localhost:8000/registros", {
        method: "POST",
        body: JSON.stringify({
          tempoPassadoMs,
          tempoPassadoSegundos,
          data,
        }),
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return (
    <div>
      <button onClick={handleClick}> CLick here</button>
    </div>
  );
}
