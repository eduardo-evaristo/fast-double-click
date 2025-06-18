import type { Registro } from "@shared/types";
import { Link, useLoaderData } from "react-router";
import ListItem from "../components/ListItem";
import { useEffect, useState } from "react";
import { filtrarPorData, filtrarPorHora } from "../helpers/helpers";

enum Opcoes {
  DATA = "date",
  HORA = "time",
}

export default function EntriesPage() {
  const registrosOriginais = useLoaderData<Registro[]>();
  const [registros, setRegistros] = useState<Registro[]>(registrosOriginais);
  const [filterType, setFilterType] = useState<Opcoes>(Opcoes.DATA);
  const [firstValue, setFirstValue] = useState<string | undefined>();
  const [secondValue, setSecondValue] = useState<string | undefined>();

  // Função pra trocar o filtro de data p hora ou vice-versa
  function handleChangeFilter(opcao: Opcoes) {
    setFilterType(opcao);
    setFirstValue("");
    setSecondValue("");
  }

  // Estou filtrando baseado nas mudanças dos valores dos inputs de data ou hora
  useEffect(() => {
    if (filterType === Opcoes.DATA) {
      const filteredArray = filtrarPorData(
        firstValue,
        secondValue,
        registrosOriginais
      );
      setRegistros(filteredArray);
    }
    if (filterType === Opcoes.HORA) {
      const filterArray = filtrarPorHora(
        firstValue,
        secondValue,
        registrosOriginais
      );
      setRegistros(filterArray);
    }
  }, [firstValue, secondValue]);

  return (
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 w-full h-16 bg-blue-950 flex items-center justify-end px-6 shadow">
        <Link
          to="/"
          className="bg-amber-400 text-black font-bold px-4 py-2 rounded hover:bg-amber-500 transition"
        >
          Voltar
        </Link>
      </header>

      <section className="w-full bg-blue-300 mt-16 h-24 flex items-center px-4 gap-4">
        <label className="text-sm font-bold">
          Filtrar por:
          <select
            onChange={(e) => handleChangeFilter(e.target.value as Opcoes)}
            className="ml-2 rounded px-2 py-1"
          >
            <option value={Opcoes.DATA}>Data</option>
            <option value={Opcoes.HORA}>Hora</option>
          </select>
        </label>
        <div className="flex items-center gap-2">
          <label className="text-sm font-bold">
            Início:
            <input
              type={filterType.toLowerCase()}
              className="ml-2 px-2 py-1 rounded"
              onChange={(e) => setFirstValue(e.target.value)}
            />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-bold">
            Fim:
            <input
              type={filterType.toLowerCase()}
              className="ml-2 px-2 py-1 rounded"
              onChange={(e) => setSecondValue(e.target.value)}
            />
          </label>
        </div>
      </section>

      <main className="flex-1 flex items-center justify-center mt-16">
        <ul>
          {registros.map((registro, i) => (
            <ListItem registro={registro} key={i} />
          ))}
        </ul>
      </main>
    </div>
  );
}

// Função pra requisitar o JSON enquanto a página renderiza, p evitar useEffect com fetch
export async function loader() {
  const res = await fetch("http://localhost:8000/registros");
  return res.json();
}
