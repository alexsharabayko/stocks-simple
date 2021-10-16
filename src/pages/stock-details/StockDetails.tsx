import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { apiFetchStockDetails } from '../../apis/portfolio-stocks-api';
import { IStock } from '../../domains/stocks-domain';
import { Box, Heading, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { formatNumber } from '../../utils/number/number-util';

export interface IStockDetailsProps {
}

/**
* Stock Details Component Description
*/
export const StockDetails = ({}: IStockDetailsProps): ReactElement => {
  const history = useHistory();
  const [stock, setStock] = useState<IStock>();
  const { symbol } = useParams<{ symbol: string }>();

  useEffect(() => {
    apiFetchStockDetails(symbol).then(fetchedStock => {
      setStock(fetchedStock);
    });
  }, []);

  if (!stock) {
    return null;
  }

  return (
    <Box p={5}>
      <Box mb={5}>
        <Button leftIcon={<ArrowBackIcon />} colorScheme="teal" variant="outline" onClick={() => history.push('/')}>
          Go back
        </Button>
      </Box>

      <Heading mb={5} as="h2" size="lg">{stock.name}</Heading>

      <Box mb={5}>
        <strong>Address: </strong>
        <span>{stock.address}</span>
      </Box>

      <Box mb={5}>
        <strong>Market Capitalization: </strong>
        <span>{formatNumber(stock.marketCapitalization)}</span>
      </Box>

      <Box>{stock.description}</Box>
    </Box>
  );
};
