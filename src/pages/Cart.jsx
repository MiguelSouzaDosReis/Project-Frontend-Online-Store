import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { BsFillCartXFill } from 'react-icons/bs';
import CartItem from '../components/CartItem';

class Cart extends Component {
  conditionRenderCart = () => {
    const { location: { state } } = this.props;
    if (state.length === 0) {
      return (
        <div>
          <Link
            to="/"
          >
            <FaArrowCircleLeft size="30" />
            <p size="30">Voltar </p>
          </Link>
          <div className="empty-cart-div">
            <BsFillCartXFill size="300" />
            <p
              className="empty-cart-message"
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>
          </div>
        </div>
      );
    }

    return (
      state && state.map((product) => (
        <CartItem
          key={ product.id }
          product={ product }
        />
      ))
    );
  }

  render() {
    return (
      <>
        { this.conditionRenderCart() }

        <Link
          to="/"
        >
          <button type="button">Voltar</button>
        </Link>
        <Link to="/checkout">
          <button data-testid="checkout-products" type="button">Comprar</button>
        </Link>
      </>
    );
  }
}

Cart.propTypes = PropTypes.shape({
  location: PropTypes.objectOf,
  state: PropTypes.objectOf,
}).isRequired;

export default Cart;
