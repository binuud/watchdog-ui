import { Component } from '@angular/core';
import { DomainList } from "../../components/domains/domain-list/domain-list";

@Component({
  selector: 'app-home-page',
  imports: [DomainList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
