import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buy } from '../actions';
import { Link } from 'react-router-dom'

class Good extends Component {

    toBuy() {
        var item = {
            title: this.props.data.title,
            price: this.props.data.price,
            articul: this.props.data.articul,
            id: this.props.data.id,
        };
        this.props.dispatch(buy(item));
    }

    render() {
        let data = this.props.data;
        return (
            <div className="good">
            <Link to={'good' + data.id}> <div className="good__title">{data.title}</div></Link>
                <div className="good__price">Цена: {data.price} грн</div>
                <div className="good__articul">Артикул: {data.articul}</div>
                <button className="good__buy" onClick={this.toBuy.bind(this)}>Купить</button>
            </div>
      );
    }
}

export default connect()(Good)