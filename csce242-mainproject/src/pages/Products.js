
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import PorkCard from '../components/PorkCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [porkItems, setPorkItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', image: '' });
  const [successMsg, setSuccessMsg] = useState('');
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetch('https://palmettofreshmeatsserver.onrender.com/api/beef')
      .then(res => res.json())
      .then(data => setProducts(data));

    fetch('https://palmettofreshmeatsserver.onrender.com/api/pork')
      .then(res => res.json())
      .then(data => setPorkItems(data));
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.price || isNaN(formData.price)) errors.price = 'Valid price required';
    if (!formData.image.trim()) errors.image = 'Image URL is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const response = await fetch('https://palmettofreshmeatsserver.onrender.com/api/beef', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      setProducts([...products, result]);
      setSuccessMsg('Product added successfully!');
      setFormData({ name: '', price: '', image: '' });
      setFormErrors({});
    } else {
      setSuccessMsg('');
      setFormErrors({ submit: result.message || 'Failed to add product' });
    }
  };

  return (
    <main className="products-content">
      <h1>Beef Products</h1>
      <section className="product-images">
        {products.map(prod => <ProductCard key={prod._id} product={prod} />)}
      </section>

      <form onSubmit={handleSubmit} className="add-product-form">
        <h2>Add New Beef Product</h2>
        <label>Name:</label>
        <input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        {formErrors.name && <p className="error">{formErrors.name}</p>}

        <label>Price:</label>
        <input value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
        {formErrors.price && <p className="error">{formErrors.price}</p>}

        <label>Image URL:</label>
        <input value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} />
        {formErrors.image && <p className="error">{formErrors.image}</p>}

        <button type="submit">Add Product</button>
        {successMsg && <p className="success">{successMsg}</p>}
        {formErrors.submit && <p className="error">{formErrors.submit}</p>}
      </form>

      <h1>Pork Products</h1>
      <section className="product-images">
        {porkItems.map(pork => <PorkCard key={pork._id} pork={pork} />)}
      </section>
    </main>
  );
};

export default Products;
