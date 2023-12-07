//import "/src/style.css";
function AboutView(props){

    function backToHomeACB(){
        window.location.hash="#/"
    }
    return (
        <div>
            *   Description about how the app work 
            <br />
            *   Contact us
            <br />
            <br/>
            <img src="https://www.w3schools.com/images/w3schools_green.jpg"/>

            <button onClick={backToHomeACB}>Back to Home Page </button>
        </div>
    );

}
export default AboutView;


