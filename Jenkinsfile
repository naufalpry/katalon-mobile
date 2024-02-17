pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/naufalpry/katalon-mobile.git'
            }
        }

        stage('Build') {
            steps {
                // Build your project if necessary
                // For example: mvn clean package
            }
        }

        stage('Run Katalon Tests') {
            steps {
                // Download and install Katalon Studio
                // Depending on your setup, you might need to install it on your Jenkins agent
                // For example, download the zip file, extract, and set environment variables

                // Execute Katalon command to run your mobile tests
                sh './katalon -noSplash -runMode=console -projectPath="path/to/your/project.prj" -testSuitePath="Test Suites/YourTestSuite" -executionProfile="default" -browserType="Mobile" -deviceId="YourDeviceID" -retry=0 -apiKey="YourAPIKey"'
            }
        }
    }

    post {
        always {
            // Clean up if necessary
        }
    }
}
