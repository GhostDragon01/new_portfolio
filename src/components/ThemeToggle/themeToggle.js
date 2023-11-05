import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => (theme.mode === 'dark' ? 'white' : 'black')}; // Set the color based on the theme mode
`;

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {darkMode ? <FiSun /> : <FiMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;
