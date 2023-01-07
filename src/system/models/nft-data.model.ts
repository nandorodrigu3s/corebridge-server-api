import { NFTCollection } from './nft-collection.model';
import { Price } from './price.model';

export interface NFTData {
  id: number;
  num_sales: number;
  category: string;
  image_url: string;
  name: string;
  description: string;
  external_link: string;
  permalink: string;
  collection: NFTCollection;
  token_id: string;
  price: Price;
}
