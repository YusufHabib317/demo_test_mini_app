import { CardFoodT } from "../../types";
import Button from "../ui/button";

type CartProps = {
  cartItem: CardFoodT[];
  onCheckout: () => void;
};
export default function Cart(props: CartProps) {
  const { cartItem, onCheckout } = props;

  const totalPrice = cartItem.reduce((a, c) => a + c?.price * c?.qty, 0);

  return (
    <div className="text-white w-full flex justify-center items-center gap-16">
      {cartItem.length === 0 ? "No Items In Carts" : ""}

      <br />
      <span className="">Total Price = {totalPrice.toFixed(2)}</span>
      <Button
        label={cartItem.length === 0 ? "Order" : "Checkout"}
        type="checkout"
        disabled={cartItem.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
}
