import { styled } from "styled-components";

import { BaseInput } from "./BaseInput";

export const MailAddressInput = (props) => {
  const { placeholder = "", type } = props;
  return <SMailAddressInput placeholder={placeholder} type={type} />;
};

const SMailAddressInput = styled(BaseInput)``;
