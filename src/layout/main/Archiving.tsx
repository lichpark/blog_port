import ArchivingBox from "../../common/ArchivingBox";
import Title from "../../common/Title";
import { ArchivingTitle } from "../../const/title";

const Archiving = () => {
  const ArchivingBoxArr = [
    {
      titleImg: `${process.env.PUBLIC_URL}/Imgs/github.1134aa7d.png`,
      linkUrl: "https://github.com/lichpark",
      linkText: "https://github.com/lichpark",
      descTitle: "Github 저장소",
      desc: [
        "과거 프로젝트, 프로그램, 앱의 소스 코드",
        "프론트엔드 수업을 들으면서 작업및 정리한 사항들",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-24 px-12 bg-black">
      <Title
        classNm={ArchivingTitle.classNm}
        aClassNm={ArchivingTitle.aClassNm}
        text={ArchivingTitle.text}
        link={ArchivingTitle.link}
        spanClassNm={ArchivingTitle.spanClassNm}
      />
      {ArchivingBoxArr.map((v) => (
        <ArchivingBox />
      ))}
    </section>
  );
};

export default Archiving;
