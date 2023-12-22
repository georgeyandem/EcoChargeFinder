
function ContactView() {

  return (
    <div class="background-container">
      {/* Mid-bar section */}
      <div class="mid-bar-container bg-gray-200 p-8 text-center">
        <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
        <p class="text-gray-700 dark:text-gray-300">
          We'd be glad to hear from you!
        </p>
        {/* Add more text sections or content as needed */}
      </div>
   
      {/* Bottom section */}
      <div class="flex justify-between items-center p-8">
        {/* Text section without Container 1 */}
        <div class="text-center mb-4 ml-2 flex-shrink-0"> {/* Adjusted ml for left margin */}
        <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">Contact Details</h3>
        <p>Företagsnamn: EcoChargeFinder AB</p>
        <p>Address: Kistagången 16, 164 40 Kista, Stockholm</p>
        <p>Email: ecochargefinder@outlook.com</p>
        <p>Phone: +46 8-100-20-40
</p>
        {/* ... (existing bottom section code) */}
      </div>

      {/* Container 2: Business Hours */}
      <div class="text-center mb-20 ml-8 flex-shrink-0 p-20"> {/* Increased left margin */}
        <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">Business Hours</h3>
        <p>Monday to Friday: 9:00 AM to 5:00 PM</p>
        <p>Saturday and Sunday: Closed</p>
        {/* ... (existing bottom section code) */}
      </div>

    {/* Container 3: Get in Touch */}
    
      <div class="text-center mb-8 ml-2 flex-shrink-0">
        <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">Get in Touch</h3>
        <p>For general inquiries, </p>
        <p>please contact us at info@xyzcorporation.com.</p>
        <p>We welcome your questions, </p>
        <p>feedback, and collaboration ideas. </p>
        <p>Feel free to reach out!</p>
        {/* ... (existing bottom section code) */}
      </div>
    </div>
  </div>
  );
}

export default ContactView;
