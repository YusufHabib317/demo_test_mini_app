import { useState } from "react";
import Button from "../ui/button";
import { CardFoodT } from "../../types";

type CardProps = {
  card: {
    id: number;
    Image: string;
    price: number;
    title: string;
    qty: number;
  };
  onAdd: (card: CardFoodT) => void;
  onRemove: (card: CardFoodT) => void;
};

export default function Card(props: CardProps) {
  const { card, onAdd, onRemove } = props;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);

    onAdd(card);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);

    onRemove(card);
  };

  return (
    <div
      className={`
        flex flex-col justify-between w-[200px] h-[300px] rounded-lg shadow-lg border-2 border-[#e5cd7e] px-[0.3rem] py-[0.5rem]
        relative
    `}
    >
      <span
        className={`${
          count !== 0
            ? "absolute opacity-85 transition-all duration-150 text-[20px] font-bold flex justify-center items-center -top-5 -right-5 w-[35px] h-[35px] rounded-full bg-orange-600 text-white anim"
            : "hidden"
        }`}
      >
        {count}
      </span>

      <div className="w-[100px] h-[100px] mx-auto my-0">
        <img
          src={card.Image}
          alt={card?.title}
          className="w-full object-cover"
        />
      </div>

      <h4 className="font-[500] text-center text-[20px] text-white">
        {card.title}{" "}
      </h4>
      <div className="mx-auto text-white">Card Price : {card.price}</div>

      <div className="flex flex-row justify-center">
        <Button label="+" type="add" onClick={handleIncrement} />

        {count !== 0 ? (
          <Button label="-" type="remove" onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
