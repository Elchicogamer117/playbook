const pullRequest = {
      title: "Agregue mi blog",
      branchName: "Main",
      repositoryNameAssociated: "myBlog-LaunchX",
      status: "Open",
      author: "elchicogamer117",
      getStatus: function(){
            return `Status: ${this.status}` 
      },
      getTitleAndAuthor: function(){
            return `Title: ${this.title} | Author: ${this.author}` 
      }
}

console.log("Nombre y autor del Pull requests:" + pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())