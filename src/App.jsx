import Header from "./Components/Header";
import Category from "./Components/Category";
import TopRest from "./Components/TopRest";
import OnlineDelivery from "./Components/OnlineDelivery";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Header/>
      <Category/>
      <TopRest/>
      <OnlineDelivery className="pt-5"/>
      <Footer/>
    </>
  );
}

export default App;

