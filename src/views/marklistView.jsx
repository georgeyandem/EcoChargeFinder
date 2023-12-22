import "/src/style.css";

function Marklist(props) {
  // check if there is result if not no need for the scroll
  return (
    <div>
      <h1>Favorite Stations</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                Remove
              </th>
              <th scope="col" class="px-6 py-3">
                Station name
              </th>
              <th scope="col" class="px-6 py-3">
                street
              </th>
              <th scope="col" class="px-6 py-3">
                City
              </th>
              <th scope="col" class="px-6 py-3">
                Country
              </th>
            </tr>
          </thead>
          <tbody>{props.favoriteData.map(mapACB)}</tbody>
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
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        onClick={moveToMapACB}
      >
        <td class="w-4 p-4">
          <div class="flex items-center">
            <button class="fa-solid fa-xmark" onclick={removeACB}></button>
          </div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {results[0].address.amenity}
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
