import React, { Component } from 'react';
import { connect } from 'react-redux';

class GoodCard extends Component{
  render(){
    var id = this.props.match.params.id
    var data = this.props.store[id];
    
    return(
      <div>{data.title}</div>
    )
  }
}

export default connect(
  state => ({
    store: state.goods
  }),
)(GoodCard);