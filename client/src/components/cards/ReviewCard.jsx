import { Star } from "lucide-react";

function ReviewCard({ photo, name, position, review, rating = 5 }) {
  return (
    <div className="flex flex-col items-center w-[370px] md:w-[320px] h-[360px] p-[20px] rounded-md bg-[#1c1d1f] border border-[#323232]">
      <div className="flex flex-col w-[320px] md:w-[280px] gap-[16px]">
        <div className="flex flex-col gap-[10px] w-[100%] h-[134px]">
          <img
            src={photo}
            alt="Client photo"
            className="rounded-full w-[80px] h-[80px] object-cover"
          />
          <div className="flex flex-col gap-[2px] w-[100%]">
            <h4 className="text-lg font-semibold text-[#fcfcfc] tracking-wide">
              {name}
            </h4>
            <p className="text-sm text-gray-500 tracking-wide">{position}</p>
          </div>
        </div>
        <p className="text-base text-[#fcfcfc] tracking-wide max-w-[100%]">
          {review}
        </p>
        <div className="flex gap-[8px] w-[100%] max-h-[24px]">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={24}
              fill={index < rating ? "#026dfc" : "#fcfcfc"}
              className={index < rating ? "text-[#026dfc]" : "text-[#fcfcfc]"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
