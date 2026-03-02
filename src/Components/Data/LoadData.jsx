import { use, useState } from "react";
import Main from "../Main/Main";
import { FaRegHeart } from "react-icons/fa";
import FavoriteItems from "../Favorite/FavoriteItems";
import { toast } from "react-toastify";

const LoadData = ({ promiseData }) => {
  const data = use(promiseData);

  const [favitem,setFavItem] = useState([])

  const handleCancel = (item) =>{
   const removeItems = favitem.filter(removeitem => removeitem.id !== item.id)
   toast('Remove')
   setFavItem(removeItems)
    
  }

  const handleItem = (item)=> {
    const newItem = [...favitem,item]
    toast.success("Added")
    setFavItem(newItem)
  }
    
    


  return (
    <div className="bg-[#ebf0f5] min-h-screen">
      <div className="w-11/12 mx-auto pt-20">
        <h1 className="font-bold text-2xl">Active Auctions</h1>
        <p className="mt-3">Discover and bid on extraordinary items</p>
        <div className="grid grid-cols-1 lg:grid-cols-9">
          <div className="col-span-6 mt-15 space-y-8 lg:grid grid-cols-3">
            {data.map((item) => (
              <Main key={item.id} handleItem={handleItem} item={item}></Main>
            ))}
          </div>
          <div className="col-span-2 mt-15 bg-white rounded-xl h-[500px]">
            <div className="flex items-center pt-5 justify-center gap-3 border-b border-gray-200">
              <FaRegHeart size={20} />
              <h1 className="font-bold text-2xl">Favorite Items</h1>
            </div>
            <div className="">
              <h1 className="flex justify-center items-center text-2xl mt-5">
                No Favorite Items
              </h1>
              <div>
                {
                    favitem.map(item => <FavoriteItems key={item.id} handleCancel={handleCancel} item = {item}></FavoriteItems>)
                }
              </div>
            </div>
            <div className="border-b border-gray-200 mt-40"></div>
            <div className="flex justify-between px-5 items-center">
              <h1 className="font-bold text-xl">Total Amount</h1>
              <p className="font-bold text-xl">$ 0000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadData;








