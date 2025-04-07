const PorkCard = ({ pork }) => (
    <div className="pork-card">
      <img src={`/${pork.image}`} alt={pork.name} className="product-image" />
      <h4>{pork.name}</h4>
      <p><strong>Cut:</strong> {pork.cutDescription}</p>
      <p><strong>Weight:</strong> {pork.averageWeight}</p>
      <p><strong>Price:</strong> {pork.pricePerPound}</p>
    </div>
  );
  
  export default PorkCard;
  