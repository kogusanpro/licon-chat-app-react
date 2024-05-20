import { styled } from "styled-components";

import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SBUtton>{children}</SBUtton>;
};

const SBUtton = styled(BaseButton)`
  background-color: #fff;
  color: #017bfe;
  &:hover {
    background-color: #017bfe;
    color: #fff;
  }
`;
