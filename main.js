// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }
//
// //type method
// TypeWriter.prototype.type = function() {
//   //index of word
//   const current = this.wordIndex % this.words.length;
//
//   //full text of word
//   const fullTxt = this.words[current];
//
//   //check deletion state
//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }
//
//   //typewriter effect
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
//
//   //type speed
//   let typeSpeed = 300;
//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }
//
//   if (!this.isDeleting && this.txt === fullTxt) {
//     //pause at end of word
//     typeSpeed = this.wait;
//     this.isDeleting = true;
//   } else if(this.isDeleting && this.txt === '') {
//     //fully deleted
//     this.isDeleting = false;
//     //next word
//     this.wordIndex++;
//
//     typeSpeed = 500;
//   }
//
//   setTimeout(() => this.type(), typeSpeed);
// }
//ES6 class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //index of word
    const current = this.wordIndex % this.words.length;

    //full text of word
    const fullTxt = this.words[current];

    //check deletion state
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //typewriter effect
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //type speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      //pause at end of word
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      //fully deleted
      this.isDeleting = false;
      //next word
      this.wordIndex++;

      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//init on dom load
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, wait);
}
