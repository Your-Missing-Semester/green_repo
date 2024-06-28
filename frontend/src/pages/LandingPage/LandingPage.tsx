import LandingPageNavBar from '../../components/LandingPage/LandingPageNavBar';
import LandingPageBody from '../../components/LandingPage/LandingPageBody';
import Footer from '../../components/Footer/Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <LandingPageNavBar />
      <LandingPageBody />
      <Footer />
    </>
  );
};

export default LandingPage;
