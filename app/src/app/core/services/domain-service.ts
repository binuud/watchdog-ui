import { Injectable } from '@angular/core';
import { GetDetailsRequest, GetRequest, ListSummariesRequest, WatchDog } from '../../gen/v1/watchdog/watchdogService.pb';
import { InitReq } from '../../gen/fetch.pb';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  
  private static SERVICE_ENDPOINT = '/api/watchdog/';

 
  constructor() { }

  async fetchDomains(page: number = 1, pasgeSize:number = 20) {

    const req: ListSummariesRequest = {
      page: page + "",
      perPage: pasgeSize + ""
    }
    const initReq: InitReq = {
      pathPrefix: DomainService.SERVICE_ENDPOINT
    }
    return await WatchDog.ListSummaries(req,initReq);

  }

  async fetchDomainDetails(uuid: string = "", name:string = "") {

    const req: GetDetailsRequest = {
      uuid: uuid,
      name: name
    }
    const initReq: InitReq = {
      pathPrefix: DomainService.SERVICE_ENDPOINT
    }
    return await WatchDog.GetDetails(req, initReq);

  }

}
