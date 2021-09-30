def builderImage
def imageName = "wsaefulloh/blanja_backend"

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

        stage('Build Image') {
            steps {
                script{
                    builderImage = docker.build("${imageName}")
                }
            }
        }

        stage('Test Image') {
            steps {
                script{
                    builderImage.inside {
                        sh "echo 'pass'"
                    }
                }
            }
        }

        stage('Push Image') {
            steps {
                script{
                    builderImage.push()
                }
            }
        }

        // stage('Deployment') {
        //     steps {
        //         script {
        //             sshPublisher(
        //                 publishers: [
        //                     sshPublisherDesc(
        //                         configName: 'prod',
        //                         verbose: false,
        //                         transfers: [
        //                             sshTransfer(
        //                                 execCommand: "cd /home/ubuntu/prod/back; docker-compose up -d",
        //                                 execTimeout: 120000,
        //                             )
        //                         ]
        //                     )
        //                 ]
        //             )
        //         }
        //     }
        }

        // stage('Deployment') {
        //     steps {
        //         sh "docker-compose up -d"
        //     }
        // }

    }
}