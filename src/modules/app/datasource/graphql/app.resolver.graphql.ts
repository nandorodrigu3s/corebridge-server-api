import { Resolver, Args, Mutation, Context, Query } from '@nestjs/graphql';
import { NFTData } from '../../../../graphql/types/nft-data/nft-data.object-type.graphql';
import { AppService } from '../../app.service';

@Resolver()
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query(() => [NFTData], { nullable: 'itemsAndList' })
  async listNFTs(@Context() context): Promise<any> {
    let nftDataList = await this.appService.listNFTs();
    return nftDataList;
  }
}
