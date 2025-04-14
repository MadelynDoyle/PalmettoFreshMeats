const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
        <img src={`https://palmettofreshmeatsserver.onrender.com/${product.image}`} alt={product.name} />
      <div className="product-info">
        <h4>{product.name}</h4>
        <p>{product.cutDescription}</p>
        <p>{product.averageWeight}</p>
        <p>{product.pricePerPound}</p>
      </div>
    </div>
  );
};

export default ProductCard;


