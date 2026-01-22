function TechPill({ text, className = "" }) {
  return (
    <span
      className={`flex items-center justify-center max-h[27px] px-[18px] py-[4px] text-sm text-textprimary bg-[#383839] border border-[#545353] rounded-full text-center font-thin ${className} f`}
    >
      {text}
    </span>
  );
}

export default TechPill;
