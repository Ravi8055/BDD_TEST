package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="feature",
				 glue={"stepDefination"},
				 plugin={"html:reports/cucumber-html-reports"}
				)
public class TestRunner 
{

}
