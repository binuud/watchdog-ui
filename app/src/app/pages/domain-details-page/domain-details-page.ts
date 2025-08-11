import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomainService } from '../../core/services/domain-service';
import { GetDetailsResponse } from '../../gen/v1/watchdog/watchdogService.pb';
import { DomainRow } from '../../gen/v1/watchdog/watchdog.pb';

@Component({
  selector: 'app-domain-details-page',
  imports: [],
  templateUrl: './domain-details-page.html',
  styleUrl: './domain-details-page.scss'
})
export class DomainDetailsPage {
  
  domainId: string | null = null;
  domainInfo: DomainRow | undefined;

  constructor(private route: ActivatedRoute, private domainSvc: DomainService) { }

  ngOnInit(): void {
    // Accessing the parameter using paramMap (recommended for observables)
    this.route.paramMap.subscribe(params => {
      this.domainId = params.get('domainId');
      if (this.domainId) {
        this.fetch("", this.domainId);
      }
    });
  }
  
  async fetch(uuid: string, name: string) {

    this.domainSvc.fetchDomainDetails("", name).then((response) => {
      this.domainInfo = response.domain;
    });

  }

}
