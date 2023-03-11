import styles from './Product.module.scss';
// import clsx from 'clsx';

// import shortid from 'shortid';
import { useState } from 'react';
// import PropTypes from 'prop-types';

import ProductImage from '../ProductImage/ProductImage'
import ProductOptions from '../ProductOptions/ProductOptions'


const Product = props => {
  const [currentColor, setCurrentColor]  = useState(props.colors[0]);
  const [currentSize, setCurrentSize]  = useState(props.sizes[0]);
  
  const getPrice = () => {
    return props.basePrice + currentSize.additionalPrice;
  }
 
  return (
    <article className={styles.product}>
      <ProductImage name = {props.name} currentColor = {currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <ProductOptions  
          totalPrice = {getPrice()} 
          currentColor={currentColor} 
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          sizes={props.sizes}
          colors={props.colors}
          title={props.title}
        />
      </div>
    </article>
  )
};

// Product.propTypes ={
//   products: PropTypes.array.isRequired

// };
export default Product;