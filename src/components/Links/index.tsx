import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {
  changePage: () => void;
  linkTitle: string;
  linkName: string;
  linkIcon: IconProp;
  checkActiveLink: boolean;
};

const LinkNavigation = ({
  checkActiveLink,
  changePage,
  linkTitle,
  linkName,
  linkIcon,
}: Props) => {
  return (
    <Link
      to={linkTitle}
      className={`${checkActiveLink ? "text-white" : ""}`}
      onClick={changePage}
    >
      <span>
        <FontAwesomeIcon icon={linkIcon} style={{ fontSize: "18px" }} />{" "}
        <span className="font-bold">{linkName}</span>
      </span>
    </Link>
  );
};

export default LinkNavigation;
