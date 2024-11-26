import ProjectWhiteBox from "../../common/ProjectWhiteBox";
import Title from "../../common/Title";
import { ProjectTitle } from "../../const/title";
import { IoIosLink } from "react-icons/io";

const Project = () => {
  const ProjectWhiteBoxArr = [
    {
      title: {
        smallTitleClassNm: "font-bold ",
        smallTitleSpanClassNm: "text-2xl",
        smallTitleText: "포트폴리오 사이트",
      },
      subTitle: {
        subClassNm: "text-sm text-zinc-300 text-center",
        subText: "2022.11 - 2022.11 (1人)",
      },
      slideImg: [
        `${process.env.PUBLIC_URL}/Imgs/slideImg/slide1_1.png`,
        `${process.env.PUBLIC_URL}/Imgs/slideImg/slide1_1.png`,
        `${process.env.PUBLIC_URL}/Imgs/slideImg/slide1_1.png`,
      ],
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center py-24 px-12 bg-blue-600">
      <Title
        Icon={IoIosLink}
        classNm={ProjectTitle.classNm}
        aClassNm={ProjectTitle.aClassNm}
        text={ProjectTitle.text}
        link={ProjectTitle.link}
        spanClassNm={ProjectTitle.spanClassNm}
      />
      {ProjectWhiteBoxArr.map((v) => (
        <ProjectWhiteBox {...v} />
      ))}
    </section>
  );
};

export default Project;
