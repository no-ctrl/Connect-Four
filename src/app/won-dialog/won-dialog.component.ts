import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ConnectFourComponent} from "../connect-four/connect-four.component";
import { NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-won-dialog',
  templateUrl: './won-dialog.component.html',
  styleUrls: ['./won-dialog.component.css']
})
export class WonDialogComponent {


  @Input() winnerPlayer: string = '';
  @Output() close = new EventEmitter<void>();

  constructor(private connectFour: ConnectFourComponent) {
}


  onClose() {
    this.close.emit();
  }
}
