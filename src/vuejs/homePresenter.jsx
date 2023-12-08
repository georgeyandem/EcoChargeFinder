import HomeView from "../views/homeView.jsx";

export default function Home(props) {

        return (
            <HomeView       number={props.model.numberOfCharger}
                            info={props.model.chargers} 
            />
        );
    }