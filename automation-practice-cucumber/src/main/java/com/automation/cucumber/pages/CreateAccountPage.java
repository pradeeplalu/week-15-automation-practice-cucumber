package com.automation.cucumber.pages;

import com.automation.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(id = "customer_firstname")
    WebElement enterFirstName;

    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement enterLastName;

    @CacheLookup
    @FindBy(id = "passwd")
    WebElement enterPassword;

    @CacheLookup
    @FindBy(id = "address1")
    WebElement enterAddressLine1;

    @CacheLookup
    @FindBy(id = "city")
    WebElement enterCity;

    @CacheLookup
    @FindBy(id = "id_state")
    WebElement selectState;

    @CacheLookup
    @FindBy(id = "postcode")
    WebElement enterPostcode;

    @CacheLookup
    @FindBy(id = "id_country")
    WebElement selectCountry;

    @CacheLookup
    @FindBy(id = "phone_mobile")
    WebElement enterMobilePhone;

    @CacheLookup
    @FindBy(id = "alias")
    WebElement enterAddressAlias;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[4]/button[1]/span[1]")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//span[@class='navigation_page']")
    WebElement verifyMyAccount;

    public void fillPersonalInformationForm(String firstName, String lastName, String password) {
        sendTextToElement(enterFirstName, firstName);
        sendTextToElement(enterLastName, lastName);
        sendTextToElement(enterPassword, password);
        log.info("fill up personal information form by entering firstname ' " + firstName + " ' lastname '" + lastName + " ' password ' "+ password+" '" + "<br>");
    }

    public void fillYourAddressDetails(String addLn1,String city,String state,String zipCd,String country,String mobileNb, String addAlias) {

        sendTextToElement(enterAddressLine1, addLn1);
        sendTextToElement(enterCity,city);
        selectByVisibleTextFromDropDown(selectState,state);
        sendTextToElement(enterPostcode,zipCd);
        selectByVisibleTextFromDropDown(selectCountry,country);
        sendTextToElement(enterMobilePhone,mobileNb);
        sendTextToElement(enterAddressAlias,addAlias);
        clickOnElement(registerButton);
        log.info("fill address details by entering address ' "+ addLn1 + "' city ' "+city + "' state ' " +state+ " ' zipCode ' " + zipCd+ " ' "+country+ " ' mobile no. "+mobileNb+ " ' addAlias ' "+addAlias+" ' " );
    }

    public String verifyMyAccountText(){
        log.info("verify My account text " + verifyMyAccount.toString() + "<br>");
        return getTextFromElement(verifyMyAccount);
    }


}
