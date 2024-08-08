import TitleText from "@/shared/TitleText";
import PromotionPageItem from "./PromotionPageItem";
type Props = {
  theme: string;
};

const PromotionPage = ({ theme }: Props) => {
  return (
    <div className="mt-10">
      <TitleText title="Specail day for you" theme={theme} />
      <PromotionPageItem theme={theme} />
    </div>
  );
};

export default PromotionPage;
