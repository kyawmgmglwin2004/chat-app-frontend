import brandIcon from "../icons/logo512.png";
import userProfile from "../assets/images/userProfile.jpg";
import { SearchOutlined, BellTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-[#e1f6f4] flex items-center justify-between h-16 py-2 ">
      <div className="flex items-center justify-center w-[10%] gap-1">
        <img src={brandIcon} alt="brandIcon" className="w-12 h-12" />
        <p className="text-lg font-bold">CHATNEST</p>
      </div>
      <div className="flex items-center gap-4 border border-[#bfe9db] rounded-lg w-[50%] px-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 w-full outline-none "
        />
        <SearchOutlined style={{ fontSize: "25px", color: "#74C5FB" }} />
      </div>
      <div className="flex items-center justify-center gap-3 w-[8%]">
        <BellTwoTone style={{ fontSize: "26px" }} />
        <Link to="/profile">
          <img
            src={userProfile}
            alt="userProfile"
            className="w-10 h-10 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
