const ProductCard = ({ product, onEdit, onDelete }) => (
  <div className="product-card">
    <img src={`https://palmettofreshmeatsserver.onrender.com/${product.image}`} alt={product.name} />
    <div className="product-info">
      <h4>{product.name}</h4>
      <p>{product.cutDescription}</p>
      <p>{product.averageWeight}</p>
      <p>{product.pricePerPound}</p>
      <button onClick={() => onEdit(product)}>Edit</button>
      <button onClick={() => onDelete(product._id)}>Delete</button>
    </div>
  </div>
);

export default ProductCard;


