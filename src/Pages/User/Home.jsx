import ImageSlider from "../../Components/User/ImageSlider";
import ExploreSports from "../../Components/User/ExploreSports";
import AboutUs from "../../Components/User/AboutUs";
import ContactInfo from "../../Components/User/ContactInfo";
function Home() {
  return (
    <div className="homepage">
      <ImageSlider />
      <ExploreSports />
      <AboutUs />
      <ContactInfo />
    </div>
  );
}

export default Home;
