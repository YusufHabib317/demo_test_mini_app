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
       rounded-lg flex justify-center items-center px-3 py-1
       text-slate-700
  
      ${type === "add" && "bg-[#ceebf6] hover:bg-[#b7e4f5] active:bg-[#ace2f5]"}
      ${type === "remove" && "bg-red-400 hover:bg-red-500 active:bg-red-600"}
      ${
        type === "checkout" &&
        "bg-emerald-600 w-[150px] hover:bg-emerald-700 active:bg-emerald-800 "
      }
`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// py-[0.6rem] px-[0.8rem] w-[120px] ml-[10px] rounded-[10px]
