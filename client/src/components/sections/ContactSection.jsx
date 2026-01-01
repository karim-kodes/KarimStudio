import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../forms/ContactForm";
function ContactSection() {
  return (
    <div
      className="flex gap-[50px] items-center justify-center pb-[150px] flex-wrap "
      id="start-project"
    >
      <div className="flex flex-col w-[370px] md:w-[390px] h-fit md:h-[725px] gap-[30px] p-[20px] bg-[#1c1d1f] border border-[#323232] rounded-lg">
        <h3 className="text-[28px] text-[#fcfcfc] text-left font-semibold ">
          Let’s build something exceptional
        </h3>
        <p className="text-base text-gray-500 tracking-wide text-left max-w-[100%]">
          Fast responses. Transparent Pricing. Results that conver
        </p>
        <div className="flex flex-col gap-[18px] justify-center ">
          <div className="flex gap-[10px] max-h-[44px] items-center w-[100%]">
            <span className="flex items-center justify-center rounded-lg h-[44px] w-[44px] bg-[linear-gradient(180deg,#026DFC_43%,#14366B_100%)] text-white shadow-lg shadow-sky-600/20">
              <Mail size={24} />
            </span>
            <div className="flex flex-col gap-[3px]">
              <h5 className="text-base font-semibold text-[#fcfcfc] tracking-wide">
                Email
              </h5>
              <p className="text-sm tracking-wide text-gray-500">
                officialabdikarim@gamil.com
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] max-h-[44px] items-center w-[100%]">
            <span className="flex items-center justify-center rounded-lg h-[44px] w-[44px] bg-[linear-gradient(180deg,#026DFC_43%,#14366B_100%)] text-white shadow-lg shadow-sky-600/20">
              <Phone size={24} />
            </span>
            <div className="flex flex-col gap-[3px]">
              <h5 className="text-base font-semibold text-[#fcfcfc] tracking-wide">
                Phone
              </h5>
              <p className="text-sm tracking-wide text-gray-500">
                +254 707 831 257
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] max-h-[44px] items-center w-[100%]">
            <span className="flex items-center justify-center rounded-lg h-[44px] w-[44px] bg-[linear-gradient(180deg,#026DFC_43%,#14366B_100%)] text-white shadow-lg shadow-sky-600/20">
              <MapPin size={24} />
            </span>
            <div className="flex flex-col gap-[3px]">
              <h5 className="text-base font-semibold text-[#fcfcfc] tracking-wide">
                Location
              </h5>
              <p className="text-sm tracking-wide text-gray-500">
                Nairobi, KENYA
              </p>
            </div>
          </div>
        </div>
        <button className="flex h-[36px] items-center gap-[5px] justify-center bg-[linear-gradient(180deg,#026DFC_43%,#14366B_100%)] text-white shadow-lg shadow-sky-600/20 border border-[#026DFC] rounded-md">
          <FaWhatsapp size={24} />
          WhatsApp Fast
        </button>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactSection;
