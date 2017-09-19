/**
* 
*/
package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
* @author Prakat-L-051
*
*/
public class LoginStepDefinition {

WebDriver driver;
String expectedTitle = "Dashboard - Stage Test - Active RP - Catalyst Insight - Catalyst Insight";
String actualTitle = "";
String projetPath=System.getProperty("user.dir");

@Given("^Open firefox and start application$")
public void Open_firefox_and_start_application() throws Throwable {
System.setProperty("webdriver.gecko.driver",projetPath+"\\FirefoxDriver\\geckodriver.exe");
driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.get("https://preview.catalystapps.com/insight");
//Thread.sleep(5000);
driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);

}

@When("^User enters valid UserName and Password$")
public void User_enters_valid_UserName_and_Password() throws Throwable {
driver.findElement(By.xpath("//input[@id='username']")).sendKeys("vanitha");
driver.findElement(By.id("password")).sendKeys("Welcome@17");
}

@When("^User should be able to login$")
public void User_should_be_able_to_login() throws Throwable {
driver.findElement(By.id("btn_loginDialog-login")).click();
driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
driver.findElement(By.id("btn_Agreement-accept")).click();
}

@Then("^It should display Dashboard$")
public void It_should_display_Dashboard() throws Throwable {
Thread.sleep(10000);
//driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
actualTitle = driver.getTitle();
System.out.println(actualTitle);
if (actualTitle.contains(expectedTitle)){
System.out.println("Login successful!");
} else {
System.out.println("Login Failed");
} 
}

@Then("^User LogOut from the Application$")
public void User_LogOut_from_the_Application() throws Throwable {
driver.findElement(By.id("logout")).click();
}
}