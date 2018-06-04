import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import ProductListContainer from '../containers/ProductListContainer';
import About from './About';
import Basket from './Basket';
import ProductCard from './ProductCard';

class Main extends Component {
    
    render() {
        return(
            <div className="container">
                <Switch>
                    <Route exact path='/' component={ProductListContainer}/>
                    <Route path='/about' component={About}/>
                    <Route path='/basket' component={Basket}/>
                    <Route path='/good:id' component={ProductCard}/>
                </Switch>
            </div>
        )
    }
}

export default Main