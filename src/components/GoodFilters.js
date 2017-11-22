import React, { Component } from 'react';
import { connect } from 'react-redux';

class GoodFilters extends Component {
  render() {
    return (
      <div className="filters">
        Фильтровать: 
        <button>По цене</button>
      </div>
    )
  }
}

export default connect()(GoodFilters);