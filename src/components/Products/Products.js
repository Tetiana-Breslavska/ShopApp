import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = props => {
  const [products]  = useState(productsData);

  return (
    <section>
        <ul>
          {products.map(product => <Product key={product.name} {...product} />)}
        </ul>
      
    </section>
  );
};

export default Products;