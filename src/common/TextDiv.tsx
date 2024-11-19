type TextDivProp = {
  classNm?: string;
  text?: string;
};
const TextDiv = (props: TextDivProp) => {
  const { classNm = "", text = "" } = props;
  return <div className={classNm}>{text}</div>;
};

export default TextDiv;
