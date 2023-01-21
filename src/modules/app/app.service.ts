import { Injectable } from '@nestjs/common';
import { NFTData } from 'src/system/models/nft-data.model';
import { AppXRequestHttp } from './datasource/http/app-x-request.http';
import { NFTListResponseDTO } from './datasource/http/dtos/nft-list-response.http.dto';
import { NFTDTOToModelMapper } from './mappers/nft-list-dto-to-model.mapper';

@Injectable()
export class AppService {
  constructor(
    private appXRequestHttp: AppXRequestHttp,
    private nftDTOToModelMapper: NFTDTOToModelMapper
  ) {
    this.appXRequestHttp.setBaseUrl(process.env.OPENSEA_API_URL);
  }
  getHelloJesus(): string {
    return 'Hi there, my loved JESUS!';
  }

  async listNFTs() {
    const result = await this.appXRequestHttp
      .setPath('assets')
      .appXGet<NFTListResponseDTO>();
    const nftDataList = this.nftDTOToModelMapper.mapList(result?.assets);
    return nftDataList;
  }
}
