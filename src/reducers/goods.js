
export let initialState = {
    numberOfShowedItems: 3,
    quantityOfShowedItems: 3,
    allItems: [],
    showedItems: [],
};

export function goods(state = initialState, action) {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return  Object.assign({}, state, {
                showedItems:  [].concat(state.showedItems.sort( (goodA, goodB) => {
                    if ( action.direction === '+' ) {
                        if (+goodA.price < +goodB.price) return 1;
                        if (+goodA.price > +goodB.price) return -1;
                        return 0;
                    } else if ( action.direction === '-' ) {
                        if (+goodA.price > +goodB.price) return 1;
                        if (+goodA.price < +goodB.price) return -1;
                        return 0;
                    }
                }))
            });
        
        /* case "SEARCH_PRODUCT":
            return Object.assign({}, state, {
                showedItems: state.allItems.filter( item => item.title.includes(action.name)),
                quantityOfShowedItems: numberOfShowedItems
            }) */

        case "LOADING_PRODUCTS_LIST":
            return Object.assign({}, state, {
                showedItems: action.data,
                
            });

        /* case "INIT":
            return Object.assign({}, state, {
                showedItems: [].concat(state.allItems)
            }) */

        case "SHOW_MORE":
            return Object.assign({}, state, {
                quantityOfShowedItems: state.quantityOfShowedItems + state.numberOfShowedItems
            });
            
        case "FILTER_BY":
            return Object.assign({}, state, {
                showedItems: state.allItems.filter( (item) => {
                    return item[action.parametr] === action.value
                }),
                quantityOfShowedItems: state.numberOfShowedItems

            });
            
        default: return state;
    }
}

