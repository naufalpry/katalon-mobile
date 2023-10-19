$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/feeder_aginta/Documents/SauceDemo/Sauce-Demo-Android/Include/features/Homepage Swaglabs/See product and back product using descant xpath.feature");
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "I type \u0027standard_user\u0027 on \u0027Login/android.widget.EditText - Username\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "MystepDefinition.I_type_on(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 1 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_wait_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \u0027Login/android.widget.EditText - Password\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \u0027secret_sauce\u0027 on \u0027Login/android.widget.EditText - Password\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_type_on(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 1 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_wait_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \u0027Login/android.view.ViewGroup - LoginBtn\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Login/android.view.ViewGroup - LoginBtn\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_wait_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pick One Product using contains xpath",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I should see \u0027android.view.ViewGroup - View product vertical\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to check for element visible (Root cause: java.lang.IllegalArgumentException: Object is null\n\tat com.kms.katalon.core.helper.KeywordHelper.checkTestObjectParameter(KeywordHelper.java:33)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:70)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat swaglabs.MystepDefinition.I_should_see(MystepDefinition.groovy:70)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\n\tat cucumber.api.cli.Main.run(Main.java:35)\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\n\tat TC see product and back product using descant xpath.run(TC see product and back product using descant xpath:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1697668935537.run(TempTestSuite1697668935537.groovy:36)\n)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat swaglabs.MystepDefinition.I_should_see(MystepDefinition.groovy:70)\n\tat ✽.I should see \u0027android.view.ViewGroup - View product vertical\u0027(/Users/feeder_aginta/Documents/SauceDemo/Sauce-Demo-Android/Include/features/Homepage Swaglabs/See product and back product using descant xpath.feature:17)\nCaused by: java.lang.IllegalArgumentException: Object is null\n\tat com.kms.katalon.core.helper.KeywordHelper.checkTestObjectParameter(KeywordHelper.java:33)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:70)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat swaglabs.MystepDefinition.I_should_see(MystepDefinition.groovy:70)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\n\tat cucumber.api.cli.Main.run(Main.java:35)\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\n\tat TC see product and back product using descant xpath.run(TC see product and back product using descant xpath:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1697668935537.run(TempTestSuite1697668935537.groovy:36)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click \u0027android.view.ViewGroup - View product vertical\u0027",
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
formatter.step({
  "name": "I should see \u0027android.view.ViewGroup - Item Descendant\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \u0027android.view.ViewGroup - Item Descendant\u0027",
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
formatter.scenario({
  "name": "Logout App",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I should see \u0027Items/android.view.ViewGroup - BurgerBtn\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Element \u0027Object Repository/Items/android.view.ViewGroup - BurgerBtn\u0027 not found\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:82)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible.call(Unknown Source)\n\tat swaglabs.MystepDefinition.I_should_see(MystepDefinition.groovy:70)\n\tat ✽.I should see \u0027Items/android.view.ViewGroup - BurgerBtn\u0027(/Users/feeder_aginta/Documents/SauceDemo/Sauce-Demo-Android/Include/features/Homepage Swaglabs/See product and back product using descant xpath.feature:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click \u0027Items/android.view.ViewGroup - BurgerBtn\u0027",
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
  "name": "I should see \u0027Logout/android.view.ViewGroup - LogoutBtn\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "MystepDefinition.I_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \u0027Logout/android.view.ViewGroup - LogoutBtn\u0027",
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
});