import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage'
import ProductOptions from '../ProductOptions/ProductOptions'


const Product = props => {
  const [currentColor, setCurrentColor]  = useState(props.colors[0]);
  const [currentSize, setCurrentSize]  = useState(props.sizes[0]);

  const getPrice = useMemo(() => {
    return props.basePrice + currentSize.additionalPrice;
  }, [props.basePrice, currentSize.additionalPrice]);
 
  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} title={props.title}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>
        <ProductOptions  
          totalPrice = {getPrice} 
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

Product.propTypes ={
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,

};

export default Product;