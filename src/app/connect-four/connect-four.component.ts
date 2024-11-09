import { Component, OnInit } from '@angular/core';

import {ConnectFourService} from "../connect-four.service";

@Component({
  selector: 'app-connect-four',
  templateUrl: './connect-four.component.html',
  styleUrls: ['./connect-four.component.css']
})
export class ConnectFourComponent implements OnInit {


  pieces: any[] = [];

  currentPlayer='red';
  showCongrats: boolean=false;
  winnerPlayer='';





  constructor(private connectFourService: ConnectFourService) {
    this.reset();
  }

  reset() {
    this.connectFourService.reset();
    this.pieces = this.connectFourService.getPieces();
    this.currentPlayer = this.connectFourService.getCurrentPlayer();
    this.showCongrats = this.connectFourService.getShowCongrats();
    this.winnerPlayer = this.connectFourService.getWinnerPlayer();
  }
  ngOnInit() {
    this.reset();
  }




  dropPiece(colIndex: number) {
   const result = this.connectFourService.dropPiece(colIndex);
   if(result){
     this.pieces=this.connectFourService.getPieces();
     this.currentPlayer=this.connectFourService.getCurrentPlayer();
     this.showCongrats=this.connectFourService.getShowCongrats();
     this.winnerPlayer=this.connectFourService.getWinnerPlayer();
   }
  }



}
