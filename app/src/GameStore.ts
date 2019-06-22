export default class GameStore {
    private playerXPosition: number = 1;
    private playerYPosition: number = 0;
    private mapXDimension: number = 3;
    private mapYDimension: number = 3;

    public step(direction: "N" | "S" | "E" | "W"): void {
        switch(direction) { 
            case "N": {
                if (this.playerYPosition + 1 < this.mapYDimension) {
                    this.playerYPosition++;
                }
                break; 
            } 
            case "S": { 
                if (this.playerYPosition > 0) {
                    this.playerYPosition--;
                }
                break; 
            } 
            case "E": { 
                if (this.playerXPosition + 1 < this.mapXDimension) {
                    this.playerXPosition++;
                }
                break; 
             } 
             case "W": { 
                if (this.playerXPosition > 0) {
                    this.playerXPosition--;
                }
                break;  
             } 
            default: { 
               //statements; 
               break; 
            } 
        }
        // generate random number...in some cases, make an action happen 
    }

    public getPlayerPosition(): number[] {
        return [this.playerXPosition, this.playerYPosition];
    }
};