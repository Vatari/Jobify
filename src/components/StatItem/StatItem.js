import Wrapper from "./StatItemWrapper";

const StatItem = (props) => {
  return (
    <Wrapper color={props} bcg={props}>
      <header>
        <span className="count">{props.count}</span>
        <span className="icon">{props.icon}</span>
      </header>
      <h5 className="title">{props.title}</h5>
    </Wrapper>
  );
};

export default StatItem;
