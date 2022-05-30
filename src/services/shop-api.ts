import { AxiosError } from 'axios';
import { Product } from '../types/global-types';
import ApiService from './axios-api';

const getProducts = async (): Promise<Product[]> => {
  const { data } = await ApiService.get<Product[]>('/shopProducts');
  return data;
};

const getProductById = async (id: string): Promise<Product> => {
  try {
    const { data } = await ApiService.get<Product>(`/shopProducts/${id}`);
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const getProductsByIds = async (ids: string[]): Promise<Product[]> => Promise.all(ids.map(getProductById));

const ShopApi = {
  getProducts,
  getProductById,
  getProductsByIds,
};

export default ShopApi;
