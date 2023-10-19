package helper

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject


import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import com.kms.katalon.core.appium.driver.AppiumDriverManager

import io.appium.java_client.AppiumDriver
import io.appium.java_client.android.AndroidDriver
import io.appium.java_client.remote.MobileCapabilityType

import org.openqa.selenium.remote.DesiredCapabilities
import com.kms.katalon.core.mobile.driver.MobileDriverType
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import io.appium.java_client.service.local.flags.GeneralServerFlag;


public class Capabilities {

	private AppiumDriverLocalService service;
	private AppiumServiceBuilder builder;

	@Keyword
	public static startNewApp(String appsPath, String urlAppium,String UDID,String deviceName,String deviceVersion,String appPackage, String appActivity) throws Exception {

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability(MobileCapabilityType.UDID, UDID);
		capabilities.setCapability("app", appsPath);
		capabilities.setCapability("remoteWebDriverType", "Appium");
		capabilities.setCapability("remoteMobileDriver", "ANDROID_DRIVER");
		capabilities.setCapability(MobileCapabilityType.TAKES_SCREENSHOT, true);
		capabilities.setCapability("deviceName", deviceName);
		capabilities.setCapability("appPackage", appPackage);
		capabilities.setCapability("appActivity", appActivity);
		capabilities.setCapability("name", "Regression");
		capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android")
		capabilities.setCapability("fullReset", true);
		capabilities.setCapability("newCommandTimeout"	, 240)
		capabilities.setCapability("androidInstallTimeout"	, 500000)
		capabilities.setCapability("autoGrantPermissions", true)
		capabilities.setCapability("automationName", "UiAutomator2")
		capabilities.setCapability("platformVersion", deviceVersion)


		AppiumDriverManager.createMobileDriver(MobileDriverType.ANDROID_DRIVER,capabilities,new URL(urlAppium));
	}
	@Keyword
	public static startExistingApp(String appiumURL,String udid, Integer systemPort,String deviceName,String deviceVersion)throws Exception{

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability(MobileCapabilityType.UDID, udid);
		capabilities.setCapability("remoteWebDriverType", "Appium");
		capabilities.setCapability("remoteMobileDriver", "ANDROID_DRIVER");
		capabilities.setCapability(MobileCapabilityType.TAKES_SCREENSHOT, true);
		capabilities.setCapability("deviceName", deviceName);
		capabilities.setCapability("fullreset", false);
		capabilities.setCapability("noReset",true);
		capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android")
		capabilities.setCapability("name", "Regression");
		capabilities.setCapability("newCommandTimeout"	, 60)
		capabilities.setCapability("systemPort", systemPort)
		capabilities.setCapability("automationName", "UiAutomator2")
		capabilities.setCapability("platformVersion", deviceVersion)


		AppiumDriverManager.createMobileDriver(
				MobileDriverType.ANDROID_DRIVER,
				capabilities,
				new URL(appiumURL)
				);
	}
}
