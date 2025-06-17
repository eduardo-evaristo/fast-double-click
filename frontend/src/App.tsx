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
      console.log("Primeiro click");
      // Inserimos uma data no array
      dates.current.push(new Date());
    } else {
      // Retornamos o controle para 0
      setClickControl(false);
      // Inserimos a data final no array
      dates.current.push(new Date());
      console.log("Esse é o segundo click");
      // Daqui deveria ir pra API
      console.log(JSON.stringify(dates.current));
      // Tempo passado, em segundos
      console.log(
        (dates.current[1].getTime() - dates.current[0].getTime()) / 1000
      );
      // TODO: Aqui eu devo mandar o tempoPassado em ms para a API, junto da data
    }
  }

  return (
    <div>
      <button onClick={handleClick}> CLick here</button>
    </div>
  );
}
