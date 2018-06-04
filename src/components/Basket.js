import React, { Component } from 'react';
import { connect } from 'react-redux';

import BasketItem from './BasketItem';

class Basket extends Component {
  render() {
    return (
      <div className="basket">
        Корзина:
        <ul className="basket__list">
          {this.props.store.map((item, index) =>
            <BasketItem key={item.id} data={item} index={index}/>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    store: state.basket
  }),
)(Basket);
