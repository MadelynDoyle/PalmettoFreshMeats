const ProductCard = ({ product }) => (
    <div className="product-card">
      <img src={`/${product.image}`} alt={product.name} className="product-image" />
      <h4>{product.name}</h4>
      <p><strong>Cut:</strong> {product.cutDescription}</p>
      <p><strong>Weight:</strong> {product.averageWeight}</p>
      <p><strong>Price:</strong> {product.pricePerPound}</p>
    </div>
  );
  
  export default ProductCard;
  