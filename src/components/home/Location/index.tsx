import TitleText from "@/shared/TitleText";

const Location = () => {
  return (
    <div className="pb-10">
      <TitleText title="FIND OUR LOCATION BELOW" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.16276883447!2d104.7253721257701!3d11.579654011430938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1722862752938!5m2!1sen!2skh"
        height="600"
        width={"100%"}
        loading="lazy"
        className="my-3"
      />
    </div>
  );
};

export default Location;
