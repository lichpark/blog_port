type squareProps = {
  imgpath?: string;
  smallRoundClass?: string;
  smallRoundImgClass?: string;
};

const SquareRoundButton = (props: squareProps) => {
  const { imgpath = "", smallRoundClass = "", smallRoundImgClass = "" } = props;
  return (
    <article className={smallRoundClass}>
      <img src={imgpath} className={smallRoundImgClass} />
    </article>
  );
};

export default SquareRoundButton;
