$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/feeder_aginta/Documents/SauceDemo/Sauce-Demo-Android/Include/features/Homepage Swaglabs/See all item using basic xpath.feature");
formatter.feature({
  "name": "Open Default App",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Open SwagLabs System App",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open default app",
  "keyword": "Given "
});
formatter.match({
  "location": "MystepDefinition.I_open_default_app()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Unable to create a new remote session. Please check the server log for more details. Original error: An unknown server-side error occurred while processing the command. Original error: Cannot start the \u0027com.swaglabsmobileapp\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Cannot start the \u0027com.swaglabsmobileapp\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Activity name \u0027.com.swaglabsmobileapp.SplashActivity\u0027 used to start the app doesn\u0027t exist or cannot be launched! Make sure it exists and is a launchable activity\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027feeders-mbp\u0027, ip: \u0027fe80:0:0:0:456:7b0c:51a:9245%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: driver.version: AppiumDriverManager$createMobileDriver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Cannot start the \u0027com.swaglabsmobileapp\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Cannot start the \u0027com.swaglabsmobileapp\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Activity name \u0027.com.swaglabsmobileapp.SplashActivity\u0027 used to start the app doesn\u0027t exist or cannot be launched! Make sure it exists and is a launchable activity\n    at getResponseForW3CError (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-base-driver/lib/protocol/errors.js:804:9)\n    at asyncHandler (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-base-driver/lib/protocol/protocol.js:380:37)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027feeders-mbp\u0027, ip: \u0027fe80:0:0:0:456:7b0c:51a:9245%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: driver.version: AppiumDriverManager$createMobileDriver\n\tat io.appium.java_client.remote.AppiumCommandExecutor$1.createSession(AppiumCommandExecutor.java:208)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.createSession(AppiumCommandExecutor.java:217)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:38)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:84)\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:85)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.\u003cinit\u003e(SwipeableAndroidDriver.java:24)\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.createMobileDriver(AppiumDriverManager.java:503)\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager$createMobileDriver.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:144)\n\tat helper.Capabilities.startNewApp(Capabilities.groovy:62)\n\tat helper.Capabilities$startNewApp.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat swaglabs.MystepDefinition.I_open_default_app(MystepDefinition.groovy:55)\n\tat ✽.I open default app(/Users/feeder_aginta/Documents/SauceDemo/Sauce-Demo-Android/Include/features/Homepage Swaglabs/See all item using basic xpath.feature:3)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.appium.java_client.remote.AppiumCommandExecutor$1.createSession(AppiumCommandExecutor.java:186)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.createSession(AppiumCommandExecutor.java:217)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:38)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:84)\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:85)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.\u003cinit\u003e(SwipeableAndroidDriver.java:24)\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager.createMobileDriver(AppiumDriverManager.java:503)\n\tat com.kms.katalon.core.appium.driver.AppiumDriverManager$createMobileDriver.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:144)\n\tat helper.Capabilities.startNewApp(Capabilities.groovy:62)\n\tat helper.Capabilities$startNewApp.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat swaglabs.MystepDefinition.I_open_default_app(MystepDefinition.groovy:55)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\n\tat cucumber.api.cli.Main.run(Main.java:35)\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:136)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:264)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\n\tat groovy.lang.Closure.call(Closure.java:420)\n\tat groovy.lang.Closure.call(Closure.java:414)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:152)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:55)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:197)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:217)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:128)\n\tat Script1697578597299.run(Script1697578597299.groovy:21)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:144)\n\tat TempTestSuite1697668200465.run(TempTestSuite1697668200465.groovy:36)\n\tat groovy.lang.GroovyShell.runScriptOrMainOrTestOrRunnable(GroovyShell.java:263)\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:507)\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:496)\n\tat groovy.ui.GroovyMain.processOnce(GroovyMain.java:597)\n\tat groovy.ui.GroovyMain.run(GroovyMain.java:329)\n\tat groovy.ui.GroovyMain.process(GroovyMain.java:315)\n\tat groovy.ui.GroovyMain.processArgs(GroovyMain.java:134)\n\tat groovy.ui.GroovyMain.main(GroovyMain.java:114)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.tools.GroovyStarter.rootLoader(GroovyStarter.java:116)\n\tat org.codehaus.groovy.tools.GroovyStarter.main(GroovyStarter.java:138)\nCaused by: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Cannot start the \u0027com.swaglabsmobileapp\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Cannot start the \u0027com.swaglabsmobileapp\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Activity name \u0027.com.swaglabsmobileapp.SplashActivity\u0027 used to start the app doesn\u0027t exist or cannot be launched! Make sure it exists and is a launchable activity\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027feeders-mbp\u0027, ip: \u0027fe80:0:0:0:456:7b0c:51a:9245%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: driver.version: AppiumDriverManager$createMobileDriver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Cannot start the \u0027com.swaglabsmobileapp\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Cannot start the \u0027com.swaglabsmobileapp\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Activity name \u0027.com.swaglabsmobileapp.SplashActivity\u0027 used to start the app doesn\u0027t exist or cannot be launched! Make sure it exists and is a launchable activity\n    at getResponseForW3CError (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-base-driver/lib/protocol/errors.js:804:9)\n    at asyncHandler (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-base-driver/lib/protocol/protocol.js:380:37)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\t... 108 more\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Open SwagLabs App to login App",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I should see \u0027Login/android.widget.EditText - Username\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: No driver found\n\tat com.kms.katalon.core.mobile.helper.MobileScreenCaptor.getAnyAppiumDriver(MobileScreenCaptor.java:82)\n\tat com.kms.katalon.core.mobile.helper.MobileScreenCaptor.take(MobileScreenCaptor.java:49)\n\tat com.kms.katalon.core.helper.screenshot.ScreenCaptor.takeScreenshotAndGetAttributes(ScreenCaptor.java:37)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:136)\n\tat swaglabs.MystepDefinition.I_should_see(MystepDefinition.groovy:70)\n\tat ✽.I should see \u0027Login/android.widget.EditText - Username\u0027(/Users/feeder_aginta/Documents/SauceDemo/Sauce-Demo-Android/Include/features/Homepage Swaglabs/See all item using basic xpath.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "I type \u0027standard_user\u0027 on \u0027Login/android.widget.EditText - Username\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "MystepDefinition.I_type_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 1 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_wait_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \u0027Login/android.widget.EditText - Password\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type \u0027secret_sauce\u0027 on \u0027Login/android.widget.EditText - Password\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_type_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 1 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_wait_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \u0027Login/android.view.ViewGroup - LoginBtn\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \u0027Login/android.view.ViewGroup - LoginBtn\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_wait_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Open Product using basic xpath",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I should see \u0027Items/android.widget.TextView - Product\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: No driver found\n\tat com.kms.katalon.core.mobile.helper.MobileScreenCaptor.getAnyAppiumDriver(MobileScreenCaptor.java:82)\n\tat com.kms.katalon.core.mobile.helper.MobileScreenCaptor.take(MobileScreenCaptor.java:49)\n\tat com.kms.katalon.core.helper.screenshot.ScreenCaptor.takeScreenshotAndGetAttributes(ScreenCaptor.java:37)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat swaglabs.MystepDefinition.I_should_see(MystepDefinition.groovy:70)\n\tat ✽.I should see \u0027Items/android.widget.TextView - Product\u0027(/Users/feeder_aginta/Documents/SauceDemo/Sauce-Demo-Android/Include/features/Homepage Swaglabs/See all item using basic xpath.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click \u0027Items/android.widget.TextView - Product\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 1 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_wait_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \u0027android.widget.ViewGroup - Back To Product\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \u0027android.widget.ViewGroup - Back To Product\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 1 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_wait_for(String)"
});
formatter.result({
  "status": "skipped"
});
});