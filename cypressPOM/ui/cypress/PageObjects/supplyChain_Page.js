class supplyChain {

  // pageLoader = "//div[contains(@class, 'loader')]/..//p[text()='loading']"
  txtuserName = '#username'
  txtpassword = '#password'
  txtsubmitBtn = "button[type='submit']"
  pageLoader = "//div[@class='loader']"
  pageSpinner = "//span[@role='progressbar']//*[name()='svg']"
  supplyChainTab = "//*[text()='Supply Chain']"
  searchBox = "//input[contains(@placeholder, 'Search')]"
  supplyChainReports = "//div[contains(@class, 'MuiCardContent')]"
  apply = '.MuiButton-contained'
  favorites = "(//*[@data-testid='StarBorderIcon'])[1]"
  closeFavorites = "(//*[@data-testid='StarIcon'])[1]"
  listView = "(//*[@data-testid='TableRowsIcon'])"
  gridView = "(//*[@data-testid='GridViewRoundedIcon'])"
  scInstructionMsg = "//*[text()='Select filters from the filters menu, and run report to show data']"
  accountIcon = "(//*[@data-testid='AccountCircleIcon'])"
  logoutButton = "//*[contains(@class, 'MuiTypography-root')]/..//*[text()='Log out']"
  homePageTxt ="//div[text()='Home Page']"
  gregaorianTxt = "//h3[text()='Gregorian']"
  shopperSegmentTxt ="//h3[text()='Shopper Segments Splits']"
  salesGrowthTxt ="//h3[text()='Sales Growth Influencers']"
  dataExporterLnk = "//span[text()='Data Exporter']"
  supplyChain_Link ="//span[text()='Supply Chain']"
  report_Link ="//span[text()='Reports']"
  scReport_Link ="//h2[text()='Supply Chain Performance']"


  dropdown_Profile ="//div[text()='Admin Role']"
  option_Evgeni = "//li[@data-value='Evgeni Grin']"
  option_Admin  = "//li[@data-value='Admin Role']"
  option_RetailerProfile  = "//li[@data-value='Retailer profile - without data export']"
  option_Gregarion  = "//li[@data-value='Gregorian Calendar Profile']"

 
  openSupplyChain(reportCount) {
    
    cy.xpath(this.supplyChainTab).should('be.visible').click()
    cy.xpath(this.supplyChainReports).should('have.length', reportCount)
    cy.xpath(this.favorites).should('be.visible').click()
    cy.get(this.getElementByXpathExactText("No favorite reports have been selected"))
    cy.xpath(this.closeFavorites).should('be.visible').click()
    cy.xpath(this.listView).should('be.visible').click()
  }
  validateSupplyChainReport(reportname) {
    cy.xpath(`//*[text()="${reportname}"]`).should('be.visible').scrollIntoView().click()
    cy.xpath(this.scInstructionMsg).should('be.visible')
  }


  localLogin(username) {
    


    var start = 0;
    cy.get(this.txtuserName).type(username)
    cy.get(this.txtsubmitBtn).click()
    cy.wait(5000)
    cy.then(() => {
      start = performance.now();
    });
    cy.xpath(this.pageLoader).should('not.be.visible')
    cy.get(this.apply).should('be.enabled').then(() => {
      const load = (performance.now() - start) / 1000
      cy.log(`duration land on profile switching tab: ${load} seconds`);
    });
    var star = 0;
    cy.get(this.apply).should('be.enabled').click()
    cy.then(() => {
      star = performance.now();
    });
    //cy.get(this.apply).should('be.enabled').click()
    cy.xpath(this.pageLoader).should('not.be.visible')
    cy.xpath(this.supplyChainTab).then(() => {
      cy.log(`duration to land on home page: ${(performance.now() - star) / 1000} ms`);
    });


  }

  localLogout() {
    cy.xpath(this.accountIcon).should('be.visible').click()
    cy.xpath(this.logoutButton).should('be.visible').click()
  }
  getElementByXpathExactText(exactText) {
    cy.log(`Getting Cypress element by "${exactText}"`);
    return cy.xpath(`(//*[text()='${exactText}'])`).should('be.visible');
  }

 localLogin(username,profile) {
    

    var start = 0;
    cy.get(this.txtuserName).type(username)
    cy.get(this.txtsubmitBtn).click()
    cy.wait(15000)
    cy.then(() => {
      start = performance.now();
    });
    cy.xpath(this.pageLoader).should('not.be.visible')


  }

  verifyHomePage(){
    cy.xpath(this.homePageTxt).should('be.visible');
    cy.xpath(this.gregaorianTxt).should('be.visible');
    cy.xpath(this.shopperSegmentTxt).should('be.visible');
    cy.xpath(this.salesGrowthTxt).should('be.visible');

  }

  navigateToDataExporter(){
    cy.xpath(this.dataExporterLnk).click()
    cy.wait(15000)
   
  }

  

  navigateToReports()
  {
    cy.xpath(this.supplyChain_Link).click()
      cy.xpath(this.report_Link).click()
      cy.xpath(this.scReport_Link).click()


  }
}
export default supplyChain;