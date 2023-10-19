package swaglabs
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import helper.Capabilities as StartApps



class MystepDefinition {

	String textInput
	String textValue

	@Given("I open default app")
	def I_open_default_app() {
		StartApps.startNewApp(
				GlobalVariable.appsPath,
				GlobalVariable.urlAppium,
				GlobalVariable.UDID,
				GlobalVariable.deviceName,
				GlobalVariable.deviceVersion,
				GlobalVariable.appPackage,
				GlobalVariable.appActivity
				)
		Mobile.delay(5)
	}

	@When("I should see '(.*)'")
	def I_should_see(String elme) {
		Mobile.delay(1)
		Mobile.verifyElementVisible(findTestObject('Object Repository/'+elme), 3)
		Mobile.waitForElementPresent(findTestObject('Object Repository/'+elme), 3)
	}

	@When("I click '(.*)'")
	def I_click(String elme) {
		Mobile.verifyElementVisible(findTestObject('Object Repository/'+elme), 3)
		Mobile.tap(findTestObject('Object Repository/'+elme), 3)
	}

	@When("I wait for (.*) seconds")
	def I_wait_for(String secondsStr) {
		int seconds = secondsStr.toInteger()
		Mobile.delay(seconds)
	}

	@When("I type '(.*)' on '(.*)'")
	def I_type_on(String txt, String elme) {
		if (txt.indexOf("{randomValue}")>=0){
			txt = txt.replace("{randomValue}", this.textInput)
		}
		if (txt.indexOf("{textValue}")>=0){
			txt = txt.replace("{textValue}", this.textValue)
		}
		Mobile.verifyElementVisible(findTestObject('Object Repository/'+elme), 3)
		Mobile.clearText(findTestObject('Object Repository/'+elme), 3)
		Mobile.setText(findTestObject('Object Repository/'+elme), txt, 3)
	}
}