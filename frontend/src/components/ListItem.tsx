import type { Registro } from "@shared/types";
import { formatarSegundos } from "../helpers/helpers";

type Props = {
  registro: Registro;
};
export default function ListItem({ registro }: Props) {
  return (
    <li className="bg-amber-400 p-4 w-2xs md:w-3xl lg:w-4xl rounded m-2">
      <p className="font-bold text-lg">
        Data:{" "}
        <span className="font-normal">
          {new Date(registro.data).toLocaleString("pt-BR")}
        </span>
      </p>
      <p className="font-bold text-lg">
        Duração:{" "}
        <span className="font-normal">
          {formatarSegundos(registro.tempoPassadoSegundos)}
        </span>
      </p>
    </li>
  );
}
