import * as Styled from './style';

const Input = ({ placeholder, value, onChange, type, name }) => {
  return (
      <Styled.Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
  );
};

export default Input;
