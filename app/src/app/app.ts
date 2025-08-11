import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNav } from "./core/components/main-nav/main-nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('watchdog-ui');
}
