const Box = (props) => {
  const { paraText, boxContainer } = props;
  return (
    <div className={`box ${boxContainer}`}>
      <p>{paraText}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading-ele">Boxes</h1>
    <div className="boxes-container">
      <Box paraText="Small" boxContainer="small-box-card" />
      <Box paraText="Medium" boxContainer="medium-box-card" />
      <Box paraText="Large" boxContainer="large-box-card" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
