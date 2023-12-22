// PrivacyPolicyView.jsx
export default function PrivacyPolicyView() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="mx-auto p-6 bg-white rounded-lg shadow-md max-w-2xl">
        <h1 className="text-3xl font-semibold border-b border-gray-300 pb-4">Privacy Policy</h1>
        <div className="mt-4 text-gray-700 text-lg space-y-4">
          <p>
            Welcome to EcoChargeFinder, your reliable companion in exploring electric vehicle (EV) charging stations worldwide. We are committed to providing a seamless and user-friendly experience while prioritizing the privacy and security of our users. Please take a moment to review our privacy policy to understand how we collect, use, and protect your information.
          </p>
          <h2 className="text-2xl font-semibold mt-4">Information We Collect:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>User Input and Searches: When you use EcoChargeFinder, we collect information related to your user input and search parameters to help you find suitable charging stations efficiently.</li>
            <li>Location Data: To enhance your experience, we may request access to your device's location services. This information is solely used to display nearby charging stations on the map.</li>
            <li>API Requests: Our application may send API requests to obtain data about charging stations. These requests are handled securely to ensure the accuracy of search results.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-4">How We Use Your Information:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personalization: The information you provide allows us to personalize your experience by displaying relevant charging stations based on your preferences and location.</li>
            <li>Improving User Experience: We analyze aggregated data to enhance our application, making it more user-friendly and efficient.</li>
            <li>Communication: If you choose to contact us through the provided contact section, we may use the provided contact information to respond to your inquiries.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-4">Information Security:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure Transmission: All data transmission between your device and our servers is encrypted to protect your information from unauthorized access.</li>
            <li>Third-Party Components: EcoChargeFinder uses third-party components for map rendering (Leaflet library). Please review their privacy policies for additional information.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
