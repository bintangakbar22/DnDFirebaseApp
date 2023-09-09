export interface Price {
  id: string;
  points: number;
  productId: string;
}

export interface Product {
  id: string;
  name: string;
  typeId: string;
}

export interface Transaction {
  id: string;
  productId: string;
  total: number;
  userId: string;
}

export interface Type {
  id: string;
  name: string;
  color: string;
}

export interface User {
  age: number;
  id: string;
  name: string;
}

export interface ICollectionData {
  Prices: Price[];
  Product: Product[];
  Transactions: Transaction[];
  Types: Type[];
  Users: User[];
}
