function BottombarView() {
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
  }
  
  export default BottombarView;
  