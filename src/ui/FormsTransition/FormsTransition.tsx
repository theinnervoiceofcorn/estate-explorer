import { Link } from "react-router-dom";
import "./FormsTransition.scss"

interface IFormsTransition {
  spanText: string;
  linkText: string;
  userIsRegistered: boolean;
}

export const FormsTransition = ({
  spanText,
  linkText,
  userIsRegistered,
}: IFormsTransition) => {
  return (
    <div className="forms-transitions-wrapper">
      <span>{spanText}</span>
      {userIsRegistered ? (
        <Link to="/">{linkText}</Link>
      ) : (
        <Link to="/sign-up">{linkText}</Link>
      )}
    </div>
  );
};
