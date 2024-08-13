import MainButton from "../components/style/ButtonStyle";

const Button = ({ children, secondary, onClick }) => {
  return (
    <MainButton secondary={secondary} onClick={onClick}>
      {children}
    </MainButton>
  );
};

export default Button;
