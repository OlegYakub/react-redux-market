export const BUY = 'BUY'
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'
export const INCREMENT_GOOD = 'INCREMENT_GOOD'
export const DECREMENT_GOOD = 'DECREMENT_GOOD'

export function buy(item) { 
  return { type: BUY, item};
}

export function removeFromBasket(index) { 
  return { type: REMOVE_FROM_BASKET, index};
}

export function incrementGood(index) { 
  return { type: INCREMENT_GOOD, index };
}

export function decrementGood(index) { 
  return { type: DECREMENT_GOOD, index };
}