import styled from 'styled-components';
import { theme } from '../../theme';

export default function Tab({ Icon, onClick, className, label }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon}</div>
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 43px;
  padding: 2 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  position: relative;

  top: 1px;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: ${theme.borderRadius.round};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }
`;
