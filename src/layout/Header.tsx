import { ReactNode } from "react";
import MenuButton from "../common/MenuButton";

const menuList = [
  { classNm: "menu1 text-white  text-xl", href: "", text: "About Me" },
  { classNm: "menu2 text-white  text-xl", href: "", text: "Skill" },
  {
    classNm: "menu3 text-white  text-xl",
    href: "",
    text: "Archiving",
  },
  { classNm: "menu4 text-white  text-xl", href: "", text: "Project" },
  { classNm: "menu5 text-white  text-xl", href: "", text: "Carrier" },
];
const Header = () => {
  return (
    <section className="flex justify-between bg-black py-5 px-7 border-b-2 border-b-gray-400">
      <div className="flex items-center justify-center">
        <MenuButton
          classNm="logo text-white font-bold text-3xl"
          href=""
          text="Park's Portfolio"
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        {menuList.map((v) => (
          <MenuButton {...v} />
        ))}
      </div>
    </section>
  );
};

export default Header;
