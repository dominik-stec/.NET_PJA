/*
ng serve -o --port 4201
*/

export class Config {
    
          apiUrl: string;

          constructor() {}

          getUrl() {
               this.apiUrl = "https://localhost:44382/api/persons";
               return this.apiUrl;
          }
       
}
