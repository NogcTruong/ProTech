"use client";

import "./shoppingCart.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";
import Promotion from "@/components/shoppingCart/Promotion";
import SummaryOrders from "@/components/shoppingCart/SummaryOrders";
import CartItem from "./components/CartItem";
import CartHeader from "./components/CartHeader";

export default function ShoppingCartClient() {
  const [openGiftPromotion, setOpenGiftPromotion] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClearAll = () => {
    console.log("Clear all items");
  };

  const dispatch = useAppDispatch();
  const { items, totalQuantity } = useAppSelector((state: any) => state.cart);

  const handleRemoveItem = (id: string, variant: string) => {
    dispatch(removeFromCart({ id, variant }));
  };

  const handleUpdateQuantity = (
    id: string,
    variant: string,
    quantity: number
  ) => {
    dispatch(updateQuantity({ id, variant, quantity }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = 1;
    val = Math.max(1, Math.min(99, val));
    setQuantity(val);
  };

  return (
    <main className="cart-page">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 py-6">
        <div className="md:col-span-2">
          <CartHeader
            totalQuantity={totalQuantity}
            onClearAll={handleClearAll}
          />
          <div
            className={`${
              (items?.length || 0) > 1 ? "flex flex-col space-y-2 mt-6" : "mt-6"
            }`}
          >
            {items?.map((item: any) => (
              <CartItem
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onInputChange={handleInputChange}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-2">
          <Promotion
            openGiftPromotion={openGiftPromotion}
            setOpenGiftPromotion={() => setOpenGiftPromotion(true)}
            setCloseGiftPromotion={() => setOpenGiftPromotion(false)}
          />
          <SummaryOrders
            setOpenGiftPromotion={() => setOpenGiftPromotion(true)}
          />
        </div>
      </div>
    </main>
  );
}
