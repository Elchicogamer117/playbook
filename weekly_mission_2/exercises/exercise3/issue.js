export default class Issues{
      constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
            this.name   = name || "LaunchX"
            this.author = author || "carlogilmar"
            this.language = language|| "JavaScript"
            this.numberOfCommits = numberOfCommits || 100
            this.stars  = stars || 199
            this.forks  = forks || 299
            this.issues_open  = issues_open  || 10
            this.issues_close = issues_close || 10
      }
      
      getTotalIssues(){
            return this.issues_open + this.issues_close
      }
      getGeneralInfo(){
            return `This repository ${this.name} was created by ${this.author}`
      }
}
