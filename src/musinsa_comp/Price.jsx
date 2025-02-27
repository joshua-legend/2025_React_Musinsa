const Price = (props) => {
  const { price } = props;
  return (
    <span
      style={{
        fontSize: "20px",
        fontWeight: "700",
        color: "#212b36",
      }}
    >
      {price}원
    </span>
  );
};

export default Price;
