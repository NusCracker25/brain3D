import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '@core/services/session-manager.service';

@Component({
  selector: 'app-view3-d',
  templateUrl: './view3-d.component.html',
  styleUrls: ['./view3-d.component.scss']
})
export class View3DComponent implements OnInit {

  constructor(
    private session: SessionManagerService
  ) { }

  ngOnInit() {
  }

}
