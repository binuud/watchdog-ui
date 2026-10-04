import { Injectable } from '@angular/core';
import { ListProjectsRequest, WatchDog } from '../../gen/v1/watchdog/watchdogService.pb';
import { InitReq } from '../../gen/fetch.pb';

@Injectable({
  providedIn: 'root'
})

// ProjectService
// List project summaries
export class ProjectService {

  private static SERVICE_ENDPOINT = '';
  
  
  constructor() { }

  async fetchProjects(page: number = 1, pasgeSize:number = 20) {

    const req: ListProjectsRequest = {
      page: page + "",
      perPage: pasgeSize + ""
    }
    const initReq: InitReq = {
      pathPrefix: ProjectService.SERVICE_ENDPOINT
    }
    return await WatchDog.ListProjects(req,initReq);

  }

}
