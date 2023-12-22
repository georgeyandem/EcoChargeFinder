import "/src/style.css";
function AboutView(props) {
  function backToHomeACB() {
    window.location.hash = "#/";
  }
  function handleContactClick() {
    window.location.hash = "#/contact"; 
  }
  function handleDescriptionClick() {
    window.location.hash = "#/contact"; 
  }
  return (
    <section>
      <ul>
        <li>
          <button onClick={() => handleNavigation("description")}>
            Description about how the app works
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("contact")}>
            Contact us
          </button>
        </li>
      </ul>

      <img src="/EcoChargeFinder_icon.png" alt="App Icon" />

      <button onClick={backToHomeACB}>Back to Home Page</button>
    </section>
  );
}

export default AboutView;
