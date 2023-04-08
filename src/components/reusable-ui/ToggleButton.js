import styled from 'styled-components';
import { theme } from '../../theme';

export default function ToggleButton({ label, onClick, className }) {
  return (
    <ToggleButtonStyled className={className} onClick={onClick}>
      {label}
    </ToggleButtonStyled>
  );
}

const ToggleButtonStyled = styled.button`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.dark};
  border-radius: ${theme.borderRadius.round};
  padding: 10px 20px;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.dark};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
