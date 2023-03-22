const Shimmer = () => {
  return (
    <>
    <div className="search-container">
        <input
          type="text"
          className="search-input"
          place="Search"
        />
        <button className="search-button" >
          Search
        </button>
      </div>
    <div className="restaraunt-list ">
      {Array(15)
        .fill()
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"> </div>
            <div className="shimmer-h2"> </div>
            <div className="shimmer-p"> </div>
            <div className="shimmer-h4"> </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default Shimmer;
