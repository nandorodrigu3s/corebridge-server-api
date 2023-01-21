import { NFTData, NFTFullApiData } from '../../../system/models/nft-data.model';
import { NFTDTO } from '../datasource/http/dtos/nft-list-response.http.dto';
import { generateFakePrice } from '../../../system/utils/generate-fake-price.utils';
import { generateFakeCategory } from '../../../system/utils/generate-fake-category.util';

export class NFTDTOToModelMapper {
  mapOne(nftDTO: NFTDTO): NFTData | null {
    if (!nftDTO) {
      return null;
    }
    const nftData = {
      id: nftDTO.id,
      num_sales: nftDTO.num_sales,
      category: generateFakeCategory(),
      image_url: nftDTO.image_url,
      name: nftDTO.name,
      description: nftDTO.description,
      external_link: nftDTO.external_link,
      permalink: nftDTO.permalink,
      collection: {
        created_date: nftDTO?.collection?.created_date,
        name: nftDTO?.collection?.created_date,
      },
      token_id: nftDTO.token_id,
      price: generateFakePrice(nftDTO?.asset_contract?.created_date),
    };
    return nftData;
  }

  mapList(nftDTOList: NFTDTO[]): NFTData[] | [] {
    let nfts = nftDTOList.map((nftDTO) => this.mapOne(nftDTO));
    nfts = nfts.filter((nft) => Boolean(nft));
    return nfts;
  }
}

/**
 * Author: Fernando Rodrigues
 * Email: rfernandoti16@gmail.com
 *
 * In some cases we shall catch all data received from API
 * then we create an Object that accepts any current attributes
 * either future attributes aditions
 */
export class NFTFullDTOToModelMapper {
  mapOne(nftDTO: NFTDTO): NFTFullApiData | null {
    if (!nftDTO) {
      return null;
    }
    return {
      ...nftDTO,
    };
  }

  mapList(nftDTOList: NFTDTO[]): NFTFullApiData[] | [] {
    let nfts = nftDTOList.map((nftDTO) => this.mapOne(nftDTO));
    nfts = nfts.filter((nft) => Boolean(nft));
    return nfts;
  }
}
