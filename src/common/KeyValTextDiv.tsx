type keyValprops = {
  keyText?: string;
  valText?: string[];
  keyClassNm?: string;
  valClassNm?: string;
  wrpclasNm?: string;
};

const KeyValTextDiv = (props: keyValprops) => {
  const {
    keyText = "",
    valText = [],
    keyClassNm = "",
    valClassNm = "",
    wrpclasNm = "",
  } = props;
  return (
    <div className={wrpclasNm}>
      <div className={keyClassNm}>{keyText}</div>
      {valText.map((v, idx) => (
        <div className={valClassNm}>{valText[idx]}</div>
      ))}
    </div>
  );
};

export default KeyValTextDiv;
