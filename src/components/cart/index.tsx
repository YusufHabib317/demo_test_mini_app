import { CardFoodT } from "../../types";

type CartProps = {
  cartItem: CardFoodT[];
  onCheckout: () => void;
};
export default function Cart(props: CartProps) {
  const { cartItem, onCheckout } = props;

  const totalPrice = cartItem.reduce((a, c) => a + c?.price * c?.qty, 0);

  return (
    <div className="text-white w-full flex justify-center items-center gap-16">
      <span
        className="
        text-white text-[14px] py-[0.6rem] px-[0.8rem] ml-[10px] rounded-[10px]
        w-[100px] bg-red-400
      "
      >
        Total Price{" "}
        <span className="bg-red-600 text-white rounded-md p-[2px] ">
          {totalPrice.toFixed(2)}
        </span>
      </span>

      {cartItem.length === 0 ? (
        <button
          className={`
        text-white text-[14px] py-[0.6rem] px-[0.8rem] ml-[10px] rounded-[10px]
        w-[100px] bg-red-400
      `}
        >
          Order
        </button>
      ) : (
        <button
          className={`
          text-white text-[14px] py-[0.6rem] px-[0.8rem] ml-[10px] rounded-[10px]
          w-[100px] bg-red-400
      `}
          onClick={onCheckout}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
