import { IStockItem, IStockSearchResult } from '../domains/stocks-domain';
import { stocksApi } from '../utils/api-util';

export const searchStocks = (criteria: string): Promise<IStockItem[]> => {
  return stocksApi.get<IStockSearchResult>('SYMBOL_SEARCH', { params: { keywords: criteria } })
    .then(r => r.data.bestMatches);
};
