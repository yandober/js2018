var pictures
var request = new XMLHttpRequest ()
request.open ("GET", "sample.json")
request.onload = function (event) {

  if (this.status ===200) {
    pictures = JSON.parse (this.responseText)
    for (var url of pictures){
      var image = document.createElement ("img")
      document.body.appendChild (image)
      image.src = url
      image.height = 100
    }
  }
    
} 
request.send ()
