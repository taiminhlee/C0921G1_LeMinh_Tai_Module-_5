import {RentType} from "./rent-type";

export class Facility {
  id: string;
  name: string;
  area: number;
  cost: number;
  maxOfPeople: number;
  rentType: RentType;
  img: string;


  constructor(id: string, name: string, area: number, cost: number, maxOfPeople: number, rentType: RentType, img: string) {
    this.id = id;
    this.name = name;
    this.area = area;
    this.cost = cost;
    this.maxOfPeople = maxOfPeople;
    this.rentType = rentType;
    this.img = img;
  }
}
