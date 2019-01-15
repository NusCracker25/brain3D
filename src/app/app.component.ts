import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@core/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private config: ConfigService) {

  }
  ngOnInit() {
    this.config.initialize();
  }
}
