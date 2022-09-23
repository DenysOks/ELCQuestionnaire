import { Selector } from 'testcafe';

class FrontPage {
 
    constructor(){
        this.searchBox = Selector('#twotabsearchtextbox');
    }
}

export default new FrontPage();