function BottombarView() {
    const router = useRouter();
    return (
      <footer>
        <div>
          &copy; {new Date().getFullYear()} EcoChargeFinder. All rights reserved.
        </div>
        <div>
          <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    );
  
  const navigateToTerms = () => {
    router.push("/terms");
  };

  const navigateToPrivacyPolicy = () => {
    router.push("/privacy");
  };

  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} EcoChargeFinder. All rights reserved.
      </div>
      <div>
        <button onClick={navigateToTerms}>Terms of Service</button> |{" "}
        <button onClick={navigateToPrivacyPolicy}>Privacy Policy</button>
      </div>
    </footer>
  );

  }
  
  export default BottombarView;