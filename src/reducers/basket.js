
export function basket(state = [], action) {
    switch (action.type) {
        case "BUY":
            action.item.quan = 1;
            if ( state.some((item) => item.id === action.item.id) ) { //(1)если в корзине есть товар с таким же айди как и у товара который мы покупаем
                return state.map((item, index) => {//то мы выводим новый массив состоящий из елементов которые в нем есть...
                    if (item.id === action.item.id) { //опять таже проверка что и на (1)
                        item.quan++ //если да, то увеличиваем колличество товара
                        return item;
                    } // если нет то просто выводим елемент без изменения
                    return item;  
                })
            } 
            return [ //если условие (1) не соблюдается то просто добавляем елемент в начало массива
                action.item,
                ...state,
            ]

        case "REMOVE_FROM_BASKET":
            var data = state.slice();
            data.splice(action.index, 1);
            return data
        
        case "INCREMENT_GOOD":
            return state.map((item, index) => {
                if (item.id === action.index) {
                    return {
                        quan: item.quan++,
                        ...item
                    }
                }
                return item
            })
            
        case "DECREMENT_GOOD":
            return state.map((item, index) => { // перебираю текущий массив корзины
                if (item.id === action.index) { 
                    if (item.quan === 0) return item // если quan в елементе = 0 то просто вывожу елемент
                    return { //если нет то вывожу с quan - 1ж
                        quan: item.quan--,
                        ...item
                    }
                }
                return item
            })
        default: return state;
    }
    
}