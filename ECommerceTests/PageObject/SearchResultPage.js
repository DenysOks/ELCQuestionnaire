import { Selector } from 'testcafe';

class SearchResultPage {
 
    constructor(){
        this.resultsLabel = Selector('span').withText('RESULTS')
        this.searchResueltElement = Selector('div').withAttribute('data-index', '2')
        this.priceWholePart = Selector('.a-price-whole').nth(1)
        this.priceFractionPart = Selector('.a-price-fraction').nth(1)
    }
}

export default new SearchResultPage();