import "/src/style.css";
function AboutView(props) {
  function backToHomeACB() {
    window.location.hash = "#/";
  }
  function handleContactClick() {
    window.location.hash = "#/contact"; // Update the hash based on your route
  }
  function handleDescriptionClick() {
    window.location.hash = "#/contact"; // Update the hash based on your route
  }
  return (
    <div>
      <button onClick={handleDescriptionClick}>
        Description about how the app works
      </button>
      <br />
      <button onClick={handleContactClick}>
        Contact us
      </button>
      <br />
      <br />
      <img src="/EcoChargeFinder_icon.png" alt="App Icon" />
      <button onClick={backToHomeACB}>Back to Home Page</button>
    </div>
  );
}

export default AboutView;
