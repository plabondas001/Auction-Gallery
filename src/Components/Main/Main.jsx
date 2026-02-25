import { FaRegHeart } from "react-icons/fa";
const Main = ({ item }) => {
  return (
    <div>
      <div className="w-90 p-3 border shadow-xl border-gray-300 rounded-2xl object-cover hover:scale-110 transform transition duration-600 ease-in-out">
        <img className="h-50 w-full" src={item.image} alt="items" />
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <h1 className="font-semibold text-xl">$ {item.currentBidPrice}</h1>
          <div className="card-actions justify-between items-center">
            <p>{item.timeLeft}</p>
            <button className="cursor-pointer hover:bg-red-600 rounded-full p-1">
              <FaRegHeart size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
