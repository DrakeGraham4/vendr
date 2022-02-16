import { ProxyState } from "../AppState.js";

class SnacksService{
    addMoney() {
        console.log('hello from snacksService');
        ProxyState.money += .25
        console.log(ProxyState.money);
    }
    
}


export const snacksService = new SnacksService()

