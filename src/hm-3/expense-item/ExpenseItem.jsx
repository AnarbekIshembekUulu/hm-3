import "./expneseItem.css";

const ExpenseItem = (props) => {
  console.log(props.date);
  return (
    <div className="expeneseItemList">
      {/* <div className="inputValue"> */}
      <div className="dateAndTitle">
        <div>
          {/* <p className="date">{props.date.getMonth().toString}</p> */}
          {/* <p className="date">{props.date.toString()}</p> */}
          <p className="date">{props.date.toString()}</p>
        </div>
        <p className="title">{props.title}</p>
      </div>
      <div className="priceSom">
        <p className="price">{`${props.price} (сом)`}</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ExpenseItem;
