function contactView() {
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Handle form submission logic here
      // You can access form data using event.target elements
  
      // Example:
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;
  
      /* ! needs to complete the actions below !*/
      // Perform further actions, such as sending the data to the server
    };
  
    return (
      <div>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! If you have any questions, feedback, or inquiries,
          please feel free to reach out to us using the contact information below.
        </p>
  
        <div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
  
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
  
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
  
            <button type="submit">Send Message</button>
          </form>
        </div>
  
        <div>
          {/* Additional Contact Information */}
          <h2>Additional Contact Information</h2>
          <p>
            If you prefer to contact us through other means, you can reach us at the following:
          </p>
          
          {/* Add relevant contact details such as email, phone number, etc. */}
        </div>
      </div> 
    );
  }
  
  export default contactView;
  