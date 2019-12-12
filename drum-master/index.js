




    function playSound(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0 ;
    audio.play();
    // key.classList.add('playing');
        let drum = this.document.querySelector(`.drum[data-key = "${e.keyCode}"]`);
        drum.classList.add('active');
    }

    function removetransition(e){
  //  if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    this.classList.remove('active');
  
    }

    const keys =  this.document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend',removetransition));

    const drums = document.querySelectorAll('.drum');
    drums.forEach(drum => drum.addEventListener('transitionend', removetransition));
    window.addEventListener('keydown', playSound);



