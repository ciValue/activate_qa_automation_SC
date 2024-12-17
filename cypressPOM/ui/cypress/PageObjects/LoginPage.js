class Login {
    txtuserName = '#username'
    txtpassword = '#password'
    txtsubmitBtn = "button[type='submit']"
    profdropdownbtn = "div[role='button']"
    adminProfile = "(//div[@aria-label='Admin Role'])[2]"
    adminProfilefinal = "li[aria-label='Admin Role'] div[aria-label='Admin Role']"
    greenprofile = "div[aria-label='Evgeni Grin']"
    retailerProfile = "div[aria-label='Retailer profile - without data export']"
    gregProfile = "div[aria-label='Gregorian Calendar Profile']"
    profileApplybtn = "(//button[normalize-space()='Apply'])[1]"
    home = "//span[normalize-space()='Home']"
    msdHover = '//span[text()="Market Share ($)"]'
    msuHover = '//span[text()="Market Share Unit"]'
    msdHovertxt = "//*[text()='Percentage of sales for the retailer out of the total NIQ Channel, inc all participating Retailers in the market']"
    msuHovertxt = "//*[text()='Percentage of unit sales for the retailer out of the total NIQ Channel, inc all participating Retailers in the market']"
    homepagetitle = "//div[text()='Home Page']"
    kpiCardbox = "//div[@class='HomeCardsPanelComp__ChartsWrapperStyle-sc-r1tj2i-3 iZORex']/div"
    filterCardbox = "(//div[@class='HomeCardsPanelComp__FiltersWrapperStyle-sc-r1tj2i-2 ljDxkG'])[1]/div"
    category = "(//span[contains(text(),'Category')])[1]"
    brand = "(//span[contains(text(),'Brand')])[1]"
    geo = "(//span[contains(text(),'GEO')])[1]"
    bostonNorth = "//p[normalize-space()='BOSTON - NORTH']"
    comparativeMarket = "(//h3[normalize-space()='CMxAOC'])[1]"
    cmxaoc = "(//h3[normalize-space()='CMxAOC'])[2]"
    comparativePeriod = "(//h3[normalize-space()='Previous'])[1]"
    totalCompperiod = "//ul[@role='listbox']/li"
    yoy = "//h3[normalize-space()='Year Over Year']"

    loader = "//span[@role='progressbar']//*[name()='svg']"

    // pageLoader = "//div[contains(@class, 'loader')]/..//p[text()='loading']"
    pageLoader = '.loader'
    pageSpinner = '[class*="MuiCircularProgress-svg css-1idz92c-MuiCircularProgress-svg"]'
    apply = '.MuiButton-contained'



    setUserName(username) {
        cy.get(this.txtuserName).type(username)
    }

    demoLogin(username) {
      //cy.get(this.pageLoader).should('not.exist').wait(30000);
        //cy.get(this.pageLoader, { timeout: 200000 }).should('not.exist')
        cy.get(this.txtuserName).type(username)
        cy.get(this.txtsubmitBtn).click()
        cy.wait(20000)
        // cy.get(this.pageLoader, { timeout: 20000 }).should('not.exist')
        // cy.get(this.pageSpinner, { timeout: 20000 }).should('not.exist')
        cy.get(this.apply).should('be.enabled').click()

    }

    setPassword(password) {
        cy.get(this.txtpassword).type('')
    }


    clickSubmit()
    {
        cy.get(this.txtsubmitBtn).click()

    }

    verifyLogin(username) {
        cy.get(this.txtuserName).type(username)
        cy.get(this.txtsubmitBtn).click()
        cy.wait(500000);
      }

    clickSubmit() {
        cy.get(this.txtsubmitBtn).click().wait(20000)

    }

    verifyLogin() {
        cy.get(this.profdropdownbtn)
    }

    clickDropdownbtn() {
        cy.get(this.profdropdownbtn).click()
    }


    selectAdmnprofile()
    {
        cy.xpath(this.adminProfile).click()
    }

    selectAdmnprofilefinal()
    {
        cy.get(this.adminProfilefinal).click()

    }

    selectAdmnprofile() {
        cy.get(this.adminProfile).click()

    }

    selectGreenprofile() {
        cy.get(this.greenprofile).click()
    }

    selectRetailerprofile() {
        cy.get(this.retailerProfile).click()
    }

    selectGregprofile() {
        cy.get(this.gregProfile).click()
    }

    clickApply() {
        cy.xpath(this.profileApplybtn).click()
    }


    verifyLandingpage()
    {
        cy.xpath(this.home).should("be.visible") 
    }

    Verify_MSD()
    {
        cy.xpath(this.msdHover).should('have.text', 'Market Share ($)').wait(2000)
    }

    Verify_MSU()
    {
        cy.xpath(this.msuHover).should('have.text', 'Market Share Unit').wait(2000)
    }


    marketSharedollhover()
    {
    }

    verifyLandingpage() 
    {
        cy.xpath(this.home).wait(5000)
    }

    marketSharedollhover() 
    {

        cy.xpath(this.msdHover).trigger('mouseover').wait(2000)
    }

    marketShareunithover() 
    {
        cy.xpath(this.msuHover).trigger('mouseover').wait(3000)
    }

    verifyMSDtext() 
    {
        cy.xpath(this.msdHovertxt).wait(3000)
    }

    verifyMSUtext() 
    {
        cy.xpath(this.msuHovertxt).wait(3000)
    }

    verifyHomepagetitle() 
    {
        cy.xpath(this.homepagetitle).click({ force: true })
    }

    verifyTotalkpicards() 
    {
        cy.xpath(this.kpiCardbox).should('have.length', 5)
    }

    verifyTotalfilters() 
    {
        cy.xpath(this.filterCardbox).should('have.length', 5)
    }


    waitforloader()
    {
        cy.xpath(this.loader).should("be.visible")
    }

    verifyCategory()
    {
        cy.xpath(this.category).click({force: true}).wait(3000)

    }
    verifyCategory() 
    {
        cy.xpath(this.category).click({ force: true }).wait(3000)

    }

    verifyBrand() 
    {
        cy.xpath(this.brand).click({ force: true }).wait(3000)
    }


    verifyGEO()
    {
        cy.xpath(this.geo).click({force: true}).wait(3000) 

    }

    verifyGEO() 
    {
        cy.xpath(this.geo).click({ force: true }).wait(12000)

    }

    selectGeoBostan() 
    {
        cy.xpath(this.bostonNorth).contains("BOSTON - NORTH").click().wait(3000)
    }


    selectGeoChicago()
    {
        cy.xpath(this.bostonNorth).contains("BOSTON - NORTH").click().wait(3000) 
    }

    verifyComparativeMarket()
    {
        cy.xpath(this.comparativeMarket).click({force: true}).wait(3000)

    }

    verifyComparativeMarket() 
    {
        cy.xpath(this.comparativeMarket).click({ force: true }).wait(3000)

    }

    selectCMAxOC() 
    {
        cy.xpath(this.cmxaoc).click({ force: true }).wait(2000)
    }

    selectCompareperiod() 
    {
        cy.xpath(this.comparativePeriod).click({ force: true })
    }

    verifytotalCompareperiod() 
    {
        cy.xpath(this.totalCompperiod).should('have.length', 2)
    }

    selectYOY() 
    {
        cy.xpath(this.yoy).click()
    }




}
export default Login;