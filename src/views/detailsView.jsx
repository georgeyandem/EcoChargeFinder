export default function DetailsView(props) {
  function handleButtonClick() {
    props.favoritebutton();
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4">
      <section className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="md:w-1/2 w-full">
            <img
              alt="Station"
              className="w-full h-full object-cover object-center"
              src="/detailImage.jpg"
            />
          </div>
          <div className="md:w-1/2 w-full p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Station Name</h2>
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              {props.stationInfo?.address?.amenity || "Station Details"}
            </h1>
            <p className="mb-4 text-gray-600">
              <strong>Country:</strong> {props.stationInfo.address.country}<br />
              <strong>City:</strong> {props.stationInfo.address.city}<br />
              <strong>Street:</strong> {props.stationInfo.address.postcode} {props.stationInfo.address.road}<br />
              <strong>Place Rank:</strong> {props.stationInfo.place_rank}
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
