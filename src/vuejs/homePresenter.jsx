import HomeView from "../views/homeView.jsx";

export default function Home(props) {
    const state_data    = props.model.currentEvPromiseState.data;
    const state_promise = props.model.currentEvPromiseState.promise;
    const state_error   = props.model.currentEvPromiseState.error;
    
    function addButtonClickACB() {
        if (state_data) {
            console.log("test of addButtonClickACB");
            console.log(props.model)
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
            <HomeView       EvData={state_data}
                            guests={props.model.currentEv}
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
            <div>
                <span>NO DATA</span>
            </div>
        );
    }    
}
