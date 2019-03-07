import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'
import { fetchAllProducts, addNewProduct, updateProduct } from './modules/Products.js';
import ProductForm from './ProductForm.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
  }

  fetchAllProductsAndUpdateState = () => {
    fetchAllProducts().then(products => this.setState({ products: products }));
  }

  componentDidMount() {
    this.fetchAllProductsAndUpdateState();
  }

  componentDidUpdate() {
    this.fetchAllProductsAndUpdateState();
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Redgate products</h2>
      </div>
      <div className='products-add-product'>
        <ProductForm addNewProduct={addNewProduct} updateProduct={updateProduct} products={this.state.products} />
      </div>
      <div className='products-container'>
        <ProductMenu products={this.state.products} />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

export default App
