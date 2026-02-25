import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* Navbar */}

      <section>
        <Navbar></Navbar>
      </section>

      {/* Header */}
      <Header>
        <div className="w-11/12 mx-auto">
          <h1 className="lg:font-bold text-3xl w-96 mt-15 text-white">
            Bid on Unique Items Froms Around The World
          </h1>
          <p className="text-white mt-5 opacity-70 w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
            earum eveniet.
          </p>
          <button className="font-semibold bg-white px-6 py-2 rounded-3xl mt-5">
            Explore Auctions
          </button>
        </div>
      </Header>
    </div>
  );
}

export default App;
