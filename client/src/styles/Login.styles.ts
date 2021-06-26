import styled from "@emotion/styled";
import { Button as AntButton, ButtonProps, FormProps, InputProps } from "antd";
import { Card } from "antd";
import { Typography } from "antd";
import { Form, Input } from "antd";
import { TypographyProps } from "antd/lib/typography/Typography";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Paper = styled(Card)`
  padding: 30px 20px;
  height: 340px;
  width: 350px;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
    0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
`;

export const LoginButton: React.FunctionComponent<ButtonProps> = styled(AntButton)`
  margin-top: 24px;
  color: green;
  background-color: "#edede9";
`;

export const LoginHeader: React.FunctionComponent<TypographyProps> = styled(Typography)`
  margin: 0;
  font-family: IBM Plex Mono, monospace;
  font-size: 24px;
  color: black;
`;

export const LoginSubtitle = styled(Typography)`
  margin: 0;
  font-family: IBM Plex Mono, monospace;
  font-size: 12px;
  color: black;
`;

export const ErrorSubtitle = styled(Typography)`
  color: red;
  margin: 0;
  font-family: IBM Plex Mono, monospace;
  font-size: 12px;
`;

export const LoginForm: React.FunctionComponent<FormProps> = styled(Form)`
  height: 220;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

export const Field = styled(Form.Item)`

`

export const PasswordField = styled(Input.Password)`

`
