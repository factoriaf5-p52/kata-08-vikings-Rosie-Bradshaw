import { Soldier } from "../soldier/Soldier";
import { Saxon } from "../saxon/Saxon";
import { Viking } from "../viking/Viking";

export class War{
    
    vikingArmy:Viking[] = []
    saxonArmy:Saxon[] = []
     
    addViking(viking:Viking){
        this.vikingArmy.push(viking); 
        return undefined;
    }

    addSaxon(saxon:Saxon){ 
        this.saxonArmy.push(saxon); 
        return undefined; 
    }
    
    
    viking: Viking = this.vikingArmy[Math.floor(Math.random())*this.vikingArmy.length];
    saxon: Saxon = this.saxonArmy[Math.floor(Math.random())*this.saxonArmy.length];

    vikingAttack(){  
        let saxonOldHealth = this.saxon.health;
        // this.viking.strength = this.saxon.receiveDamage(this.viking.strength);
        this.saxon.health = saxonOldHealth-this.viking.strength;
    }
}    