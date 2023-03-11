import styles from './ProductOptions.module.scss';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = (props) => {

    const addToCart = e =>{
        e.preventDefault();
        const summary = {
        name: props.title,
        price: props.totalPrice,
        size: props.currentSize.name,
        color: props.currentColor,
    }  
      // console.log(summary);
    console.log(`Summary
    =========================
    Name:   ${summary.name}
    Price:  ${summary.price}
    Size:   ${summary.size}
    Color:  ${summary.color}`);
    }

    return (
        <form>
            <OptionSize sizes={props.sizes} setCurrentSize={props.setCurrentSize} currentSize={props.currentSize}/>
            <OptionColor colors={props.colors} setCurrentColor={props.setCurrentColor} currentColor={props.currentColor}/>
            <Button className={styles.button} type = 'submit' onClick={(event)=>addToCart(event)}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
};

ProductOptions.propTypes = {
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    currentSize: PropTypes.object.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
};

export default ProductOptions;
