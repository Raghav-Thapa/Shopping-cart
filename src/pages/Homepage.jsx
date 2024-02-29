import { Banner, Footer, Header } from "../components/HeaderComponent";

const Homepage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-2/3 bg-emerald-600">
          <Header />
          <Banner />
        </div>
        <div className="h-1/3 bg-black flex items-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
