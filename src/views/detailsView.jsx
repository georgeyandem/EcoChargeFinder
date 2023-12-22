//import "/src/style.css";

export default function DetailsView(props) {
  function handleButtonClick() {
    props.favoritebutton();
  }

  return (
    <div>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="/detailImage.jpg"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                STATION NAME
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {props.stationInfo?.address?.amenity
                  ? props.stationInfo.address.amenity
                  : "Not available"}
              </h1>

              <p class="leading-relaxed">
                {props.stationInfo.address.country}
                {props.stationInfo.address.postcode}
              </p>

              <div class="flex">
                <button
                  onClick={handleButtonClick}
                  class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
