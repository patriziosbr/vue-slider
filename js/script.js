var app = new Vue(
    {
    el: "#root",
    data: {
       images: [
         "https://cdn.wallpapersafari.com/40/47/cHJbxN.jpg",
         "https://images5.alphacoders.com/594/594307.jpg",
         "https://images.alphacoders.com/265/265993.jpg",
         "https://cdn.hipwallpaper.com/i/52/2/oZbfun.jpg",
         "https://cdn.wallpapersafari.com/15/63/npAIt4.jpg"
        
       ],
       indexImg: 0
      },
      methods: {
        nextImg : function(){
          if(this.indexImg == this.images.length -1) {
            this.indexImg = 0  
          } else {
            this.indexImg++
          }
        },
        prevImg : function(){
          if(this.indexImg == 0){
            this.indexImg = this.images.length -1
          } else {
            this.indexImg--
        }
      }
    }
} 
);