import { SelectedPage } from "@/shared/types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  iconData: IconProp;
  title: string;
  page?: string;
  selectedPage: SelectedPage;
  setSelectedPage: (values: SelectedPage) => void;
};

const Link = ({
  iconData,
  page,
  title,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const pageLowerCase = title.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === pageLowerCase ? "text-appBarIconColor" : "text-white"
      } transition duration-500 flex gap-2`}
      onClick={() => setSelectedPage(pageLowerCase)}
      href="#"
    >
      <span>
        <FontAwesomeIcon
          icon={iconData}
          style={{
            fontSize: "16px",
            color: `${
              selectedPage === pageLowerCase
                ? "text-appBarIconColor"
                : "text-white"
            } transition duration-500`,
            cursor: "pointer",
          }}
        />
      </span>
      <span>{page}</span>
    </AnchorLink>
  );
};

export default Link;
