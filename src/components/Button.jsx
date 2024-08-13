import MainButton from "../components/style/ButtonStyle";

const Button = ({ children, secondary }) => {
  return <MainButton secondary={secondary}>{children}</MainButton>;
};

export default Button;
