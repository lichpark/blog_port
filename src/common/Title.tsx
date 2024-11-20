import { ReactNode } from "react";
import { IconType } from "react-icons";

type Titleprop = {
  text?: string;
  classNm?: string;
  aClassNm?: string;
  Icon?: IconType;
  link?: string;
  spanClassNm?: string;
};
const Title = (props: Titleprop) => {
  const {
    classNm = "",
    text = "",
    Icon,
    link = "",
    aClassNm = "",
    spanClassNm = "",
  } = props;
  return (
    <div className={classNm}>
      <a href={link} className={aClassNm}>
        {Icon && <Icon />}
      </a>
      <span className={spanClassNm}>{text}</span>
    </div>
  );
};

export default Title;
<></>;
