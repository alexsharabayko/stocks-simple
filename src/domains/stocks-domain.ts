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

export interface IStock {
  symbol: string;
  name: string;
  assetType: string;
  description: string;
  cIK: string;
  exchange: string;
  currency: string;
  country: string;
  sector: string;
  industry: string;
  address: string;
  fiscalYearEnd: string;
  latestQuarter: string;
  marketCapitalization: string;
  eBITDA: string;
  pERatio: string;
  pEGRatio: string;
  bookValue: string;
  dividendPerShare: string;
  dividendYield: string;
  ePS: string;
  revenuePerShareTTM: string;
  profitMargin: string;
  operatingMarginTTM: string;
  returnOnAssetsTTM: string;
  returnOnEquityTTM: string;
  revenueTTM: string;
  grossProfitTTM: string;
  dilutedEPSTTM: string;
  quarterlyEarningsGrowthYOY: string;
  quarterlyRevenueGrowthYOY: string;
  analystTargetPrice: string;
  trailingPE: string;
  forwardPE: string;
  priceToSalesRatioTTM: string;
  priceToBookRatio: string;
  eVToRevenue: string;
  eVToEBITDA: string;
  beta: string;
  "52WeekHigh": string;
  "52WeekLow": string;
  "50DayMovingAverage": string;
  "200DayMovingAverage": string;
  sharesOutstanding: string;
  sharesFloat: string;
  sharesShort: string;
  sharesShortPriorMonth: string;
  shortRatio: string;
  shortPercentOutstanding: string;
  shortPercentFloat: string;
  percentInsiders: string;
  percentInstitutions: string;
  forwardAnnualDividendRate: string;
  forwardAnnualDividendYield: string;
  payoutRatio: string;
  dividendDate: string;
  exDividendDate: string;
  lastSplitFactor: string;
  lastSplitDate: string;
}

export interface IStockSearchResult {
  bestMatches: IStockItem[];
}
