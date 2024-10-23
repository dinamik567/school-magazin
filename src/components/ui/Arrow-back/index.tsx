import style from "./style.module.css";
import ArrowBackIcon from "../../../assets/icons/arrow-back.svg";
import { Link } from "react-router-dom";

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
