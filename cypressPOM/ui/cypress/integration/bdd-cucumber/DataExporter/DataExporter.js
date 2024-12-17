
import dataExporter from "../../../PageObjects/dataExporter_Page"
import supplyChain from "../../../PageObjects/supplyChain_Page"

import { When, Then } from "cypress-cucumber-preprocessor/steps";


const sc = new supplyChain();
const de = new dataExporter();

Given('the application is open', () => {
    // Replace with your actual application URL
    cy.fixture('demoLogindata').then((data) => {
        cy.visit(data.local);
        const sc = new supplyChain();
        sc.localLogin(data.username)

        })
    
  });
  
  When('I navigate to the Data Exporter section', () => {
    // Replace with your actual selector
   sc.navigateToDataExporter()
   cy.wait(10000)
  });
  
  When('I run the report with default selection for aggregrated view', () => {
    
    de.runReportAggregatedView()
   
   
  });
  
  Then('the report should run successfully for aggregrated view', () => {
    de.verifyDataExporter()
    de.verifyRows()
  });

  When('I run the report with default selection for aggregrated view', () => {
    
    de.runReportAggregatedView()
   
   
  });
  
  Then('the report should run successfully for aggregrated view', () => {
    de.verifyDataExporter()
    de.verifyRows()
  });

  When('I run the report with default selection for multiperiod view', () => {
    
    de.runReportMultiPeriodView()
   
   
  });
  
  Then('the report should run successfully for multiperiod view', () => {
    de.verifyDataExporter()
    de.verifyRows()
  });

  Then('on clicking export files should be downloaded', () => {
    de.verifyFilesDownloaded()
    
  });