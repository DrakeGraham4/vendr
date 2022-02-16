import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnackService.js";

function _draw(){
    document.getElementById('money').innerText = ProxyState.money.toFixed(2)
}


function _drawSnacks() {
    let template = ''
    ProxyState.snacks.forEach(s => template += s.Template)
    document.getElementById('snacks').innerHTML = template
}


    

export class SnacksController{
    constructor() {
        ProxyState.on('money', _draw)
        _draw()
        _drawSnacks()
    }
    addMoney() {
        console.log('hello from snackscontroller');
        snacksService.addMoney()
    }
    
}






