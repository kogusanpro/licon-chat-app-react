import { styled } from "styled-components";

import { BaseInput } from "./BaseInput";

export const PasswordInput = (props) => {
  const { placeholder = "", type } = props;
  return <SPasswordInput placeholder={placeholder} type={type} />;
};

const SPasswordInput = styled(BaseInput)``;
