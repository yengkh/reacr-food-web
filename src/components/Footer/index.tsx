import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section className="pb-16 pt-5 mt-5 md:pb-5 lg:pb-5 xl:pb-5 bg-appBarBackgroundColor w-full">
      <div className="w-5/6 text-sm mx-auto flex flex-col justify-around gap-2 items-start md:flex-row">
        <div className="basis-[30%]">
          <p className="text-white font-bold">Logo</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            dignissimos quidem omnis autem nam laboriosam.
          </p>
        </div>
        <div className="w-[30%]">
          <p className="text-white font-bold">Links</p>
          <div>
            <p className="hover:underline hover:cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="mb-2">
          <p className=" font-bold text-white">Contact Us</p>
          <div className="flex gap-2 my-2 flex-col items-start">
            <div className="flex justify-center items-center gap-3 cursor-pointer">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: "30px", color: "white" }}
              />
              <p className="hover:underline">Facebook</p>
            </div>
            <div className="flex justify-center items-center gap-3 cursor-pointer">
              <FontAwesomeIcon
                icon={faTelegram}
                style={{ fontSize: "30px", color: "white" }}
                className="cursor-pointer"
              />
              <p className="hover:underline">Telegram</p>
            </div>
          </div>
          <p>(+855) 123456789</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
