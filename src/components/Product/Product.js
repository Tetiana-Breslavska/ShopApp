import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';

const Product = props => {
  const [currentColor, setCurrentColor]  = useState(props.colors[0]);
  const [currentSize, setCurrentSize]  = useState(props.sizes[0]);
  
  // console.log(props.title);
  // console.log('currentColor', currentColor);
  // console.log('currentSize', currentSize);
    
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    const totalPrice = props.basePrice + currentSize.additionalPrice;
    return totalPrice;
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key ={shortid()}>
                  <button type="button" className={clsx (size === currentSize && styles.active)} onClick = {() => setCurrentSize(size)} >{size.name}</button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => 
                  <li key ={shortid()}>
                    <button type="button" className={clsx(prepareColorClassName(color), color ===currentColor && styles.active)} onClick = {() =>setCurrentColor(color)
                  } />
                  </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

// Product.propTypes ={
//   products: PropTypes.array.isRequired

// };
export default Product;