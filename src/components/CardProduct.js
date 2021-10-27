import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduct extends Component {
  render() {
    const { card, handlePurchaseClick, cartList } = this.props;
    const priceItem = (card.price)
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    // formatação de preço ex( R$: 00,00 );

    return (
      <div data-testid="product" key={ card.id }>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/product/${card.category_id}/${card.id}`, state: cartList } }
        >
          <p>{card.title}</p>
          <img width="100" src={ card.thumbnail } alt={ card.title } />
          <p>
            Preço:
            {' '}
            { priceItem }
          </p>
        </Link>
        <button
          id={ card.id }
          type="button"
          onClick={ handlePurchaseClick }
          data-testid="product-add-to-cart"
        >
          Adicionar Item
        </button>
      </div>
    );
  }
}

export default CardProduct;

CardProduct.propTypes = PropTypes.shape({
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;
