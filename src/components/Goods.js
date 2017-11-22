import React, { Component } from 'react';
import { connect } from 'react-redux';

import PreBasket from './PreBasket';
import Good from './Good';
//import GoodFilters from './GoodFilters';

class Goods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.store,
        };
    }

    filterByPrice(direction) {
        if (direction === '+') {
            this.setState({
                list: this.state.list.sort((GoodA, GoodB) => {
                    if (+GoodA.price < +GoodB.price) return 1
                    if (+GoodA.price > +GoodB.price) return -1
                    return 0;
                }),
            })
        } else if (direction === '-') {
            this.setState({
                list: this.state.list.sort((GoodA, GoodB) => {
                    if (+GoodA.price > +GoodB.price) return 1
                    if (+GoodA.price < +GoodB.price) return -1
                    return 0;
                }),
            })
        }
    }

    render() {
      return (
        <div className="goods-page">
            <div className="goods-page__content">
                <div className="filters">
                    Фильтровать: 
                    <button onClick={this.filterByPrice.bind(this, "+")}>По цене (от большей к меньшей)</button>
                    <button onClick={this.filterByPrice.bind(this, "-")}>По цене (от меньшей к большей)</button>
                </div>
                <div className="good-list">
                {this.state.list.map((good, index) => 
                    <Good key={index} index={index} data={good}/>
                )}
                </div>
            </div>
            <PreBasket/>
        </div>
      );
    }
}

export default connect(
    state => ({
        store: state.goods
    }),
    dispatch => ({})
)(Goods)