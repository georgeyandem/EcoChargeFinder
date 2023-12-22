export default function TermsOfServiceView() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="mx-auto p-6 bg-white rounded-lg shadow-md max-w-2xl">
        <h1 className="text-3xl font-semibold border-b border-gray-300 pb-4">Terms of Service</h1>
        <div className="mt-4 text-gray-700 text-lg space-y-2">
          <p>
            Welcome to EcoChargeFinder! These terms of service ("Terms") outline the rules and
            regulations for the use of our platform. By accessing or using EcoChargeFinder, you agree
            to comply with and be bound by these Terms. If you do not agree with any part of these Terms,
            you may not use our services.
          </p>

          <h2 className="text-xl font-semibold mt-2">1. Use of EcoChargeFinder</h2>
          <p>
            EcoChargeFinder is a web application designed to help users locate charging stations for
            electric vehicles. You may use the platform for its intended purpose, and you must not misuse
            the services or use them in any way that violates applicable laws.
          </p>

          <h2 className="text-xl font-semibold mt-2">2. User Responsibilities</h2>
          <p>
            Users are responsible for their interactions with the platform. This includes, but is not
            limited to, providing accurate information, complying with relevant laws, and respecting the
            rights of other users.
          </p>

          <h2 className="text-xl font-semibold mt-2">3. Privacy Policy</h2>
          <p>
            Your use of EcoChargeFinder is also governed by our Privacy Policy. Please review the
            Privacy Policy to understand how we collect, use, and disclose your personal information.
          </p>

          <h2 className="text-xl font-semibold mt-2">4. Modification of Terms</h2>
          <p>
            EcoChargeFinder reserves the right to modify or replace these Terms at any time. Changes
            will be effective upon posting. Continued use of the platform after any such changes
            constitutes your consent to such changes.
          </p>

          <h2 className="text-xl font-semibold mt-2">5. Contact Information</h2>
          <p>
            For any questions about these Terms, please contact us at info@ecocorporation.com.
          </p>
        </div>
      </div>
    </div>
  );
}
