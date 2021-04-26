import { loggerService } from './log';
import { Injectable } from '@angular/core';

//@Injectable()
export class ProSer {
  constructor(
    private logger: loggerService
  ){
    this.logger.log("hithamassss");
  }
}

