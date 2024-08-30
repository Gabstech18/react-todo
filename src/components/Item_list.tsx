import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

interface ItemProps {
  content: string;
  category?: string;
}

//const Item_list = () => {
const Item_list = ({ content, category = "C" }: ItemProps) => {
  return (
    <div>
      <FontAwesomeIcon icon={faEllipsisVertical} />
      <p>{content}</p>
      <p className="hola">A</p>
      <input type="checkbox"></input>
      <FontAwesomeIcon icon={faPenToSquare} />
      <FontAwesomeIcon icon={faTrashCan} />
    </div>
  );
};

export default Item_list;
