// @ts-nocheck

import React from 'react';
import { IconButton, IconButtonProps, useColorMode, Icon } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';
import styled from '@emotion/styled';

import transientOptions from '../../utils/general';

type ThemeToggleButtonProps = Omit<IconButtonProps, 'aria-label'> & {
  $colorMode?: string;
};

const iconSize = 20;
const RoundButton = styled(IconButton, transientOptions)<{
  $colorMode?: string;
}>`
  box-shadow: 0 0 100px 20px
    ${({ $colorMode }) => ($colorMode === 'light' ? 'black' : 'white')};
  & svg {
    width: ${iconSize}px;
    height: ${iconSize}px;
  }
`;

function ThemeToggleButton(props: ThemeToggleButtonProps): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <RoundButton
      $colorMode={colorMode}
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />}
      aria-label={`Activate ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      isRound
      {...props}
    />
  );
}

export default ThemeToggleButton;
