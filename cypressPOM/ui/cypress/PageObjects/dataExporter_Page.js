import 'cypress-downloadfile/lib/downloadFileCommand';
class dataExporter {

  // pageLoader = "//div[contains(@class, 'loader')]/..//p[text()='loading']"
  dataTypeDrpdwn = "//div[text()='Insights']"
  supplyChainLnk = "//li[@data-value='supplyChain']"  
  multiPeriodBtn ="//h3[text()='Multi Period']"
  runReportBtn = "//button[@data-automation='Run_Report']"

  dataExporterTxt = "//div[text()='Data Exporter']"
  exportExcelBtn = "//button[@data-testid='rprt_export_to_excel']"
  exportCsvBtn = "//button[@data-testid='rprt_export_to_csv']"
  tableTxt = "//h3[text()='Table']"
  pivotTxt = "//h3[text()='Table']"
  dataTable ="//table[contains(@class,'Table-table table-bordered')]"
  dataTableRows ="//table[contains(@class,'Table-table table-bordered')]//tr"

  fileNameInput = "//input[contains(@value,'Data Exporter')]"
  okBtn = "//button[text()='OK']"
  runReportAggregatedView()
  {
    cy.xpath(this.runReportBtn).should('be.visible').click()
    cy.wait(10000)
  }

  runReportMultiPeriodView()
  {
    cy.xpath(this.multiPeriodBtn).should('be.visible').click()
    cy.xpath(this.runReportBtn).should('be.visible').click()
    cy.wait(10000)
  }

  verifyDataExporter(){

    cy.xpath(this.dataExporterTxt).should('be.visible');
    cy.xpath(this.exportExcelBtn).should('be.visible');
    cy.xpath(this.exportCsvBtn).should('be.visible');
    cy.xpath(this.tableTxt).should('be.visible');
    cy.xpath(this.pivotTxt).should('be.visible');
    cy.xpath(this.dataTable).should('be.visible');
  }

verifyRows(){


    // Get table rows and verify the count is greatee then 5
    
    cy.xpath(this.dataTableRows).then(($rows) => {
      const rowCount = $rows.length;
      expect(rowCount).to.be.greaterThan(5);
    });


}


verifyFilesDownloaded(){

  cy.xpath(this.exportExcelBtn).should('be.visible').click()
  cy.wait(1000)
  cy.xpath(this.fileNameInput).clear().type("abc")
  cy.wait(5000)
 // cy.get(this.okBtn).click();
 cy.contains('button','OK').click();

 // cy.downloadFile('C:/Users/shsa2004', '/Downloads', 'abc.xlsx');


    // Verify file size and contents
   // cy.readFile('filePath', 'binary').should('not.be.empty');
    //cy.readFile(filePath, 'binary').should((buffer) => {
    //  expect(buffer.length).to.be.greaterThan(0);
    //});

    // Optional: Verify specific file size in bytes
    //cy.readFile(filePath, 'binary').then((buffer) => {
     // const sizeInBytes = buffer.length;
      //expect(sizeInBytes).to.be.greaterThan(0); // Ensure file is not empty
      // Add additional size checks if necessary
    //});
}

}
export default  dataExporter ;