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
                    echo "building"
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
