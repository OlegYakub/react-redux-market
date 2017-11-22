import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { removeFromBasket } from '../actions';

class PreBasket extends Component {

    remove(index) {
      this.props.dispatch(removeFromBasket(index)); 
    }

    renderLinkToBasket() {
      let data = this.props.store;
      if (data.length) {
        return <Link to="/basket" className="btn"> Перейти в корзину</Link>
      }
    }

    render() {
      let data = this.props.store;
      let quantityOfGoods = 0;

      data.forEach((good, id) => {
        quantityOfGoods = quantityOfGoods + parseInt(good.quan);
      })
      return (
        <div className="pre-basket">
          Мини корзина: ({quantityOfGoods})
          <ul className="pre-basket__list">
            {data.map((item, index) =>
              <li key={index} className="pre-basket__item">
                <div className="pre-basket__title">{item.title}</div>
                <div>Цена: {item.price}грн</div>
                <div>{item.articul}</div>
                <button onClick={this.remove.bind(this, index)}>Удалить</button>  
                <div>({item.quan})</div>
              </li>
            )}
          </ul>
          {this.renderLinkToBasket()}
        </div>
      );
    }
}

export default connect(
    state => ({
        store: state.basket
    })
)(PreBasket)