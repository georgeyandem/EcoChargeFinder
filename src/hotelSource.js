import {BASE_URL, API_KEY} from "./apiConfig.js";

export function getHomeDetails(array_of_hotel_ids){
    const id_args = dish_ids.join(",");         //or without ","

    return fetch(BASE_URL+"recipes/informationBulk?ids="+id_args, {
        headers: {
            "X-Mashape-Key": API_KEY
        }
    }).then(getJsonACB);            //response -Java Script Object Notation
}
//export function getHotelDetails(id) {}
//export function searchDishes(searchParams){} 