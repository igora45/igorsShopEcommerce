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
  const [wishItems, setWishItems] = useState(getDefaultValue());
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [responsiveValue, setResponsiveValue] = useState(false);

  const AddToWishList = itemId => {
    setWishItems(prev => ({ ...prev, [itemId]: 1 }));
  };
  const RemoveFromWishList = itemId => {
    setWishItems(prev => ({ ...prev, [itemId]: 0 }));
  };

  const WishListItems = () => {
    let items = 0;
    for (const item in wishItems) {
      if (wishItems[item] > 0) items += wishItems[item];
    }
    return items;
  };
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
    responsiveValue,
    setResponsiveValue,
    WishListItems,
    wishItems,
    setWishItems,
    AddToWishList,
    RemoveFromWishList,
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
