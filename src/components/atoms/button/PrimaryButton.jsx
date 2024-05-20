import { styled } from "styled-components";

import { BaseButton } from "./BaseButton";
export const PrimaryButton = (props) => {
  const { children } = props;
  return <SBUtton>{children}</SBUtton>;
};

const SBUtton = styled(BaseButton)`
  background-color: #017bfe;
  color: #ffffff;
  &:hover {
    // background-color: #ffffff;
    // color: #017bfe;
    cursor: pointer;
    opacity: 0.6;
  }
`;
