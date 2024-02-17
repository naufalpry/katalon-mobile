package internal

import com.kms.katalon.core.configuration.RunConfiguration
import com.kms.katalon.core.main.TestCaseMain


/**
 * This class is generated automatically by Katalon Studio and should not be modified or deleted.
 */
public class GlobalVariable {
     
    /**
     * <p></p>
     */
    public static Object appsPath
     
    /**
     * <p></p>
     */
    public static Object urlAppium
     
    /**
     * <p></p>
     */
    public static Object UDID
     
    /**
     * <p></p>
     */
    public static Object deviceName
     
    /**
     * <p></p>
     */
    public static Object deviceVersion
     
    /**
     * <p></p>
     */
    public static Object appPackage
     
    /**
     * <p></p>
     */
    public static Object G_Timeout_Short
     
    /**
     * <p></p>
     */
    public static Object appActivity
     

    static {
        try {
            def selectedVariables = TestCaseMain.getGlobalVariables("default")
			selectedVariables += TestCaseMain.getGlobalVariables(RunConfiguration.getExecutionProfile())
            selectedVariables += TestCaseMain.getParsedValues(RunConfiguration.getOverridingParameters(), selectedVariables)
    
            appsPath = selectedVariables['appsPath']
            urlAppium = selectedVariables['urlAppium']
            UDID = selectedVariables['UDID']
            deviceName = selectedVariables['deviceName']
            deviceVersion = selectedVariables['deviceVersion']
            appPackage = selectedVariables['appPackage']
            G_Timeout_Short = selectedVariables['G_Timeout_Short']
            appActivity = selectedVariables['appActivity']
            
        } catch (Exception e) {
            TestCaseMain.logGlobalVariableError(e)
        }
    }
}
