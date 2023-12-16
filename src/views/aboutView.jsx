//import "/src/style.css";
function AboutView(props) {
  function backToHomeACB() {
    window.location.hash = "#/";
  }
  return (
    <div>
      * Description about how the app work
      <br />
      <button onClick = { () => /* handle click for "Contact us" */}> 
        Contact us
      </button>
      <br />
      <br />
      <img src="/EcoChargeFinder_icon.png" />
      <button onClick={backToHomeACB}>Back to Home Page </button>
    </div>
  );
}
export default AboutView;
