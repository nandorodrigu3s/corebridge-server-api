export interface NFTDTO {
  [key: string]: any;
}

export interface AssetsDTO {
  assets: NFTDTO[];
}

export interface NFTListResponseDTO {
  data: AssetsDTO;
  [key: string]: any;
}
