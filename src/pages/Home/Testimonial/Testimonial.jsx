import people1 from "../../../assets/images/testimonial/people1.png";
import people2 from "../../../assets/images/testimonial/people2.png";
import people3 from "../../../assets/images/testimonial/people3.png";
import quote from "../../../assets/images/testimonial/quote.svg";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Tom Hanks",
      img: people1,
      userReview:
        "Ive been using this mechanic shop for over 8 years. Hes very knowledgeable, trustworthy, fair, and clear. He has experience in many makes. Highly recommend without reservation.",
      location: "Dhaka",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      userReview:
        "Great shop! Was traveling through town and in a rush to find a good mechanic and these guys were above amazing! Its hard to find a good honest mechanic and this is one of them! 10/10 would recommend.",
      location: "Sylhet",
    },
    {
      _id: 3,
      name: "Serena Williams",
      img: people3,
      userReview:
        " I googled an auto repair near me and chose the place for its good reviews. I am glad I chose them, quick friendly service. Upfront immediately about the price of the work done on my car and detailed why. I will recommend this shop to all my family in the area.",
      location: "Khulna",
    },
  ];
  return (
    <div className="my-16">
      <div className="flex justify-between ">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Clients Says</h2>
        </div>
        <figure className="w-24 lg:w-48">
          <img src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
