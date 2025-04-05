import { IconType } from "react-icons";

interface ButtonAniProps {
  text?: string;
  icone?: IconType;
  clicked?: () => void 

}
const ButtonAni: React.FC<ButtonAniProps> = ({
  text,
  clicked,
  icone: Icon,
}) => {
  return (
    <button
      onClick={clicked}
      className=" overflow-hidden group flex flex-col font-Dana-medium   transition items-center justify-center  relative   py-2  px-6  border border-black rounded-[.5rem]"
    >
      <span className=" translate-y-0 group-hover:-translate-y-10 transition ">
        {text ? text : null}
        {Icon ? <Icon /> : null}
      </span>
      <span className="absolute translate-y-20 group-hover:translate-y-0  transition">
        {text ? text : null}
        {Icon ? <Icon /> : null}
      </span>
    </button>
  );
};
export default ButtonAni;
