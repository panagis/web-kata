import React, { Component } from 'react'

class ProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = { newProductName: "", newProductDescription: "", newProductAlreadyExists: false };
    }

    handleNewProductNameChange = (e) => {
        const productName = e.target.value;
        this.setState({ newProductName: productName });

        const products = this.props.products;
        if (products.find(p => p.name === productName)) {
            this.setState({ newProductAlreadyExists: true });
        } else if (this.state.newProductAlreadyExists === true) {
            this.setState({ newProductAlreadyExists: false });
        }
    }

    handleNewProductDescriptionChange = (e) => {
        this.setState({ newProductDescription: e.target.value });
    }

    handleAddProductSubmit = (e) => {
        const { newProductName, newProductDescription, newProductAlreadyExists } = this.state;

        if (newProductAlreadyExists) {
            this.props.updateProduct(newProductName, newProductDescription)
                .then(() => this.props.fetchAllProducts());
        } else {
            this.props.addNewProduct(newProductName, newProductDescription)
                .then(() => this.props.fetchAllProducts());
        }

        e.preventDefault();
    }

    handleDeleteProduct = () => {
        this.props.deleteProduct(this.state.newProductName)
            .then(() => this.props.fetchAllProducts());
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
                <input type="submit" value={this.state.newProductAlreadyExists ? "Update" : "Create"} />
                <button onClick={this.handleDeleteProduct}>Delete</button>
            </form>
        </React.Fragment>
    }
}

export default ProductForm;