import styled, { css } from "styled-components";

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.functional.error};
`;

interface IStyledInputProps {
  $isError: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.$isError &&
    css`
      border-color: ${props.theme.colors.functional.red};
    `}
  transition: 200ms;
  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
