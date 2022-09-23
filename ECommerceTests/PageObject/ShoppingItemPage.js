import { Selector } from 'testcafe';

class ShoppingItemPage {
 
    constructor(){
        this.addToCartButton = Selector('span').withText('Add to Cart')
        this.proceedToCheckoutButton = Selector('div').withText('Proceed to checkout ')
        this.priceWholePart = Selector('.a-price-whole').nth(1)
        this.priceFractionPart = Selector('.a-price-fraction').nth(1)
        this.cartSubtotal = Selector('span').withText('Subtotal ')
        this.addedToCart = Selector('span').withText('Added to Cart')
        this.cart = Selector('#nav-cart')
    }
}

export default new ShoppingItemPage();