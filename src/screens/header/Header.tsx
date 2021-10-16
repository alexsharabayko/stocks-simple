import React, { PropsWithChildren, ReactElement } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export interface IHeaderProps {
}

/**
* Header Component Description
*/
export const Header = ({ children }: PropsWithChildren<IHeaderProps>): ReactElement => {
  return (
    <Flex align="center" h="100%" px={5} backgroundColor="gray.100">
      <Heading>{children}</Heading>
    </Flex>
  );
};
