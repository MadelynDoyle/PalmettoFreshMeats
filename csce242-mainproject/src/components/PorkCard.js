const PorkCard = ({ pork }) => {
  return (
    <div className="product-card">
      <img src={`https://palmettofreshmeatsserver.onrender.com/${pork.image}`} alt={pork.name} />
      <div className="product-info">
        <h4>{pork.name}</h4>
        <p>{pork.cutDescription}</p>
        <p>{pork.averageWeight}</p>
        <p>{pork.pricePerPound}</p>
      </div>
    </div>
  );
};

export default PorkCard;

  