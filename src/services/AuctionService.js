import BaseService from "./BaseService";

export default class AuctionService extends BaseService {
    static resource() {
      return 'auctions'
    }
}