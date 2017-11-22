const initialState = [
    {
        title: 'Платье',
        articul: '22-33-44',
        price: 699,
        id: 0,
    },
    {
        title: 'Свитер',
        articul: '67-34-14',
        price: 499,
        id: 1,
    },
    {
        title: 'Штаны',
        articul: '26-45-63',
        price: 299,
        id: 2,
    },
]
export function goods(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT_GOOD":
            console.log("Привет из Товаров");
            return state;

        default: return state;
    }
}