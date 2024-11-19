import RoundLongButton from "../../common/RoundLongButton";
import TextDiv from "../../common/TextDiv";

const IntroList = [
  {
    classNm: "introtext1 text-white font-bold text-8xl mb-3",
    text: "안녕하세요!",
  },
  {
    classNm: "introtext2 text-white font-bold text-xl mb-7",
    text: "박종률이라고 합니다.",
  },
  {
    classNm: "introtext2 text-white font-bold text-6xl mb-5",
    text: "저는 어떤 개발자 일까요",
  },
  {
    classNm: "introtext3 text-white font-bold text-xl mb-7",
    text: "균형있는 개발을 추구하는 개발자",
  },
  {
    classNm: "introtext4 text-white font-bold text-xl",
    text: "새로운 시도와 안정성의 균형을 추구하는 개발자입니다.",
  },
  {
    classNm: "introtext5 text-white font-bold text-xl mb-10",
    text: "신기술도 좋지만 기존기술에 대한 기본도 놓치지 않으로 합니다 .",
  },
];

const Intro = () => {
  return (
    <section className="flex flex-col items-center  justify-center bg-black py-10">
      <div className="my-10">
        <TextDiv
          classNm="introScrollText text-white text-base"
          text="↓ 스크롤하여 진행해주세요!"
        />
      </div>
      <div className="my-5 flex flex-col items-center justify-center">
        {IntroList.map((v) => (
          <TextDiv {...v} />
        ))}
      </div>
      <RoundLongButton children={"조금 더 살펴볼까요?"} />
    </section>
  );
};

export default Intro;
