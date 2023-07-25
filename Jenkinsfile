pipeline {
    agent any

    stages {
        stage("init") {
            steps {
                echo "Initiating"
            }
        }
        stage("build") {
            steps {
                script{
                    sh "npm install"
                }
            }
        }
        stage("test") {
            steps {
                 echo "testing"
            }
        }
        stage("deploy") {
            steps {
                echo "deploying"
            }
        }
    }
}
