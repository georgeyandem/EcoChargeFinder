import "/src/style.css";
function AboutView(props) {
  function backToHomeACB() {
    window.location.hash = "#/";
  }
  return (
    <div>
      <button onClick={() => { /* handle click for "Description about how the app works" */ }}>
        Description about how the app works
      </button>
      <br />
      <button onClick={() => { /* handle click for "Contact us" */ }}>
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
