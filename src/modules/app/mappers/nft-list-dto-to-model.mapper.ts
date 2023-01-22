/* eslint-disable @typescript-eslint/no-unused-vars */
import { NFTData, NFTFullApiData } from '../../../system/models/nft-data.model';
import { NFTDTO } from '../datasource/http/dtos/nft-list-response.http.dto';
import { generateFakePrice } from '../../../system/utils/generate-fake-price.utils';
import { generateFakeCategory } from '../../../system/utils/generate-fake-category.util';

export class NFTDTOToModelMapper {
  mapOne(nftDTO: NFTDTO): NFTData | null {
    try {
      const nftData = {
        id: nftDTO.id,
        num_sales: nftDTO.num_sales,
        category: generateFakeCategory(),
        image_url: nftDTO.image_url,
        name: nftDTO.name,
        description: nftDTO.description,
        external_link: nftDTO.external_link || nftDTO.permalink,
        permalink: nftDTO.permalink,
        collection: {
          created_date: nftDTO.collection.created_date,
          name: nftDTO.collection.name,
        },
        token_id: nftDTO.token_id,
        price: generateFakePrice(nftDTO.asset_contract.created_date),
      };
      /**
       * START
       * Verify if all fields has data
       */
      Object.values(nftData).forEach((attr) => {
        if (typeof attr === 'object') {
          Object.values(nftData).forEach((attrChildren) => {
            const isEmpty = !!attrChildren.length;
          });
        } else {
          const isAttrEmpty = !!attr.length;
        }
      });
      /**
       * END
       * Verify if all fields has data
       */
      return nftData;
    } catch (error) {
      return null;
    }
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
 * In some cases we shall to catch all data received from API
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
