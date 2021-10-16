import { IStock, IStockItem } from '../domains/stocks-domain';
import { stocksApi } from '../utils/api/api-util';

const STORAGE_KEY = 'portfolio-stocks';

const getStorageItems = (): IStockItem[] => {
  const storageData = window.localStorage.getItem(STORAGE_KEY);
  return storageData ? JSON.parse(storageData) : [];
};

export const apiFetchPortfolioStocks = (): Promise<IStockItem[]> => {
  return new Promise<IStockItem[]>((resolve) => {
    setTimeout(() => {
      return resolve(getStorageItems());
    }, 500);
  });
};

export const apiAddPortfolioStock = (item: IStockItem): Promise<IStockItem> => {
  return new Promise<IStockItem>((resolve) => {
    setTimeout(() => {
      const newItems = getStorageItems().concat([item]);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));

      return resolve({ ...item });
    }, 500);
  });
};

export const apiRemovePortfolioStock = (symbol: string): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      const newItems = getStorageItems().filter(item => item.symbol !== symbol);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));

      return resolve();
    }, 500);
  });
};

export const apiFetchStockDetails = (symbol: string): Promise<IStock> => {
  return stocksApi.get<IStock>('OVERVIEW', { params: { symbol } }).then(r => r.data);
};
