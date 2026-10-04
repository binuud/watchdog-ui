import { Component, Input } from '@angular/core';
import { GitProjectRow } from '../../../gen/v1/watchdog/git.pb';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() project!: GitProjectRow; 
}
