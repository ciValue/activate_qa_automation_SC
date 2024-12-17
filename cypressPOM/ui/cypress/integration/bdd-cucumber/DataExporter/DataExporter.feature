Feature: DataExporter
--Scenario: Login user with different profiles
--Given I navigate to supply chain application
--When I enter  login credentials
--Then I should  be logged in



    Scenario: Run data exporter with default selection for aggregrated view and verify it runs successfully
    Given the application is open
    When I navigate to the Data Exporter section
    And I run the report with default selection for aggregrated view
    Then the report should run successfully for aggregrated view
    



    Scenario: Run data exporter with default selection for multiperiod view and verify it runs successfully
    Given the application is open
    When I navigate to the Data Exporter section
    And I run the report with default selection for multiperiod view
    Then the report should run successfully for multiperiod view
    #And on clicking export files should be downloaded    