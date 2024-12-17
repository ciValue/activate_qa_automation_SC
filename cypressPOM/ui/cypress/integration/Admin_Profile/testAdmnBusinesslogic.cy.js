import Login from "../../PageObjects/LoginPage"
import HomePage from "../../PageObjects/homePage"
import 'cypress-time-marks'

describe("Homepage business logic test",()=>{


    beforeEach("Login",()=>{

        const ln=new Login();
        cy.visit('http://localhost:3000/local_login').timeMark("Login")
        cy.get('#username').type('Daniel.Modi@demo_val')
        ln.clickSubmit();
        ln.waitforloader();
        ln.verifyLogin(); 
        cy.timeSince('Login')
        ln.clickDropdownbtn();            
        ln.selectAdmnprofilefinal();
        ln.clickApply(); 
        ln.verifyLandingpage();
        cy.wait(5000);
    })


    it("If market share KPI is not selected then comparative market filter should be desabled and vice versa", ()=>{

        const ln=new Login();
        const hp=new HomePage();
        hp.setkpidropdown(1);
        hp.select$_per_trip();
        hp.setkpidropdown(2);
        hp.select_avg_price_unit();
        hp.coparative_market_disabled();
        cy.wait(2000);
        hp.setkpidropdown(1);
        hp.Select_KPI_From_DD('Market Share ($)',1);
        hp.setkpidropdown(2);
        hp.Select_KPI_From_DD('Market Share Unit',1);
        hp.coparative_market_enabled();
        cy.wait(5000);
    })

    it("Verify KPIs details for Market share $ and Market Share Unit",()=>{

        const ln=new Login();
        const hp=new HomePage();
        //KPI card 1
        hp.verify_barchart_weeks('L52',1);
        hp.verify_barchart_weeks('L26',1);
        hp.verify_barchart_weeks('L13',1);
        hp.verify_barchart_weeks('L4',1);
        cy.wait(2000)
        //KPI card 2
        hp.verify_barchart_weeks('L52',2);
        hp.verify_barchart_weeks('L26',2);
        hp.verify_barchart_weeks('L13',2);
        hp.verify_barchart_weeks('L4',2);
        cy.wait(2000);
        
    })


    it("Geo filter test- Verify RDH message",()=>{

        const ln=new Login();
        const hp=new HomePage();
        ln.verifyGEO();
        cy.timeMark('Loading Geo');
        hp.waitforselectall();                 
        cy.timeSince('Loading Geo')
        hp.Select_GEO_From_DD('BOSTON - NORTH');               // select geo filter Boston-North
        hp.Select_GEO_From_DD('CHICAGO - WEST');
        ln.verifyHomepagetitle();
        hp.Verify_message_multi_selection(1);
        hp.Verify_message_multi_selection(2);
        hp.clear_Btn();
        ln.verifyGEO(); 
        hp.Select_all();
        ln.verifyHomepagetitle();
        hp.Verify_message_multi_selection(1);
        hp.Verify_message_multi_selection(2);
        hp.clear_Btn();
        ln.Verify_MSD();
        ln.Verify_MSU();
        ln.verifyGEO();                                         //verify Geo
        hp.Select_GEO_From_DD('AKRON');               // select geo filter Boston-North
        ln.verifyHomepagetitle();
        hp.Verify_message_noncoded_selection(1);
        hp.Verify_message_noncoded_selection(2);
        cy.wait(2000)


        
    })


    it("Category filter test",()=>{
        
        const ln=new Login();
        const hp=new HomePage();
        ln.verifyCategory();                           //verify category
        cy.timeMark('Loading Category');
        hp.waitforselectall();                 
        cy.timeSince('Loading Category');
        hp.Select_Category_From_DD('"BAKERY / Other Bakery / BAKERY / ""PIES - PLU 8"""""""');
        ln.verifyHomepagetitle();
        hp.Verify_message_noncoded_selection(1);
        hp.Verify_message_noncoded_selection(2);
        hp.clear_Btn();
        ln.Verify_MSD();
        ln.Verify_MSU();
// double selection
        
        ln.verifyCategory();                           //verify category
        hp.waitforselectall();
        hp.Select_Category_From_DD('"BAKERY / Other Bakery / BAKERY / ""PIES - PLU 8"""""""');
        hp.Select_Category_From_DD('"BAKERY / Other Bakery / BAKERY / ""PIES - PLU 9"""" & 10"""""""');
        ln.verifyHomepagetitle();
        hp.Verify_message_multi_selection(1);
        hp.Verify_message_multi_selection(2);
        hp.clear_Btn();
        ln.Verify_MSD();
        ln.Verify_MSU();
        
    })

    it.only("Brand filter test", ()=>{

        const ln=new Login();
        const hp=new HomePage();
        
        ln.verifyBrand();                   //verify Brand
        cy.timeMark('Loading Brand');
        hp.waitforselectall();                 
        cy.timeSince('Loading Brand');
        hp.Select_Brand_From_DD('!HOLA FRUTA!');
        ln.verifyHomepagetitle();
        hp.Verify_message_multi_selection(1);
        hp.Verify_message_multi_selection(2);
        hp.clear_Btn();
        ln.Verify_MSD();
        ln.Verify_MSU();

// double selection
        
        ln.verifyBrand();                   //verify Brand
        hp.waitforselectall();
        hp.Select_Brand_From_DD('!HOLA FRUTA!');
        hp.Select_Brand_From_DD('(SEED)');
        ln.verifyHomepagetitle();
        hp.Verify_message_multi_selection(1);
        hp.Verify_message_multi_selection(2);
        hp.clear_Btn();
        ln.Verify_MSD();
        ln.Verify_MSU();
        
    })

    // it("", ()=>{

    //     const ln=new Login();
    //     const hp=new HomePage();
        
    // })

    // it("", ()=>{

    //     const ln=new Login();
    //     const hp=new HomePage();
        
    // })

    // it("", ()=>{

    //     const ln=new Login();
    //     const hp=new HomePage();
        
    // })

    // it("", ()=>{

    //     const ln=new Login();
    //     const hp=new HomePage();
        
    // })







})



