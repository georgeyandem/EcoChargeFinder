import BottombarView from "../views/bottombarView";

export default function BottombarPresenter() {
  const navigateToTerms = () => {
    window.location.hash = "#/terms";
  };

  const navigateToPrivacyPolicy = () => {
    window.location.hash = "#/privacy";
  };

  return (
    <BottombarView
      navigateToTerms={navigateToTerms}
      navigateToPrivacyPolicy={navigateToPrivacyPolicy}
    />
  );
}