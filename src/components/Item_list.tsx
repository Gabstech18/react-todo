interface ItemProps {
  content: string;
  category?: string;
}

//const Item_list = () => {
const Item_list = ({ content, category = 'C' }: ItemProps) => {
  return (
    <div>
      <span>&#x22EE;</span>
      <input type="checkbox"></input>
      <p>{content}</p>
      <p className="hola">A</p>
    </div>
  );
};

export default Item_list;
