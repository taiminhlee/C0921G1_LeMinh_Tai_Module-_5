export class AttachService {
  name: string;
  unit: number;
  cost: number;


  constructor(name: string, unit: number, cost: number) {
    this.name = name;
    this.unit = unit;
    this.cost = cost;
  }
}
