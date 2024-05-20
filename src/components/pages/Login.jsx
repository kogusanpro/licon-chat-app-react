import { styled } from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { MailAddressInput } from "../atoms/input/MailAddressInput";
import { PasswordInput } from "../atoms/input/PasswordInput";
import { BackGroundImage } from "../images/licon-images.png";

export const Login = () => {
  return (
    <SLoginContent>
      <SLoginLeftContent className="login-left-content">
        <SLoginText className="login-text">Login</SLoginText>
      </SLoginLeftContent>
      <SLoginRightContent className="login-right-content">
        <SLoginRightContentDiv className="login-input-form">
          <h3>ログインページ</h3>
          <MailAddressInput placeholder="メールアドレスを入力" type="email" />
          <br />
          <PasswordInput placeholder="パスワードを入力" type="password" />
          <br />
          <PrimaryButton>ログイン</PrimaryButton>
          <br />
          <SecondaryButton>新規登録はこちら</SecondaryButton>
        </SLoginRightContentDiv>
      </SLoginRightContent>
    </SLoginContent>
  );
};

const SLoginContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const SLoginLeftContent = styled.div`
  &.login-left-content {
    flex: 1;
    // background-image: url(https://source.unsplash.com/person-using-laptop-computer-Hcfwew744z4);
    // background-size: cover;
    // background-color: rgba(255, 255, 255, 0.2);
    background-color: orange;
    background-blend-mode: lighten;
    position: relative;
  }
`;

const SLoginRightContent = styled.div`
  &.login-right-content {
    flex: 1;
    position: relative;
  }
`;

const SLoginRightContentDiv = styled(SLoginRightContent)`
  &.login-input-form {
    flex: 1;
    position: absolute;
    top: 35%;
    left: 40%;
    margin: -25px 0 0 -25px;
  }
`;

const SLoginText = styled.h1`
  &.login-text {
    font-size: 50px;
    color: white;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    margin: -25px 0 0 -25px;
  }
`;
