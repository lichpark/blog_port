import { ReactNode } from "react";

type RoundLongProp = {
  children: ReactNode;
};

const RoundLongButton = ({ children }: RoundLongProp) => {
  return (
    <div className="py-4 px-8 font-bold text-white  text-xl border-2  border-white rounded-full">
      {children}
    </div>
  );
};

export default RoundLongButton;
