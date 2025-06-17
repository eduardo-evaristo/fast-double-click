import { useRef, useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button";
import { Timer, TimerOff } from "lucide-react";

export default function ButtonPage() {
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
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 w-full h-16 bg-blue-950 flex items-center justify-end px-6 shadow">
        <Link
          to="/registros"
          className="bg-amber-400 text-black font-bold px-4 py-2 rounded hover:bg-amber-500 transition"
        >
          Ver registros
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center mt-16">
        <Button
          className="bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-offset-2 focus:ring-blue-950 text-slate-200 font-bold "
          onClick={handleClick}
        >
          {!clickControl ? (
            <>
              <span>
                <Timer size={60} />
              </span>
              Clique para começar!
            </>
          ) : (
            <>
              <span>
                <TimerOff size={60} />
              </span>
              Clique para finalizar!
            </>
          )}
        </Button>
      </main>
    </div>
  );
}
