﻿//----------------------------------------------------------------
// product class
function product(id, title, description, price, image, cal, carot, vitc, folate, potassium, fiber) {
    this.id = id; 
    this.title = title;
    this.description = description;
    this.price = price;
	this.image = image;
    this.cal = cal;
    this.nutrients = {
        "Carotenoid": carot,
        "Vitamin C": vitc,
        "Folates": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };
}
