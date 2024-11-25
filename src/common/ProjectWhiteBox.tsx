import ImgSlide from "./ImgSlide";
import KeyValTextDiv from "./KeyValTextDiv";
import LongParagraph from "./LongParagraph";
import TextDiv from "./TextDiv";
import Title from "./Title";

type ProjectWhiteBoxType = {
  title?: {
    smallTitleClassNm?: string;
    smallTitleSpanClassNm?: string;
    smallTitleText?: string;
  };
  subTitle?: {
    subClassNm?: string;
    subText?: string;
  };
};

const ProjectWhiteBox = (props: ProjectWhiteBoxType) => {
  const {
    title = {
      smallTitleClassNm: "",
      smallTitleSpanClassNm: "",
      smallTitleText: "",
    },
    subTitle = {
      subClassNm: "",
      subText: "",
    },
  } = props;

  return (
    <div className="bg-white p-8">
      <div className="flex flex-col center">
        <Title
          classNm={title.smallTitleClassNm}
          text={title.smallTitleText}
          spanClassNm={title.smallTitleSpanClassNm}
        />
        <TextDiv classNm={subTitle.subClassNm} text={subTitle.subText} />
      </div>
      <div>
        <article>
          <ImgSlide />
        </article>
        <div>
          <LongParagraph />
          <KeyValTextDiv />
        </div>
      </div>
    </div>
  );
};

export default ProjectWhiteBox;
