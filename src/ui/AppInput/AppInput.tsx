import { ErrorMessage, StyledInput } from "./AppInput.styled";

interface IAppInput {
  inputType: string;
  inputPlaceholder: string;
  errorMessage?: string;
  isError?: boolean;
}

export const AppInput = ({
  inputType,
  inputPlaceholder,
  errorMessage,
  isError,
  ...props
}: IAppInput) => {
  return (
    <>
      <StyledInput
        type={inputType}
        placeholder={inputPlaceholder}
        $isError={isError || false}
        {...props}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};
