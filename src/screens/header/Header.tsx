import React, { PropsWithChildren, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';

export interface IHeaderProps {
}

/**
* Header Component Description
*/
export const Header = ({ children }: PropsWithChildren<IHeaderProps>): ReactElement => {
  return (
    <Box>
      {children}
    </Box>
  );
};
