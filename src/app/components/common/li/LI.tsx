interface LiProps {
  text: string;
  clicked?: () => void;
}
const Li:React.FC<LiProps> = ({text,clicked}) => {
  return <li onClick={clicked}>
    <span>

    {text}
    </span>
    
    </li>;
};
export default Li;
