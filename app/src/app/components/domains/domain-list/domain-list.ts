import { Component } from '@angular/core';
import { ListSummariesRequest, ListSummariesResponse } from '../../../gen/v1/watchdog/watchdogService.pb';
import { DomainService } from '../../../core/services/domain-service';

@Component({
  selector: 'app-domain-list',
  imports: [],
  templateUrl: './domain-list.html',
  styleUrl: './domain-list.scss'
})
export class DomainList {

  page: number = 1;
  loading: boolean = false;
  domainList: ListSummariesResponse = {
    summaries: [],
    page: 1 + "",
    perPage: 10 + ""
  }

  constructor(private domainSvc: DomainService) {}

  ngOnInit() {
    this.fetchPage(1);
  }

  async fetchPage(page: number) {

    const req: ListSummariesRequest = {
      page: page + "",
      perPage: this.domainList.perPage
    }

    this.domainSvc.fetchDomains(page).then((response) => {
      this.domainList = response;
    });

  }

}
