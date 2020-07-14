//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { randomFillSync } from "crypto";

export class Bowling {
  constructor(){
    this.gameOver = false;
    this.pinsRemaining = 10;
    this.curScore = 0;
    this.frame = 1;
    this.curRoll = 0;
    this.strike1 = 0;
    this.strike2 = 0;
    this.spare = 0;
    this.rollNum = 1;
    this.lastFrame = false;
  };

  //check starting conditions
  validRoll(pins){
    if(pins < 0){
       throw new Error('Negative roll is invalid')
    };
    if(pins > this.pinsRemaining){
      throw new Error('Pin count exceeds pins on the lane')
    };
    if(this.gameOver){
      throw new Error('Cannot roll after game is over')
    };
  }

  score(){
    if (!this.gameOver) throw new Error('Score cannot be taken until the end of the game');
    return this.curScore;
  };

  //strikes and spares are tallied here, scored later. strike tally never more than 2

  ifStrike(){
    //if not last frame
    if (this.curRoll === 10 && !this.lastFrame) {
      //and previous roll was a strike, set strike2 counter
        //only need to track last 2 strikes (strike 1, strike 2) bc if third strike, score has already been accounted for
      if(this.strike1 > 0){
        this.strike2 = 2;
        //else set strike 1 counter
      } else {
        this.strike1 = 2;
      };
      //if last frame, no bonuses needed. set last frame 
      if(this.frame === 10){
        this.lastFrame = true
      };
    };
  };

  ifSpare(){
    //checks for spare and not strike. pins remaining only set if not strike
    if(this.curRoll === this.pinsRemaining && this.curRoll !== 10){
      this.spare = 1;
    }; 
  };

  //handles strikes and spare scoring
  strikesAndSpares(){
    //adds strike bonus and removes first count
    if (this.strike1 > 0) {
      this.curScore += this.curRoll;
      this.strike1--;
    };
    //adds strike bonus and removes second count
    if (this.strike2 > 0) {
      this.curScore += this.curRoll;
      this.strike2--;
    };
    //adds spare bonus and resets count
    if (this.spare > 0) {
      this.curScore += this.curRoll;
      this.spare--;
    };
  };

  updateScore(){
    //add any bonuses from previous strikes or spares
    this.strikesAndSpares();
    //if not last frame, add score
    if (this.frame !== 10) {
      this.curScore += this.curRoll;
    } 
    //if its the last frame but not roll 3
    else if (this.rollNum === 1 || (this.rollNum === 2 && !this.lastFrame)) {
      this.curScore += this.curRoll;
    };
  };

  updateGame(){
    //handle strikes/spares tally
    this.ifStrike();
    this.ifSpare();
    //if not last frame
    if (this.frame !== 10) {
      //if roll 2 or strike, reset
      if (this.rollNum === 2 || this.curRoll === 10) {
        //reset rollNum, update frame, reset pins after roll 2.
        this.rollNum = 1;
        this.frame++;
        this.pinsRemaining = 10;
      } else {
        //its roll one, adjust pins for roll 2
        this.pinsRemaining -= this.curRoll;
        this.rollNum = 2;
      };
      // else this is the 10th frame
    } else if (this.rollNum === 1) { 
      // and rolls a strike
        if (this.curRoll === 10) {
          this.pinsRemaining = 10;
        } else {
          this.pinsRemaining -= this.curRoll;
        };
        this.rollNum = 2;
        //10th frame and second roll
      } else if(this.rollNum === 2){ 
        //rolls a spare
          if(this.curRoll === this.pinsRemaining) {
            this.pinsRemaining = 10;
            this.rollNum = 3;
          } else if (this.lastFrame) {
            //strike on first roll, no strike or spare on second roll
            this.pinsRemaining -= this.curRoll;
            this.rollNum = 3;
          } else {
            this.gameOver = true;
          };
      } else { // frame 10
        this.gameOver = true;
      };
    };

  roll(pins){
    this.validRoll(pins);
    this.curRoll = pins;
    this.updateScore();
    this.updateGame();
  };
}
