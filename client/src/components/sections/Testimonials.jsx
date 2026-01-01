import SectionHeader from "../common/SectionHeader";
import ReviewCard from "../cards/ReviewCard";
import reviewOneImg from "./../../assets/images/user-male-7.jpeg";
import reviewTwoImg from "./../../assets/images/user-female-2.jpeg";
import reviewThreeImg from "./../../assets/images/user-female-3.jpeg";

function Testimonials() {
  const reviews = [
    {
      id: 1,
      photo: reviewOneImg,
      name: "John Mccatte",
      position: "Founder, SJ Digital",
      review:
        "Working with KarimStudio was a seamless experience from start to finish. The process was clear, communication was consistent, and result exceeded expectations.",
      rating: 5,
    },
    {
      id: 2,
      photo: reviewTwoImg,
      name: "Sarah Kennedy.",
      position: "Founder, SJ Digital",
      review:
        "The level of attention to detail and professionalism stood out immediately. Every stage of the project was well-structured and delivered on time.",
      rating: 4,
    },
    {
      id: 3,
      photo: reviewThreeImg,
      name: "Amina R.",
      position: "Business Owner",
      review:
        "KarimStudio turned our ideas into a clean, functional product while keeping everything transparent and organized. Highly recommended.",
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col gap-[50px] pb-[150px] items-center">
      <SectionHeader
        caption="Testimonials"
        title="What Our Clients Say"
        description="Trusted by businesses and individuals we’ve worked with."
      />
      <div className="flex flex-wrap justify-center items-center gap-[20px] md:max-w-[1200px]">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            photo={review.photo}
            name={review.name}
            position={review.position}
            review={review.review}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
