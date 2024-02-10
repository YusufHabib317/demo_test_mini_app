type ButtonProps = {
  type: "add" | "remove" | "checkout";
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  const { type, label, disabled, onClick } = props;

  return (
    <button
      className={`
      py-[0.6rem] px-[0.8rem] text-[1.2rem] text-center border-0 outline-none rounded-[10px] font-bold text-neutral-800
      w-[120px] ml-[10px] shadow-sm cursor-pointer active:scale-[0.98]
      hover:
      ${type === "add" && "bg-[#e0c521] hover:bg-[#cab320] active:bg-[#ad9a1c]"}
      ${
        type === "remove" && "bg-red-400 hover:bg-[#c15c5c] active:bg-[#be4d40]"
      }
      ${
        type === "checkout" &&
        "bg-emerald-600 w-[150px] hover:bg-emerald-700 active:bg-emerald-800 text-white text-[14px]"
      }
`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
