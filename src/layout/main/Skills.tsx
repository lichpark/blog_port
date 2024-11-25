import Title from "../../common/Title";
import { IoIosLink } from "react-icons/io";
import { skillTitle } from "../../const/title";
import WhiteContainer from "../../common/WhiteContainer";

const Skills = () => {
  const containerArr = [
    {
      smalliconimg: [
        {
          imgpath: `${process.env.PUBLIC_URL}/Imgs/html5.398c8af9.png`,
          smallRoundClass:
            "w-28 p-2 rounded border border-zinc-200 my-3 flex items-center justify-center",
          link: "",
          smallRoundImgClass: "w-full rounded",
        },
        {
          imgpath: `${process.env.PUBLIC_URL}/Imgs/css.0dae54a3.png`,
          smallRoundClass:
            "w-28 p-2 rounded border border-zinc-200 my-3 flex items-center justify-center",
          link: "",
          smallRoundImgClass: "w-10/12 rounded max-h-24",
        },
        {
          imgpath: `${process.env.PUBLIC_URL}/Imgs/js.de8fcb5c.png`,
          smallRoundClass:
            "w-28 p-2 rounded border border-zinc-200 my-3 flex items-center justify-center",
          link: "",
          smallRoundImgClass: "w-10/12 rounded max-h-24",
        },
      ],
      longiconimg: [
        {
          imgpath: `${process.env.PUBLIC_URL}/Imgs/jquery.50ef9250.png`,
          smallRoundClass:
            "w-full p-2 rounded border border-zinc-200 my-3 flex items-center justify-center",
          link: "",
          smallRoundImgClass: "w-full rounded max-h-28",
        },
        {
          imgpath: `${process.env.PUBLIC_URL}/Imgs/react.af43ce2d.png`,
          smallRoundClass:
            "w-full p-2 rounded border border-zinc-200 my-3 flex items-center justify-center",
          link: "",
          smallRoundImgClass: "w-full rounded max-h-28",
        },
      ],
      containerClass:
        "bg-white p-6 rounded-2xl shadow-lg shadow-gray-400 mb-6 w-2/5",
      titleText: "FrontEnd",
      titleClassNm: "border-b-2 pb-3",
      titleSpanClassNm: "text-orange-500 font-bold text-2xl tracking-tighter",
      smallRoundWrpClass: "grid grid-cols-3 gap-5",
      longRoundWrpClass: "w-full",
    },
    {
      smalliconimg: [],
      longiconimg: [
        {
          imgpath: `${process.env.PUBLIC_URL}/Imgs/php.png`,
          smallRoundClass:
            "w-full p-2 rounded border border-zinc-200 my-3 flex items-center justify-center",
          link: "",
          smallRoundImgClass: "w-full rounded max-h-28",
        },
      ],
      containerClass:
        "bg-white p-6 rounded-2xl shadow-lg shadow-gray-400 mb-6 w-2/5",
      titleText: "Backend",
      titleClassNm: "border-b-2 pb-3",
      titleSpanClassNm: "text-orange-500 font-bold text-2xl tracking-tighter",
      smallRoundWrpClass: "grid grid-cols-3 gap-5",
      longRoundWrpClass: "w-full",
    },
    {
      smalliconimg: [],
      longiconimg: [
        {
          imgpath: `${process.env.PUBLIC_URL}/Imgs/centos.png`,
          smallRoundClass:
            "w-full p-2 rounded border border-zinc-200 my-3 flex items-center justify-center",
          link: "",
          smallRoundImgClass: "w-full rounded max-h-28",
        },
      ],
      containerClass:
        "bg-white p-6 rounded-2xl shadow-lg shadow-gray-400 mb-6 w-2/5",
      titleText: "Extra",
      titleClassNm: "border-b-2 pb-3",
      titleSpanClassNm: "text-orange-500 font-bold text-2xl tracking-tighter",
      smallRoundWrpClass: "grid grid-cols-3 gap-5",
      longRoundWrpClass: "w-full",
    },
  ];

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
      {containerArr.map((v) => {
        return <WhiteContainer {...v} />;
      })}
    </section>
  );
};

export default Skills;
