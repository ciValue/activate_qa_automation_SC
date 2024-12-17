
import dataExporter from "../../../PageObjects/dataExporter_Page"
import supplyChain from "../../../PageObjects/supplyChain_Page"
import scReport from "../../../PageObjects/scPerformanceReportPage"

import { When, Then } from "cypress-cucumber-preprocessor/steps";


const sc = new supplyChain();
const de = new dataExporter();
const scRpt = new scReport();

Given('the application is open', () => {
    // Replace with your actual application URL
    cy.fixture('demoLogindata').then((data) => {
        cy.visit(data.local);
        const sc = new supplyChain();
        sc.localLogin(data.username)

        })
    
  });
  
  When('I navigate to the Supply chain performance report', () => {
    // Replace with your actual selector
   sc.navigateToReports()
  
   cy.wait(5000)
  });
  
  When('I run the sc report with default selection for aggregrated view', () => {
    
    
    scRpt.runReportAggregatedView()
    cy.wait(500)
   
   
  });
  
  Then('the sc report should run successfully for aggregrated view', () => {
    scRpt.verifyRows()
    
  });


  When('I run the sc report with default selection for trend view', () => {
    
    scRpt.runReportTrendView()
    
   
   
  });
  
  Then('the report should run successfully for trend view', () => {
    scRpt.verifyGraphs()
  });

  Then('the SC report should have {int} filters', (expectedFilterCount) => {
   scRpt.verifyFiltersCount(expectedFilterCount)
});


Then('the SC report should have 15 filters', () => {
  scRpt.verifyFiltersCount(10)
});

Then('none of the filters should be empty', () => {
    scRpt.verifyFilterIsNotBlank()
});