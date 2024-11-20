import Title from "../../common/Title";
import { IoIosLink } from "react-icons/io";
import { skillTitle } from "../../const/title";

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-12 bg-yellow-400">
      <Title
        Icon={IoIosLink}
        classNm={skillTitle.classNm}
        aClassNm={skillTitle.aClassNm}
        text={skillTitle.text}
        link={skillTitle.link}
        spanClassNm={skillTitle.spanClassNm}
      />
    </section>
  );
};

export default Skills;
