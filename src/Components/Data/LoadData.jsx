import { use } from "react";
import Main from "../Main/Main";

const LoadData = ({promiseData}) => {
    const data = use(promiseData)
    
    
    
    
    return (
        <div className="bg-[#ebf0f5] min-h-screen">
            <div className="w-11/12 mx-auto pt-20">
                <h1 className="font-bold text-2xl">Active Auctions</h1>
                <p className="mt-3">Discover and bid on extraordinary items</p>
                <div className="grid grid-cols-1 lg:grid-cols-8">
                   <div className="col-span-6 mt-15 space-y-8 lg:grid grid-cols-3">
                     {
                        data.map(item => <Main item = {item}></Main>)
                     }
                   </div>
                   <div className="col-span-2 mt-15">
                    <h1>second</h1>

                   </div>
                </div>
            </div>
        </div>
    );
};

export default LoadData;