function HomeView(props) {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url('/home.png')` }}
    >
      <div className="bg-white bg-opacity-70 rounded p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">EcoChargeFinder</h1>
        <p className="text-lg text-gray-800 mb-4">
          Welcome to EcoChargeFinder, where finding a charging station for your electric vehicle is as simple as a tap. Our app presents a comprehensive map of EV charging locations worldwide, updated in real-time for your convenience. Dive into detailed information about each station, including availability, types of chargers, and user reviews. Enjoy the ease of locating compatible charging points on the go. Register for an account to unlock exclusive features like personalized favorite lists, tailored route planning, and real-time notifications. Join us on the journey towards sustainable transportation, made easier with EcoChargeFinder.
        </p>
      </div>
    </div>
  );
}

export default HomeView;
