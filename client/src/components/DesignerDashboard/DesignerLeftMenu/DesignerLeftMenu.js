import Push from 'vue-burger-menu'

export default {
  Push,
  name: 'designer-left-menu',
  data() {
    return {
      isSideBarOpen: false
    };
  },
  methods: {
    push() {
      let width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      let box = document.querySelector('.app-content');
      let box_width = box.offsetWidth - parseInt(width);

      document.body.style.overflowX = 'hidden';

      this.$nextTick(function() {
        document.getElementById('sideNav').style.width = this.width
          ? this.width + 'px'
          : '300px';
      });

      if (this.$attrs.right) {
        document.querySelector(
          '.app-content'
        ).style.transform = `translate3d(-${width}, 0px, 0px )`;
      } else {
        document.querySelector(
          '.app-content'
        ).style.transform = `translate3d(${width}, 0px, 0px )`;
      }

      document.querySelector('.app-content').style.width = box_width + 'px';
      document.querySelector('.app-content').style.transition = 'all 0.5s ease 0s';
    },
    pull() {
      document.querySelector('.app-content').style.transition = 'all 0.5s ease 0s';
      document.querySelector('.app-content').style.transform = '';
      document.body.removeAttribute('style');

      document.getElementById('sideNav').style.width = '0px';

      let width = this.$attrs.width ? this.$attrs.width : '300';
      let box = document.querySelector('.app-content');
      let box_width = box.offsetWidth + parseInt(width);
      document.querySelector('.app-content').style.width = box_width + 'px';
    },
    toggleMenu(){
      //alert(this.isSideBarOpen);
      if(this.isSideBarOpen) {
        this.pull();
        this.isSideBarOpen = false;
      } else{
        this.push();
        this.isSideBarOpen = true;
      }
    }
  }
}
