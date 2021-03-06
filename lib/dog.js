class Dog {
  constructor(ctx, dog1){
    this.ctx = ctx;
    this.picture = dog1;
    this.jumping = false;
    this.descending = false;
    this.xalign = 29;
    this.yalign = 69;
    this.jumpListener = this.jumpListener.bind(this);
    this.jumpListener();
  }

  draw(ctx) {
    // dog 1-3 is walking positions
    let dog1 = new Image();
    dog1.src ='./assets/images/ML.png';
    let dog2 = new Image();
    dog2.src ='./assets/images/ML.png';
    let dog3 = new Image();
    dog3.src ='./assets/images/ML.png';
    // jumping
    let dog4 = new Image();
    dog4.src ='./assets/images/ML.png';

    if (this.picture.src === dog1.src) {
      this.picture = dog2;
    } else if (this.picture.src === dog2.src) {
      this.picture = dog3;
    } else if (this.jumping === true || this.descending === true) {
      this.picture = dog4;
    } else {
      this.picture = dog1;
    }

    if (this.jumping === true && this.yalign > 34) {
      this.yalign -= 5;
    // } else if (this.jumping === true && this.yalign > 39 ) {
    //   this.yalign -= 1;
    } else if (this.jumping === true && this.yalign === 34 ) {
      this.jumping = false;
      this.descending = true;
    // } else if (this.descending === true && this.yalign < 39) {
    //   this.yalign += 1;
  } else if (this.descending === true && this.yalign < 69) {
      this.yalign += 5;
    } else if (this.descending === true && this.yalign === 69) {
      this.descending = false;
    }
    this.jumpListener();


    // source, x-align, y-align, x-width, y-height
    this.ctx.drawImage(this.picture, this.xalign, this.yalign, 12, 18);

  }

  clearDog () {
    window.clearRect(0,0,224,98);
  }


  toggleJump() {
    if (this.jumping === false && this.descending === false) {
      this.jumping = true;
    }
  }

  jumpListener() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        this.toggleJump(); }
      });
      window.addEventListener('touchstart', (e) => {
        this.toggleJump();
      });
    }



}
