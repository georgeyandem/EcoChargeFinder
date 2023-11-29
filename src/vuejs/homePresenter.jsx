import HomeView from "../views/homeView.jsx";

export default function Home(props) {
    const state_data    = props.model.currentHotelPromiseState.data;
    const state_promise = props.model.currentHotelPromiseState.promise;
    const state_error   = props.model.currentHotelPromiseState.error;
    
    function addButtonClickACB() {
        if (state_data) {
            console.log("test of addButtonClickACB");
        }
    }

    function searchCB(hotel) {
        return hotel.id === props.model.currentHotel;
    }

    if (state_error) {
        return (
            <span>{state_error}</span>
        );
    }

    if (state_data && state_promise) {
        return (
            <HomeView       HotelData={state_data}
                            guests={props.model.numberOfGuests}
                            //isDishInMenu={props.model.dishes.find(searchCB)}
                            onAddButtonClick={addButtonClickACB}
            />
        );
    }

    if (state_promise && !state_data) {
        return (
            <img src="https://brfenergi.se/iprog/loading.gif"/>
        );
    }
    
    if (!state_promise) {
        return (
            <span>NO DATA</span>
        );
    }    
}
