export class Soldier {
    constructor(public health:number, public strength:number) {
        this.health = health,
        this.strength = strength
    }
    
    attack():number {
        return this.strength;
    }

    receiveDamage(damage:number):any{
        this.health = this.health-damage;
        return undefined;
    }

}; 



