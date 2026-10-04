import { Component } from '@angular/core';
import { ListProjectsRequest, ListProjectsResponse } from '../../../gen/v1/watchdog/watchdogService.pb';
import { ProjectService } from '../../../core/services/project-service';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss'
})
export class ProjectList {
  page: number = 1;
  loading: boolean = false;
  projectList: ListProjectsResponse = {
    projects: [],
    page: 1 + "",
    perPage: 10 + ""
  }

  constructor(private projectSvc: ProjectService) {}

  ngOnInit() {
    this.fetchPage(1);
  }

  async fetchPage(page: number) {

    const req: ListProjectsRequest = {
      page: page + "",
      perPage: this.projectList.perPage
    }

    this.projectSvc.fetchProjects(page).then((response) => {
      this.projectList = response;
    });

  }
}
