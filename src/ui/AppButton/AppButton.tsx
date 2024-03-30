import "./AppButton.scss";

interface IAppButton {
  type: "submit" | "reset" | "button" | undefined;
  buttonText: string;
}

export const AppButton = ({ type, buttonText }: IAppButton) => {
  return <button type={type}>{buttonText}</button>;
};
