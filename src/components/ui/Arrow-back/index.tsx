import style from "./style.module.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "../../../../public/assets/icons/arrow-back.svg";
interface ArrowBackProps {
  pathTo: string;
}

export function ArrowBack({ pathTo }: ArrowBackProps) {
  return (
    <Link to={pathTo} className={style.button_back}>
      <img src={ArrowBackIcon} alt="вернуться назад" />
    </Link>
  );
}
