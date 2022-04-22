const user = {
      user: 'Cristian Flores',
      username: '@elchicogamer117',
      bio: 'Gamer',
      age: 24,
      dataCreated: 'Junio 2011',
      following: "45",
      followers: 7,
      getUserNames: function(){ 
            return `User ${this.user} a.k.a ${this.username}`
      },
      get getFgAndFw2(){ 
            return `have ${this.followers} and follow ${this.following} users`
      }
}

console.log('Twitter:')
console.log(`${user.getUserNames()} ${user.getFgAndFw2}. Join us in ${user.dataCreated}`)