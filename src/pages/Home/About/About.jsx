import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-lg mt-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white "
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-600 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-2">
            We believe a well-maintained vehicle will run better, last longer,
            have higher resale value, and save you money in the long run. We
            believe that only through clarifying and then living up to our
            customers’ expectations, can we hope to earn their ongoing loyalty.
          </p>
          <p className="py-2">
            All parts and labor are guaranteed for at least 12 months or 12,000
            miles from the initial service date unless otherwise stated on your
            invoice and not to exceed manufactures warranty. We use only
            high-quality parts backed by a national warranty. If requested, we
            will make available your replaced parts.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
