import products from '../assets/products.json';
import porkItems from '../assets/pork.json';
import ProductCard from '../components/ProductCard';
import PorkCard from '../components/PorkCard';

const Products = () => (
  <main className="products-content">
    <h1>Beef Products</h1>
    <section className="product-images">
      {products.map(prod => <ProductCard key={prod._id} product={prod} />)}
    </section>
    <h1>Pork Products</h1>
    <section className="product-images">
      {porkItems.map(pork => <PorkCard key={pork._id} pork={pork} />)}
    </section>
  </main>
);

export default Products;
