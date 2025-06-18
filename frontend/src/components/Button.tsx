import { type PropsWithChildren } from "react";

type Props = {
  className: string;
  onClick: () => void;
};
export default function Button({
  className,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={`px-8 py-4 text-lg rounded shadow transition-all flex justify-between items-center gap-5 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
