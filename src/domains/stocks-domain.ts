export interface IStockItem {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
}

export interface IStockSearchResult {
  bestMatches: IStockItem[];
}
