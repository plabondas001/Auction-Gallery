import { FaBell } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-2">
        <div className="lg:flex justify-between items-center">
          <h1 className="text-center lg:font-semibold text-2xl text-blue-800">
            Auction<span className="text-yellow-500 font-bold">Gallery</span>
          </h1>
          <ul className="flex gap-5 lg:gap-10">
            <li>
              <a className="hover:font-bold hover:border-b" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:font-bold hover:border-b" href="#">
                Auctions
              </a>
            </li>
            <li>
              <a className="hover:font-bold hover:border-b" href="#">
                Categories
              </a>
            </li>
            <li>
              <a className="hover:font-bold hover:border-b" href="#">
                How To Works
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-5">
            <FaBell />
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
