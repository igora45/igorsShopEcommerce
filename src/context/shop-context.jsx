import { createContext, useState } from 'react';
import { AllProducts } from '../data';

export const ShopContext = createContext(null);

const getDefaultValue = () => {
  let cart = {};
  for (let i = 1; i < AllProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = prop => {
  const [cartItems, setCartItems] = useState(getDefaultValue());
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const GetTotalAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item]) {
        let itemInfo = AllProducts.find(product => product.id === Number(item));
        total += cartItems[item] * itemInfo.productPrice;
      }
    }
    return total;
  };
  const BagItems = () => {
    let items = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        items += 1;
      }
    }
    return items;
  };
  const AddToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const RemoveFromCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const context = {
    AddToCart,
    cartItems,
    RemoveFromCart,
    GetTotalAmount,
    BagItems,
    openLogin,
    setOpenLogin,
    openRegister,
    setOpenRegister,
  };

  return (
    <ShopContext.Provider value={context}>{prop.children}</ShopContext.Provider>
  );
};
