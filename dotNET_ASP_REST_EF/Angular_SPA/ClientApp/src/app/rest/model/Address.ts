export class Address {
    //id: number;
    street: string;
    building: string;
    flatNo: string;
    city: string;
    zip: string;
    country: string;

    constructor() {}

    
    setStreet(street: string){
        this.street = street;
    }
    setBuilding(building: string){
        this.building = building;
    }
    setFlatNo(flatNo: string){
        this.flatNo = flatNo;
    }
    setCity(city: string){
        this.city = city;
    }
    setZip(zip: string){
        this.zip = zip;
    }
    setCountry(country: string){
        this.country = country;
    }
}