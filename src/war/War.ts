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
    
}    