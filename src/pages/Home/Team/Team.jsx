import tomCruise from "../../../assets/images/team/1.jpg";
import danielCraig from "../../../assets/images/team/2.jpg";
import vinDiesel from "../../../assets/images/team/3.jpg";

const Team = () => {
  const teams = [
    {
      title: "Tom Cruise",
      img: tomCruise,
      designation: "Car Engine Expert",
    },
    {
      title: "Daniel Craig",
      img: danielCraig,
      designation: "Bike Engine Expert",
    },

    {
      title: "Vin Diesel",
      img: vinDiesel,
      designation: "Car Engine Expert",
    },
  ];
  return (
    <div>
      <div className="text-center mt-12 mb-4">
        <p className="text-2xl font-bold text-orange-600">Team</p>
        <h2 className="text-5xl font-semibold"> Meet Our Team </h2>
      </div>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <>
            <div className="card card-compact w-96 shadow-xl">
              <figure>
                <img src={team.img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{team.title} </h2>
                <p className="text-2xl text-orange-600 font-semibold">
                  {team.designation}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Team;
