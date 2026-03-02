import { MdCancel } from "react-icons/md";
const FavoriteItems = ({item,handleCancel}) => {
    return (
        <div className=" relative mt-8 p-2">
            <div className=" flex items-center gap-3 border">
             <img className="w-30 h-20" src={item.image} alt=""/>
             <h1>{item.title}</h1>
             <h1 className="font-bold">$ {item.currentBidPrice}</h1>
            <div className=" absolute right-4">
            <button onClick={() => handleCancel(item)} className="cursor-pointer">
                 <MdCancel size={25}/>
            </button>
            </div>
            </div>
        </div>
    );
};

export default FavoriteItems;