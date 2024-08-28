interface ItemProps {
  children: string;
}

//const Item_list = () => {
const Item_list = ({ children }: ItemProps) => {
  return (
    <div>
      <span>&#x22EE;</span>
      <input type="checkbox"></input>
      <p>{children}</p>
      <p className="hola">A</p>
    </div>
  );
};

export default Item_list;
