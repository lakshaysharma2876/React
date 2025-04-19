const ShimmerUI = () => {
  console.log("shimmer loading");
  return (
    <>
      <div className="search-container-shimmer"></div>
      <div className="restaurant-list-shimmer">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div key={index} className="cards-shimmer"> </div>
          ))}
      </div>
    </>
  );
};

export default ShimmerUI;
