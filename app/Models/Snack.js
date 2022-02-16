export class Snack{
    constructor(name, imgUrl, price) {
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
    }
    get Template() {
        return `<div class="col-3 p-3">
          <div class="card-group">
            <div class="card">
              <img src="${this.imgUrl}" onclick="buySnacks('${this.name}')" class="card-img-top" style="width: 200px;height: 200px;" alt="doritos">
              <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text"></p>
                <p class="card-text">Price: ${this.price}<small class="text-muted"></small></p>
              </div>
            </div>
        </div>
      </div>`
    }
}

