import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./Item_list.css";

interface ItemProps {
  content: string;
  category?: string;
}

//const Item_list = () => {
const Item_list = ({ content, category = "C" }: ItemProps) => {
  return (
    <div className="card-item">
      <div className="card-item-content">
        <FontAwesomeIcon icon={faEllipsisVertical} />
        <p>{content}</p>
      </div>

      <div className="card-item-interactions">
        <p className="card-item-category">A</p>
        <input type="checkbox"></input>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export default Item_list;
