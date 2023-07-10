const VAT_PERCENT = 0.2;

//Définition de la class Produit
class Product {
    constructor(id, title, category, price, image, description) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.image = image;
        this.description = description;
        this.vat_price = (this.price * (1 + VAT_PERCENT)).toFixed(2);
    }
}

export default Product;