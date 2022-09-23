import { Selector } from "testcafe";
import FrontPage from "../PageObject/FrontPage";
import SearchResultPage from "../PageObject/SearchResultPage";
import ShoppingItemPage from "../PageObject/ShoppingItemPage";


const url = 'https://www.amazon.com/'
const defaultTimeout = 10000
fixture('Front Page')
   .page(url)


test("CartTest", async t => {
    await t
        .expect(FrontPage.searchBox.exists).ok({ timeout: defaultTimeout })
        .typeText(FrontPage.searchBox, 'mouse pad')
        .pressKey('enter')
        .expect(SearchResultPage.resultsLabel.exists).ok({ timeout: defaultTimeout })
        //.click(SearchResultPage.searchResueltElement) 
        .click(SearchResultPage.priceWholePart) // better to click on exact item. But test data is unclean so i need to pick any available item
        .expect(ShoppingItemPage.addToCartButton.exists).ok({ timeout: defaultTimeout })
    const priceWholePart = await ShoppingItemPage.priceWholePart.innerText;
    const priceFractionPart = await ShoppingItemPage.priceFractionPart.innerText;
    await t
        .click(ShoppingItemPage.addToCartButton)
        .expect(ShoppingItemPage.proceedToCheckoutButton.exists).ok({ timeout: defaultTimeout })
        .click(ShoppingItemPage.proceedToCheckoutButton)

        .expect(ShoppingItemPage.priceWholePart.withText(priceWholePart).exists).ok({ timeout: defaultTimeout })
        .expect(ShoppingItemPage.priceFractionPart.withText(priceFractionPart).exists).ok({ timeout: defaultTimeout })
        .expect(ShoppingItemPage.addedToCart.exists).ok({ timeout: defaultTimeout })

        .click(ShoppingItemPage.cart)
        .expect(ShoppingItemPage.cartSubtotal.exists).ok({ timeout: defaultTimeout })
        .expect(Selector('span').withText(priceWholePart+priceFractionPart).exists).ok({ timeout: defaultTimeout })
});
