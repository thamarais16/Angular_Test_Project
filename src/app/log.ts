export class loggerService{
  public log(message: any, msg?: any): any{
    if(msg){
      console.log(message, msg);
    }else{
      console.log(message);
    }
    
  }
}