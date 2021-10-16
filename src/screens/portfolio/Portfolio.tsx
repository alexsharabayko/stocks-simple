import React, { ReactElement } from 'react';

export interface IPortfolioProps {
  title?: string;
}

/**
* Portfolio Component Description
*/
export const Portfolio = ({ title }: IPortfolioProps): ReactElement => {
  return (
    <div>
      {title}
    </div>
  );
};
