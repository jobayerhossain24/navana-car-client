import img from "../../assets/images/notFound/404-error.avif";
import NavBar from "../Shared/NavBar/NavBar";

const NotFound = () => {
  return (
    <div>
      <NavBar></NavBar>

      <img className="w-full " src={img} alt="" />
    </div>
  );
};

export default NotFound;
