import { Component } from '@angular/core';
import { DomainList } from "../../components/domains/domain-list/domain-list";
import { ProjectList } from '../../components/projects/project-list/project-list';

@Component({
  selector: 'app-home-page',
  imports: [DomainList, ProjectList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
