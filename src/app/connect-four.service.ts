import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConnectFourService {
  private rows = 6;
  private cols = 7;
  private pieces: any[] = [];
  private currentPlayer = 'red';
  private showCongrats = false;
  private winnerPlayer = '';
  constructor() { }

  reset(){
    this.pieces = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => null)
    );
    this.currentPlayer='red';
  }

  getRows(): number {
    return this.rows;
  }

  getCols(): number {
    return this.cols;
  }

  getPieces(): any[] {
    return this.pieces;
  }

  getNextEmptyRow(colIndex: number): number {
    for (let row = this.rows - 1; row >= 0; row--) {
      if (!this.pieces[row][colIndex]) {
        return row;
      }
    }
    return -1;
  }

  createGrid(): any[] {
    this.pieces = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => null)
    );
    return this.pieces;
  }


  getCurrentPlayer(): string {
    return this.currentPlayer;
  }

  getShowCongrats(): boolean {
    return this.showCongrats;
  }

  getWinnerPlayer(): string {
    return this.winnerPlayer;
  }


  dropPiece(colIndex: number): boolean {
    const rowIndex = this.getNextEmptyRow(colIndex);
    if (rowIndex >= 0) {
      this.pieces[rowIndex][colIndex] = this.currentPlayer;
      const winner = this.checkWin(rowIndex, colIndex, this.currentPlayer);
      // If there is no winner, switch to the other player
      if (!winner) {
        this.currentPlayer = this.currentPlayer === 'red' ? 'yellow' : 'red';
      }
      else if (winner) {
        this.winnerPlayer = this.currentPlayer;
        this.showCongrats = true;

        console.log("Congratulations " + this.currentPlayer + " " + "You won!")
      }
      return true; // Piece was successfully dropped
    }
    return false; // Piece was not dropped
  }



  checkWin(row: number, col: number, player: string): boolean {
    const directions = [
      [0, 1], // right
      [1, 0], // down
      [1, 1], // diagonal right down
      [-1, 1], // diagonal right up
      [-1, -1], // diagonal left up
      [1, -1], // diagonal left down
    ];
    // Check for horizontal wins
    let count = 0;
    for (let c = 0; c < this.cols; c++) {
      if (this.pieces[row][c] === player) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // Check for wins in other directions
    for (let dir of directions) {
      let count = 0;
      let r = row;
      let c = col;

      while (r >= 0 && r < this.rows && c >= 0 && c < this.cols && this.pieces[r][c] === player) {
        count++;
        r += dir[0];
        c += dir[1];

        if (count === 4) {
          return true;
        }
      }
    }

    return false;
  }
}
