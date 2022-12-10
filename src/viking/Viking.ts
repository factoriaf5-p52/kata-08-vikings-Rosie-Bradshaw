
import {Soldier} from '../soldier/Soldier'

export class Viking extends Soldier {
    public name:string;
    constructor(name:string, health:number, strength:number){
    super(health, strength);
    this.name = name
    }

    attack():number{
        return this.strength;
    }

    receiveDamage(damage: number):any{
        this.health = this.health-damage;
        
        if (this.health>0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`
    } 

    battleCry():string{
        return "Odin Owns You All!"
    }
};    