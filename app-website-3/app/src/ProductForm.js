import React, { Component } from 'react'
import { addNewProduct } from './modules/Products';

class ProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = { newProductName: "", newProductDescription: "" };
    }

    handleNewProductNameChange = (e) => {
        this.setState({ newProductName: e.target.value });
    }

    handleNewProductDescriptionChange = (e) => {
        this.setState({ newProductDescription: e.target.value });
    }

    handleAddProductSubmit = (e) => {
        const { newProductName, newProductDescription } = this.state;
        addNewProduct(newProductName, newProductDescription);
        e.preventDefault();
    }

    render() {
        return <React.Fragment>
            <h3>Add new product</h3>
            <form onSubmit={this.handleAddProductSubmit}>
                <label>
                    Product name:
                <input type="text" value={this.state.newProductName} onChange={this.handleNewProductNameChange} />
                </label>
                <label>
                    Description:
                <input type="test" value={this.state.newProductDescription} onChange={this.handleNewProductDescriptionChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    }
}

export default ProductForm;