// const TypeWriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }

// //type Method 
// TypeWriter.prototype.type = function() {
//     //Current Index of word
//     const current = this.wordIndex % this.words.length
//     // Get  Full Text of current  word
//     const fullTxt = this.words[current]

//     //Cheack if deleting
//     if(this.isDeleting) {
//         //Remove Char
//         this.txt = fullTxt.substring(0, this.txt.length - 1)

//     }else{
//         //Add Char
//         this.txt = fullTxt.substring(0, this.txt.length + 1)
//     }

//     //Insert Txt into Element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt} </span>`

//     //Initial Type  Speed
//     let typeSpeed = 300;

//     if(this.isDeleting) {
//         typeSpeed /= 2
//     }

//     // If word us complete

//     if(!this.isDeleting && this.txt === fullTxt) {
//         //Make  pause at end
//         typeSpeed = this.wait
//         //set delete to true
//         this.isDeleting = true
//     }else if(this.isDeleting && this.txt === ''){
//         this.isDeleting = false
//         //Move to next word
//         this.wordIndex++
//         //Pause before start typung
//         typeSpeed = 500
//     }
//     setTimeout(() => this.type(), 500)
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
            //Current Index of word
    const current = this.wordIndex % this.words.length
    // Get  Full Text of current  word
    const fullTxt = this.words[current]

    //Cheack if deleting
    if(this.isDeleting) {
        //Remove Char
        this.txt = fullTxt.substring(0, this.txt.length - 1)

    }else{
        //Add Char
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    //Insert Txt into Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt} </span>`

    //Initial Type  Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2
    }

    // If word us complete

    if(!this.isDeleting && this.txt === fullTxt) {
        //Make  pause at end
        typeSpeed = this.wait
        //set delete to true
        this.isDeleting = true
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false
        //Move to next word
        this.wordIndex++
        //Pause before start typung
        typeSpeed = 500
    }
    setTimeout(() => this.type(), 500)
    }
}

// Init On Dom Load
document.addEventListener('DOMContentLoaded', init)

//Init App

function init(){
  const txtElement = document.querySelector('.txt-type')
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait =  txtElement.getAttribute('data-wait')
  //Init  TypeWriter

  new TypeWriter(txtElement, words, wait);
}
