Feature: DataExporter




    Scenario: Run sc report  with default selection for aggregrated view and verify it runs successfully
    Given the application is open
    When I navigate to the Supply chain performance report 
    And I run the sc report with default selection for aggregrated view
    Then the sc report should run successfully for aggregrated view
    



    Scenario: Run sc report  with default selection for trend view and verify it runs successfully
    Given the application is open
    When I navigate to the Supply chain performance report
    And I run the sc report with default selection for trend view
   Then the report should run successfully for trend view
      
    
    Scenario: Run sc report  with default selection for aggregrated view and verify filters count and data
    Given the application is open
    When I navigate to the Supply chain performance report 
    And I run the sc report with default selection for aggregrated view
    Then the SC report should have 15 filters
    #And none of the filters should be empty

    Scenario: Run sc report  with default selection for trend view and  filters count and data
    Given the application is open
    When I navigate to the Supply chain performance report
    And I run the sc report with default selection for trend view
    Then the SC report should have 15 filters