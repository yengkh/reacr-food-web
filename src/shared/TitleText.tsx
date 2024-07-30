type Props = {
  title: string;
};

const TitleText = ({ title }: Props) => {
  return <p className="font-bold text-lg md:text-2xl">{title}</p>;
};

export default TitleText;
