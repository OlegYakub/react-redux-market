import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromBasket, incrementGood, decrementGood } from '../actions';

class BasketItem extends Component{

  remove() {
    this.props.dispatch(removeFromBasket(this.props.index)); 
  }

  increment() {
    this.props.dispatch(incrementGood(this.props.data.id)); 
  }

  decrement() {
    this.props.dispatch(decrementGood(this.props.data.id));  
  }

  render() {
    let data = this.props.data;
    return (
      <li className="basket-item">
        <div className="basket-item__content">
          <div>{data.title}</div>
          <div>Цена: {data.price} грн.</div>
          <div>Артикул: {data.articul}</div>
          <div>Количество: {data.quan}</div>
        </div>
        <div className="basket-item__panel">
          <button onClick={this.decrement.bind(this)}>-</button>
          <button onClick={this.increment.bind(this)}>+</button>
          <button onClick={this.remove.bind(this)}>delete</button>
        </div>
      </li>
    )
  }
}

export default connect()(BasketItem);