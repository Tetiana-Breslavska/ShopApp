import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import shortid from 'shortid';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
        <ul>
          {products.map(product => <Product key={shortid()} {...product} />)}
        </ul>
      
    </section>
  );
};


export default Products;