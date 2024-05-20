import { styled } from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { MailAddressInput } from "../atoms/input/MailAddressInput";
import { PasswordInput } from "../atoms/input/PasswordInput";
import { BackGroundImage } from "../images/licon-images.png";

export const SignUp = () => {
  return (
    <SSignupContent>
      <SSignupLeftContent className="signup-left-content">
        <SSignupText className="signup-text">SignUp</SSignupText>
      </SSignupLeftContent>
      <SSignupRightContent className="signup-right-content">
        <SSignupRightContentDiv className="signup-input-form">
          <h3>新規登録ページ</h3>
          <MailAddressInput placeholder="メールアドレスを入力" type="email" />
          <br />
          <PasswordInput placeholder="パスワードを入力" type="password" />
          <br />
          <PrimaryButton>新規登録</PrimaryButton>
          <br />
          <SecondaryButton>ログインはこちら</SecondaryButton>
        </SSignupRightContentDiv>
      </SSignupRightContent>
    </SSignupContent>
  );
};

const SSignupContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const SSignupLeftContent = styled.div`
  &.signup-left-content {
    flex: 1;
    // background-image: url(https://source.unsplash.com/person-using-laptop-computer-Hcfwew744z4);
    // background-size: cover;
    // background-color: rgba(255, 255, 255, 0.2);
    background-color: orange;
    background-blend-mode: lighten;
    position: relative;
  }
`;

const SSignupRightContent = styled.div`
  &.signup-right-content {
    flex: 1;
    position: relative;
  }
`;

const SSignupRightContentDiv = styled(SSignupRightContent)`
  &.signup-input-form {
    flex: 1;
    position: absolute;
    top: 35%;
    left: 40%;
    margin: -25px 0 0 -25px;
  }
`;

const SSignupText = styled.h1`
  &.signup-text {
    font-size: 50px;
    color: white;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    margin: -25px 0 0 -25px;
  }
`;
