import type { Registro } from "@shared/types";

export function filtrarPorData(
  dataInicial: string | undefined,
  dataFinal: string | undefined,
  registros: Registro[]
) {
  const dataInicialDate = dataInicial ? new Date(dataInicial) : null;
  const dataFinalDate = dataFinal ? new Date(dataFinal) : null;

  return registros.filter((registro) => {
    const registroDate = new Date(registro.data);

    //SE só tivermos firsValue
    if (dataInicialDate && !dataFinalDate) {
      return registroDate >= dataInicialDate;
    }

    // Se só tivermos secondValue
    if (!dataInicialDate && dataFinalDate) {
      return registroDate <= dataFinalDate;
    }

    //Se tivermos ambas
    if (dataInicialDate && dataFinalDate) {
      return registroDate >= dataInicialDate && registroDate <= dataFinalDate;
    }

    // Se não tiver data nenhuma, não faz nada, retorna o exato mesmo array
    return true;
  });
}
// Usando h * 100 + m
export function filtrarPorHora(
  horaInicial: string | undefined,
  horaFinal: string | undefined,
  registros: Registro[]
) {
  // Transformamos as strings de hora 9se tiver) em valores aceitávels para Number()
  const horaInicialNumber = horaInicial
    ? Number(horaInicial.replace(":", ""))
    : null;
  const horaFinalNumber = horaFinal ? Number(horaFinal.replace(":", "")) : null;

  // Filtrando array
  return registros.filter((registro) => {
    const registroHora = new Date(registro.data);
    const registroHoraInt =
      registroHora.getHours() * 100 + registroHora.getMinutes();

    //SE só tivermos firstValue
    if (horaInicialNumber && !horaFinalNumber) {
      return registroHoraInt >= horaInicialNumber;
    }

    //SE só tivermos secondValue
    if (!horaInicialNumber && horaFinalNumber) {
      return registroHoraInt <= horaFinalNumber;
    }

    //Se tivermos ambos
    if (horaInicialNumber && horaFinalNumber) {
      return (
        registroHoraInt >= horaInicialNumber &&
        registroHoraInt <= horaFinalNumber
      );
    }

    // Retorna o msm, se n tive rnada
    return true;
  });
}

export function formatarSegundos(segundos: number) {
  // Cria data nula/zerada
  const date = new Date(null!);
  // Seta os segundos que temos nela
  date.setSeconds(segundos);
  // Pegamos a String ISO dela e cortamos a parte que nos interessa
  return date.toISOString().substring(11, 19);
}
