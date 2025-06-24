const ShimmerUI = () => {
  console.log("shimmer loading");
  return (
    <>
      <div className="flex flex-wrap py-24 gap-2">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div key={index} className="border-1 border-amber-50 bg-gray-100 w-72 h-72 rounded-md"> </div>
          ))}
      </div>
    </>
  );
};

export default ShimmerUI;
