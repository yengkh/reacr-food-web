import ErrorPage from "@/assets/error-images/404@2x.6f0e20ab.png";

const MenuErrorPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        <img src={ErrorPage} alt="Error" className="mx-auto" />
        <p className="text-xl mt-4">Sorry, page not found</p>
      </div>
    </div>
  );
};

export default MenuErrorPage;
