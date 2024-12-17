class ReportsPage

{
    scPerformance_Link ="//h2[text()='Supply Chain Performance']"
    inventoryEff_Link ="//h2[text()='Inventory Efficiency Report']"
    scScorecard_Link ="//h2[text()='Supplier Scorecard']"
    demandForecast_Link ="//h2[text()='Demand Forecast Report']"
    usageReport_Link = "//h2[text()='Usage Report']"

   

    openSC_PerformanceReport()
    {
        cy.xpath(this.scPerformance_Link).click()
    }

    openInventoryEfficiencyReport()
    {
        cy.xpath(this.inventoryEff_Link).click()
    }
    openSC_ScoreCardReport()
    {
        cy.xpath(this.scScorecard_Link).click()
    }
    openDemand_ForecastReport()
    {
        cy.xpath(this.demandForecast_Link).click()
    }
    openUsageReport()
    {
        cy.xpath(this.usageReport_Link).click()
    }

}
export default ReportsPage;