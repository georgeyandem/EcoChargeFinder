function Test(props){
  function backACB(evt){
    console.log("back button works");
        window.location.hash="/home";
  }
    return (
        <div>
          <button onClick={backACB}>the test view works</button>
        </div>
);
}

export default Test;