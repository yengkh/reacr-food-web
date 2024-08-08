type Props = {
  title: string;
  theme: string;
};

const TitleText = ({ title, theme }: Props) => {
  return (
    <p
      className={`${
        theme === "light" ? "" : "text-textColorForDarkMode"
      } font-bold text-lg md:text-2xl mx-2 uppercase`}
    >
      {title}
    </p>
  );
};

export default TitleText;
