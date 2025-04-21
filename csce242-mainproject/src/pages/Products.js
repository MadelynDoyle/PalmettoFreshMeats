import '../styles/styles.css';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import PorkCard from '../components/PorkCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [porkItems, setPorkItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    cutDescription: '',
    averageWeight: '',
    price: '',
    image: '',
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [editingId, setEditingId] = useState(null);

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
    if (!formData.cutDescription.trim()) errors.cutDescription = 'Description is required';
    if (!formData.averageWeight.trim()) errors.averageWeight = 'Average weight is required';
    if (!formData.price || isNaN(formData.price)) errors.price = 'Valid price required';
    if (!formData.image.trim()) errors.image = 'Image URL is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const endpoint = editingId
      ? `https://palmettofreshmeatsserver.onrender.com/api/beef/${editingId}`
      : `https://palmettofreshmeatsserver.onrender.com/api/beef`;

    const method = editingId ? 'PUT' : 'POST';

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        cutDescription: formData.cutDescription,
        averageWeight: formData.averageWeight,
        pricePerPound: `$${parseFloat(formData.price).toFixed(2)} per pound`,
        image: formData.image,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      if (editingId) {
        setProducts(products.map(p => p._id === editingId ? result : p));
        setSuccessMsg('Product updated successfully!');
      } else {
        setProducts([...products, result]);
        setSuccessMsg('Product added successfully!');
      }

      setFormData({ name: '', cutDescription: '', averageWeight: '', price: '', image: '' });
      setFormErrors({});
      setEditingId(null);
    } else {
      setSuccessMsg('');
      setFormErrors({ submit: result.message || 'Failed to save product' });
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      cutDescription: product.cutDescription || '',
      averageWeight: product.averageWeight || '',
      price: product.pricePerPound.replace('$', '').split(' ')[0],
      image: product.image || '',
    });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`https://palmettofreshmeatsserver.onrender.com/api/beef/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setProducts(products.filter(p => p._id !== id));
      setSuccessMsg('Product deleted successfully!');
    }
  };

  return (
    <main className="products-content">
      <h1>Beef Products</h1>
      <section className="product-images">
        {products.map(prod => (
          <ProductCard
            key={prod._id}
            product={prod}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </section>

      <form onSubmit={handleSubmit} className="add-product-form">
        <h2>{editingId ? 'Edit Product' : 'Add New Beef Product'}</h2>

        <label>Name:</label>
        <input
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}

        <label>Cut Description:</label>
        <input
          value={formData.cutDescription}
          onChange={e => setFormData({ ...formData, cutDescription: e.target.value })}
        />
        {formErrors.cutDescription && <p className="error">{formErrors.cutDescription}</p>}

        <label>Average Weight:</label>
        <input
          value={formData.averageWeight}
          onChange={e => setFormData({ ...formData, averageWeight: e.target.value })}
        />
        {formErrors.averageWeight && <p className="error">{formErrors.averageWeight}</p>}

        <label>Price Per Pound:</label>
        <input
          value={formData.price}
          onChange={e => setFormData({ ...formData, price: e.target.value })}
        />
        {formErrors.price && <p className="error">{formErrors.price}</p>}

        <label>Image URL:</label>
        <input
          value={formData.image}
          onChange={e => setFormData({ ...formData, image: e.target.value })}
        />
        {formErrors.image && <p className="error">{formErrors.image}</p>}

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({ name: '', cutDescription: '', averageWeight: '', price: '', image: '' });
            }}
          >
            Cancel Edit
          </button>
        )}

        <button type="submit">{editingId ? 'Update Product' : 'Add Product'}</button>

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
