package com.automation.cucumber.pages;

import com.automation.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAddressTextField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordTextField;

    @CacheLookup
    @FindBy(xpath = "//div[@class='form_content clearfix']//p[@class='submit']//i")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitCreate']//i[@class='icon-user left']")
    WebElement createAnAccountButton;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement verifyAuthentication;

    @CacheLookup
    @FindBy(id = "email_create")
    WebElement createNewEmail;

    @CacheLookup
    @FindBy(xpath = "//ol//li")
    WebElement verifyAuthenticationFailedMessage;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement verifyLogOutLink;


    public void signInWithUserNameAndPassword(String userName, String password) {
        sendTextToElement(emailAddressTextField, userName);
        sendTextToElement(passwordTextField, password);
        clickOnElement(signInButton);
log.info("Sign in by entering username  ' " + userName + " ' password ' " + password + " ' and click on sign in button" + signInButton.toString() + "<br>");
    }

    public void clickOnCreateAnAccount(String userName) {
        sendTextToElement(createNewEmail, userName);
        clickOnElement(createAnAccountButton);
        log.info(" enter a new email ' " + userName + " ' and click on create an account button " + createAnAccountButton.toString() + "<br>");
    }
    public String verifyAuthenticationText() {
        log.info("verify Authentication text " + verifyAuthentication.toString()+ "<br>" );
        return getTextFromElement(verifyAuthentication);
    }

    public String getVerifyAuthenticationFailedMessage() {
        log.info("get error messages to verify authentication" + verifyAuthenticationFailedMessage.toString()+"<br>" );
        return getTextFromElement(verifyAuthenticationFailedMessage);
    }

    public String verifyLogOutLink() {
        log.info("verify logout link " + verifyLogOutLink.toString() + "<br>");
        return getTextFromElement(verifyLogOutLink);
    }

    public void clickOnSignOut() {
        log.info("click on sign out " + verifyLogOutLink.toString() + "<br>");
        clickOnElement(verifyLogOutLink);
    }

}
