type Props = {
  title: string;
};

const TitleText = ({ title }: Props) => {
  return (
    <p className="font-bold text-lg md:text-2xl mx-2 uppercase">{title}</p>
  );
};

export default TitleText;
