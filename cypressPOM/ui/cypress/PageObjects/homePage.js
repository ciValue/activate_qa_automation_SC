class HomePage

{
    kpiDropdown1 = "(//div[@id='kpi-select'])[1]"
    kpiDropdown2 = "(//div[@id='kpi-select'])[2]"
    $_per_trip = "(//span[normalize-space()='$ per Trip'])[1]"
    Avg_price_unit = "(//span[@class='sc-kImNAt hhOxWq'][normalize-space()='Avg. Price per unit ($)'])[1]"
    comparativeMarket = "//div[@class='MuiInputBase-root-jyCQLz MuiOutlinedInput-root-hcREcK buWlgs gkjzhL MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-disabled MuiInputBase-formControl MuiSelect-root-kUbPPr']//*[name()='svg']"
    compMarket_enabled = "(//*[name()='svg'][@class='MuiSvgIcon-root-ffjXHZ jwkaMg MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon-fwkDVF ickJjY MuiSelect-icon MuiSelect-iconOutlined'])[1]"
    clearbtn = "//button[normalize-space()='Clear']"
    selectAll = "(//span[normalize-space()='Select All'])[1]"
    dataExporter_Link ="//span[text()='Data Exporter']"
    

    


    openDataExporter()
    {
        cy.xpath(this.dataExporter_Link).click()
    }

    
    clickkpiDropdown1()
    {
        cy.xpath(this.kpiDropdown1).click()
    }

    clickkpiDropdown2()
    {
        cy.xpath(this.kpiDropdown2).click()
    }

    setkpidropdown(index)
    {
        cy.xpath(`(//div[@id='kpi-select'])[${index}]`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }

    select$_per_trip()
    {
        cy.xpath(this.$_per_trip).click()
    }

    select_avg_price_unit()
    {
        cy.xpath(this.Avg_price_unit).click()
    }

    coparative_market_disabled()
    {
        cy.xpath(this.comparativeMarket).should('not.be.enabled');
    }

    coparative_market_enabled()
    {
        cy.xpath(this.compMarket_enabled).should('not.be.disabled');
    }

    verify_barchart_weeks(exactText,index)
    {
        cy.xpath(`(//*[name()='text'][contains(text(),'${exactText}')])[${index}]`).should('be.visible')
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }
    Select_KPI_From_DD(exactText,index)
    {
        cy.xpath(`(//span[normalize-space()='${exactText}'])[${index}]`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }

    Select_GEO_From_DD(exactText)
    {
        cy.xpath(`//p[normalize-space()='${exactText}']`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()  
    }

    Select_Category_From_DD(exactText)
    {
        cy.xpath(`//p[normalize-space()='${exactText}']`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()  
    }

    Select_Brand_From_DD(exactText)
    {
        cy.xpath(`//p[normalize-space()='${exactText}']`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()  
    }




    Select_all()
    {
        cy.xpath(this.selectAll).should('be.visible').click()
    }


    Verify_message_multi_selection(index)
    {
        cy.xpath(`(//div[contains(text(),'Market Share only available with single product (R')])[${index}]`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }

    Verify_message_noncoded_selection(index)
    {
        cy.xpath(`(//div[contains(text(),'Market Share is not available due to being non-coded deferred products')])[${index}]`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }




    clear_Btn()
    {
        cy.xpath(this.clearbtn).click()
    }

    waitforselectall()
    {
        cy.xpath(this.selectAll).should("be.visible")
    }

}
export default HomePage;