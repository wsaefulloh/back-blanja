def namaVariabel = "asasasasa"

pipeline {
    agent any

    stages {
        stage('Installing package') {
            steps {
                nodejs("node14"){
                    sh 'npm install'
                }
            }
        }

        stage('Running Test') {
            steps {
                nodejs("node14"){
                    sh 'npm run test'
                }
            }
        }
    }
}