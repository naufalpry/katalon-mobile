
/**
 * This class is generated automatically by Katalon Studio and should not be modified or deleted.
 */

import java.lang.String

import java.lang.Integer



def static "helper.Capabilities.startNewApp"(
    	String appsPath	
     , 	String urlAppium	
     , 	String UDID	
     , 	String deviceName	
     , 	String deviceVersion	
     , 	String appPackage	
     , 	String appActivity	) {
    (new helper.Capabilities()).startNewApp(
        	appsPath
         , 	urlAppium
         , 	UDID
         , 	deviceName
         , 	deviceVersion
         , 	appPackage
         , 	appActivity)
}


def static "helper.Capabilities.startExistingApp"(
    	String appiumURL	
     , 	String udid	
     , 	Integer systemPort	
     , 	String deviceName	
     , 	String deviceVersion	) {
    (new helper.Capabilities()).startExistingApp(
        	appiumURL
         , 	udid
         , 	systemPort
         , 	deviceName
         , 	deviceVersion)
}
