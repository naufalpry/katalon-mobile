@Library('shared-library-qa-dev')_
def urlAppium = ""

pipeline {
    parameters {
        string(name: 'udid',     description: 'Input UDID dari Device Farm', defaultValue: 'R9CR1032XX’X)
        string(name: 'agent',     description: 'Input from testops', defaultValue: 'docker-qa')
        string(name: 'appium_url',     description: 'Link appium default', defaultValue: 'http://36.880.170.0’)
        string(name: 'agent_appium',     description: 'Input from testops', defaultValue: 'agent-appium-pub')
        string(name: 'collection_name', description: 'Test Collection Suites', defaultValue: 'TSC-Common')
        string(name: 'report_name',     description: 'report name ex: NAME_DATETIME_NUMBER (unique name required)',                 defaultValue: 'Automation Legion Android')
        string(name: 'created_by',      description: 'PIC Run',                                             	defaultValue: 'QA')
        string(name: 'env',             description: 'env run automation, please input staging or develop', 	defaultValue: 'develop')
        string(name: 'project_detail',  description: 'Contact PIC pipeline& Report for yout project detail',    defaultValue: '100')
        string(name: 'token',           description: 'token API Teleram',                                   	defaultValue: ‘${telegram_api_key}’)
        string(name: 'chat_id',        	description: 'ID Chat Room',                                        	defaultValue: ‘$’{value_id_chat_room})
        string(name: 'header',          description: 'Header',                                        			defaultValue: 'REPORT ANDROID AUTOMATION')
        string(name: 'link_apps',       description: 'link from nexus',                                         defaultValue: 'https://nexus-dev.saucelabs.com/repository/legion/dev/v2/1.0/v2-1.0.apk')
        string(name: 'api_key',         description: 'Api_key',                                             	defaultValue: ‘${value_api_key_server}’)
        string(name: 'version',         description: 'Version',                                             	defaultValue: '6.3.3')
        string(name: 'channel',         description: 'Channel',                                             	defaultValue: 'telegram')
    }

    agent none
    
    // triggers {
    //        cron(env.BRANCH_NAME == 'develop' ? '0 3 * * *' : '')
    //    }
    
    options {
        skipDefaultCheckout()
    }
    stages {
        stage ( 'Kill Old Build' ) {
            agent {
                node {
                    label params.agent
                }
            }
            steps {
                script {
                    cleanWs()
                    deleteDir()
                    echo 'Kill Old Build'
                }   
            }   
        }
        stage('Checkout SCM') {
            agent {
                node {
                    label params.agent
                }
            }
            steps {
                cleanWs()
                checkout scm
                script {
                    echo 'get COMMIT_ID'
                    sh 'echo -n $(git rev-parse --short HEAD) > ./commit-id'
                    commitId = readFile('./commit-id')
                }
                stash(name: 'ws', includes:'**,./commit-id')
            }
        }
        stage('Setup Environtment') {
            agent { label "agent-appium-pub" }
            steps {
                script {
                    urlAppium = androidKatalonTest.setupEnvironment()
                }
            }
        }
        stage('Running Test with Katalon') {
            agent {
                node {
                    label params.agent
                }
            }
            steps {
                unstash 'ws'
                echo 'Run Docker to test Mobile using katalon'
                script {
                    androidKatalonTest.runTestAndroid()
                    sh 'exit 0'
                }
            }
        }
    }
    post {
        always {
        		node("${params.agent}"){
        			script{
        			    androidKatalonTest.reporting()
        			}
        		}
                node("${params.agent_appium}"){
                script {
                    androidKatalonTest.cleaningEnvironment()
                    androidKatalonTest.sendNotification()
                }
            }
        }   
    }
}
