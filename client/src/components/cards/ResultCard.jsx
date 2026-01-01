/* eslint-disable */

function ResultCard({ icon: Icon, caption, title }) {
  return (
    <div className="flex flex-col gap-[10px] p-[16px] w-[370px] md:w-[300px] rounded-lg bg-[#1c1d1f] border border-[#323232]">
      <div className="flex gap-[10px] h-[40px] w-[248px]">
        <span className="flex items-center justify-center bg-[linear-gradient(180deg,#026DFC_43%,#14366B_100%)] text-white shadow-lg shadow-sky-600/20 h-[40px] w-[40px] p-[10px] rounded-md">
          <Icon size={18} />
        </span>
        <p className="text-sm text-gray-500 tracking-wide">{caption}</p>
      </div>
      <h2 className="text-[32px] font-semibold text-left text-[#fcfcfc]">
        {title}
      </h2>
    </div>
  );
}

export default ResultCard;
