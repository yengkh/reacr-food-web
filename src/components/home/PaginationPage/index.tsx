type Props = {
  theme: string;
};

export default function PaginationPage({ theme }: Props) {
  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : ""
      } pb-5 flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6`}
    >
      <div className="flex flex-1 justify-between">
        <a
          href="#"
          className={`${
            theme === "light"
              ? "bg-white  text-gray-700 hover:bg-gray-50"
              : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
          } relative inline-flex items-center rounded-md border   px-4 py-2 text-sm font-medium  border-gray-300`}
        >
          Previous
        </a>
        <a
          href="#"
          className={`${
            theme === "light"
              ? "bg-white hover:bg-gray-50"
              : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
          } relative ml-3 inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 `}
        >
          Next
        </a>
      </div>
    </div>
  );
}
