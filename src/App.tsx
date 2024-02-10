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
    tele.mainButton.text = "Pay";
    tele.mainButton.show();
  };

  return (
    <div className="bg-slate-800">
      <div className="text-white mx-auto text-center p-5 font-bold text-4xl">
        Your Order!
      </div>

      <Cart cartItem={cartItem} onCheckout={onCheckout} />
      <div className="flex flex-wrap justify-center  p-10 gap-16 max-auto ">
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
