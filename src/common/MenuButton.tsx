type MenuButtonProp = {
  href?: string;
  classNm?: string;
  text?: string;
};

const MenuButton = (props: MenuButtonProp) => {
  const { href = "", classNm = "", text = "" } = props;
  return <span className={`${classNm}`}>{text}</span>;
};

export default MenuButton;
