import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Goods from './Goods';
import About from './About';
import Basket from './Basket';
import GoodCard from './GoodCard';

class Main extends Component {
    render() {
        return(
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Goods}/>
                    <Route path='/about' component={About}/>
                    <Route path='/basket' component={Basket}/>
                    <Route path='/good:id' component={GoodCard}/>
                </Switch>
            </div>
        )
    }
}

export default Main