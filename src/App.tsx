import { useEffect, useState } from "react";
import Card from "./components/card";
import Cart from "./components/cart";
import { getData } from "./db/db";
import { CardFoodT } from "./types";

function App() {
  const foods = getData();

  const [cartItem, setCartItem] = useState<CardFoodT[]>([]);

  const tele = (window as any).Telegram.WebApp;

  useEffect(() => {
    tele.ready();
  }, [tele]);

  const onAdd = (food: CardFoodT) => {
    const exist = cartItem.find((item) => item?.id === food.id);

    if (exist) {
      setCartItem(
        cartItem.map((item) =>
          item?.id === food?.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...food, qty: 1 }]);
    }
  };

  const onRemove = (food: CardFoodT) => {
    const exist = cartItem.find((item) => item?.id === food?.id)!;

    if (exist?.qty === 1) {
      setCartItem(cartItem.filter((item) => item?.id !== food?.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item?.id === food?.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay";
    tele.MainButton.show();
  };

  return (
    <div className="bg-red-100 font-sans flex flex-col">
      <div className="p-5 bg-red-300 min-w-[200px] mx-auto rounded-lg mt-10">
        <div className=" mx-auto text-center p-5 font-bold text-4xl text-slate-700 ">
          Your Order!
        </div>

        <Cart cartItem={cartItem} onCheckout={onCheckout} />
      </div>
      <div className="flex flex-wrap justify-center p-2 gap-16 max-auto ">
        {foods.map((card) => {
          return (
            <Card card={card} key={card.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
