import { ReactNode } from "react";
import Title from "../../common/Title";
import { IoIosLink } from "react-icons/io";
import KeyValTextDiv from "../../common/KeyValTextDiv";
import { aboutTitle } from "../../const/title";

const KeyValTextList = [
  {
    keyText: "이름",
    valText: ["박종률"],
    keyClassNm:
      "text-3xl font-bold pb-4 border-b-2 flex items-center justify-center w-fit ",
    valClassNm: "text-2xl flex items-center justify-center pt-7 pb-10 w-fit",
    wrpclasNm: "flex flex-col items-center justify-center ",
  },
  {
    keyText: "생년월일",
    valText: ["1985.02.07"],
    keyClassNm:
      "text-3xl font-bold pb-4 border-b-2 flex items-center justify-center w-fit",
    valClassNm: "text-2xl flex items-center justify-center pt-7 pb-10 w-fit",
    wrpclasNm: "flex flex-col items-center justify-center ",
  },
  {
    keyText: "연락처",
    valText: ["010-3136-2085", "lichpark0@hanmail.net"],
    keyClassNm:
      "text-3xl font-bold pb-4 border-b-2 flex items-center justify-center w-fit",
    valClassNm: "text-2xl flex items-center justify-center pt-5 w-fit",
    wrpclasNm: "flex flex-col items-center justify-center ",
  },
];

// type Aboutprops = {
//   Icon?: IconType;
//   text?: string;
//   classNm?: string;
//   link?: string;
//   aClassNm?: string;
//   spanClassNm?: string;
//   keyText?:string;
//   valText?:string[];
//   keyClassNm?:string;
//   valClassNm?:string;
// };
const About = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-12">
      <Title
        Icon={IoIosLink}
        classNm={aboutTitle.classNm}
        aClassNm={aboutTitle.aClassNm}
        text={aboutTitle.text}
        link={aboutTitle.link}
        spanClassNm={aboutTitle.spanClassNm}
      />
      <div className="grid grid-cols-3 gap-x-40">
        {KeyValTextList.map((v) => (
          <KeyValTextDiv {...v} />
        ))}
      </div>
    </section>
  );
};

export default About;
