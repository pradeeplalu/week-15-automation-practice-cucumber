package com.automation.cucumber.pages;

import com.automation.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']//li//a[contains(text(),'Women')]")
    WebElement womenLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;


    public void clickOnWomenLink() {
        log.info("clicking on Women link" + womenLink.toString()+"<br>");
        clickOnElement(womenLink);
    }

    public void clickOnSignInLink() {
        log.info("clicking on SignIn link" + signInLink.toString()+"<br>");
        clickOnElement(signInLink);
    }

    public String signInLinkVerify() {
        log.info("clicking on Sign in Link " + signInLink.toString()+"<br>");
        return getTextFromElement(signInLink);
    }


}
