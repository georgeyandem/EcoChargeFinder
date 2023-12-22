import "/src/style.css";

function Marklist(props) {
  // check if there is result if not no need for the scroll
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center pt-8">
    <h1 className="text-3xl font-semibold text-gray-700 mb-4">Favorite Stations</h1>
    <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full text-sm text-gray-700">
        <thead className="text-xs text-white bg-gray-800 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Remove
            </th>
            <th scope="col" className="px-6 py-3">
              Station name
            </th>
            <th scope="col" className="px-6 py-3">
              Street
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          {props.favoriteData.map((result, index) => mapACB(result, index))}
        </tbody>
      </table>
    </div>
  </div>
  );

  function mapACB(results) {
    function moveToMapACB(evt) {
      //if there is no amenity get street name with postalcode
      props.tomapACB(results[0]);
    }
    function removeACB(event) {
      // Prevent the click event from bubbling up to the parent elements
      event.stopPropagation();
      console.log(results);
      props.removemark(results);
    }
    return (
      <tr
        class="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600"
        onClick={moveToMapACB}
      >
        <td class="px-6 py-4">
          
            <button class="text-red-500 hover:text-red-700 focus:outline-none" onclick={removeACB}>
            <i className="fas fa-trash-alt"></i>
            </button>
          
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 dark:text-white"
        >
          {results[0]?.address?.amenity
            ? results[0].address.amenity
            : "Not available"}
        </th>
        <td class="px-6 py-4">
          {results[0].address.postcode + " " + results[0].address.road}
        </td>
        <td class="px-6 py-4">{results[0].address.city}</td>
        <td class="px-6 py-4">{results[0].address.city}</td>
      </tr>
    );
  }
}

export default Marklist;
