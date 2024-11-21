import SquareRoundButton from "./SquareRoundButton";
import Title from "./Title";

type WhiteContainerProp = {
  containerClass?: string;
  titleClassNm?: string;
  titleText?: string;
  titleSpanClassNm?: string;
  smallRoundWrpClass?: string;
  longRoundWrpClass?: string;
  smalliconimg?: object[];
  longiconimg?: object[];
};

const WhiteContainer = (props: WhiteContainerProp) => {
  const {
    containerClass = "",
    titleClassNm = "",
    titleText = "",
    titleSpanClassNm = "",
    smallRoundWrpClass = "",
    longRoundWrpClass = "",
    smalliconimg = [],
    longiconimg = [],
  } = props;
  return (
    <div className={containerClass}>
      <Title
        text={titleText}
        classNm={titleClassNm}
        spanClassNm={titleSpanClassNm}
      />
      <div className={smallRoundWrpClass}>
        {smalliconimg.map((v) => {
          return <SquareRoundButton {...v} />;
        })}
      </div>
      <div className={longRoundWrpClass}>
        {longiconimg.map((v) => {
          return <SquareRoundButton {...v} />;
        })}
      </div>
    </div>
  );
};

export default WhiteContainer;
