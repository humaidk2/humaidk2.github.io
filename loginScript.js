

function loadGallery() {
  class ShapeOverlays {
    constructor(elm) {
      this.elm = elm;
      this.path = elm.querySelectorAll('path');
      this.numPoints = 85;
      this.duration = 500;
      this.delayPointsArray = [];
      this.delayPointsMax = 300;
      this.delayPerPath = 150;
      this.timeStart = Date.now();
      this.isOpened = false;
      this.isAnimating = false;
    }
    toggle() {
      this.isAnimating = true;
      for (var i = 0; i < this.numPoints; i++) {
        this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
      }
      this.close();
    }
    open() {
      this.isOpened = true;
      this.elm.classList.add('is-opened');
      this.timeStart = Date.now();
      this.renderLoop();
    }
    close() {
      this.isOpened = false;
      this.elm.classList.remove('is-opened');
      this.timeStart = Date.now();
      this.renderLoop();
    }
    updatePath(time) {
      const points = [];
      for (var i = 0; i < this.numPoints; i++) {
        points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
      }

      let str = '';
      str += (this.isOpened) ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
      for (var i = 0; i < this.numPoints - 1; i++) {
        const p = (i + 1) / (this.numPoints - 1) * 100;
        const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
        str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p} `;
      }
      str += (this.isOpened) ? `H 100 V 0` : `H 0 V 0`;
      return str;
    }
    render() {
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
        }
      }
    }
    renderLoop() {
      this.render();
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(() => {
          this.renderLoop();
        });
      }
      else {
        this.isAnimating = false;
      }
    }
  }
var elmOverlay = document.querySelector('.shape-overlays');
var overlay = new ShapeOverlays(elmOverlay);

function clickSvg() {
  overlay.toggle();
}
  var photos = document.querySelectorAll(".gallery-picture");
  for(var i = 0;i< photos.length;i++) {
    photos[i].myVar = (Math.floor(Math.random()*120) - 60);
    photos[i].style = "transform:rotate(" + photos[i].myVar + "deg);";
    photos[i].addEventListener("mouseover", function() {
      var s = "";
      s += "transform: rotate(0deg);";
      s += "transform: scale(2.5);";
      s += "z-index: 5;";
      this.style = s;
    }, false);
    photos[i].addEventListener("mouseout", function() {
      var s = "";
      s += "transform:rotate(" + this.myVar + "deg);";
      s += "z-index: 1;";
      this.style = s;
    }, false); 
    var img = photos[i].children[0];
       // Get the modal
    var modal = document.getElementById('myModal');
      // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    //var captionText = document.getElementById("caption");
    img.onclick = function(){
      var photos = document.getElementById("gallery-pictures");
      var next, prev;

      for(var i = 0;i < photos.children.length;i++){
        console.log(this.src, photos.children[i].children[0].src);
        if(this.src === photos.children[i].children[0].src) {
          next = photos.children[i + 1].children[0];
          prev = photos.children[i - 1].children[0]
        }
      }
      modal.style.display = "flex";
      modalImg.src = this.src;
      //captionText.innerHTML = this.alt;
      var nextKey = document.getElementById("gallery-next-image");
      var prevKey = document.getElementById("gallery-prev-image");
      nextKey.src = next.src;
      prevKey.src = prev.src; 
      nextKey.onclick = function() {
        overlay.toggle();
        var photos = document.getElementById("gallery-pictures");
        var next, prev;
        var modalContent = document.getElementById("img01");
        for(var i = 0;i < photos.children.length;i++){
          console.log(this.src, photos.children[i].children[0].src);
          if(this.src === photos.children[i].children[0].src) {
            next = photos.children[i + 1].children[0];
            prev = photos.children[i - 1].children[0]
          }
        }
        //var nextKey = document.getElementById("gallery-next-image");
        var prevKey = document.getElementById("gallery-prev-image");
        modalContent.src = this.src;
        this.src = next.src;
        prevKey.src = prev.src;
      } 
      prevKey.onclick = function() {
        overlay.toggle();
        var photos = document.getElementById("gallery-pictures");
        var next, prev;
        var modalContent = document.getElementById("img01");
        for(var i = 0;i < photos.children.length;i++){
          console.log(this.src, photos.children[i].children[0].src);
          if(this.src === photos.children[i].children[0].src) {
            next = photos.children[i + 1].children[0];
            prev = photos.children[i - 1].children[0]
          }
        }
        var nextKey = document.getElementById("gallery-next-image");
        //var prevKey = document.getElementById("gallery-prev-image");
        modalContent.src = this.src;
        nextKey.src = next.src;
        this.src = prev.src;
      }
    }
  }


  

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
      modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}