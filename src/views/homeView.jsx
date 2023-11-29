
function HomeView(props){
    //console.log(props.model);
    function addButtonClickACB(evt){
        console.log("test is ok");
        window.location.hash="#/ok";
    }
    return (
        <div>
            <span>The data: {props.model}</span>
            <br/>
            <div>open the console to see the model</div>
            <br/>
            <div><button onClick={addButtonClickACB}>Ok!</button></div>
            <br/>

        </div>);
}
export default HomeView;