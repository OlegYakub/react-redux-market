export const BUY = 'BUY';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const INCREMENT_GOOD = 'INCREMENT_GOOD';
export const DECREMENT_GOOD = 'DECREMENT_GOOD';
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const MORE_PRODUCT_REQUEST = 'MORE_PRODUCT_REQUEST';
export const LOADING_PRODUCTS_LIST = 'LOADING_PRODUCTS_LIST';
//export const LOADING_MORE_PRODUCTS = 'LOADING_MORE_PRODUCTS'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const SEARCH_PRODUCT_REQUEST = 'SEARCH_PRODUCT_REQUEST';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SHOW_MORE = 'SHOW_MORE';
export const FILTER_BY = 'FILTER_BY';
export const FILTER_PRODUCT_REQUEST = 'FILTER_PRODUCT_REQUEST';
//export const PRODUCT_CARD_REQUEST = 'PRODUCT_CARD_REQUEST'
export const ALL_PRODUCTS_REQUEST = 'ALL_PRODUCTS_REQUEST';

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

//loading products
export function productListRequest() {
  return { type: PRODUCT_LIST_REQUEST };
}

export function loadingProductsList(data) {
  return { type: LOADING_PRODUCTS_LIST, data };
}


//show more products
export function moreProductRequest() {
  return { type: MORE_PRODUCT_REQUEST };
}

/* export function loadingMoreProducts(data) {
  return { type: LOADING_MORE_PRODUCTS, data };
}  */

export function showMore() { 
  return { type: SHOW_MORE };
}


//search product
export function searchProductRequest(name) { 
  return { type: SEARCH_PRODUCT_REQUEST, name };
}

export function searchProduct(name) { 
  return { type: SEARCH_PRODUCT, name };
}


//product list function
export function sortByPrice(direction) { 
  return { type: SORT_BY_PRICE, direction };
}

export function filterProductRequest(parametr, value) {
  return { type: FILTER_PRODUCT_REQUEST, parametr, value };
}

export function filterBy(parametr, value) { 
  return { type: FILTER_BY, parametr, value };
}

//product page

/* export function productCardRequest(id) {
  return { type: PRODUCT_CARD_REQUEST, id };
} */

export function allProductsRequest() {
  return { type: ALL_PRODUCTS_REQUEST };
}

/* export function init() { 
  return { type: INIT };
} */