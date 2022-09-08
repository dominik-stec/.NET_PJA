/*
ng serve -o --port 4201
*/

export class Config {
    
          apiUrl: string;

          constructor() {}

          getUrl() {
              this.apiUrl = "http://localhost:5000/api/database";
               return this.apiUrl;
          }
       
}
