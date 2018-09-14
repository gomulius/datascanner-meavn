import Push from 'vue-burger-menu'

export default {
  Push,
  name: 'user-left-menu',
  data() {
    return {
      isSideBarOpen: false
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false
    },
    right: {
      type: Boolean,
      required: false
    },
    width: {
      type: [String],
      required: false,
      default: '300'
    },
    disableEsc: {
      type: Boolean,
      required: false
    },
    noOverlay: {
      type: Boolean,
      required: false
    },
    onStateChange: {
      type: Function,
      required: false
    },
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    openMenu() {
      this.$emit('openMenu');
      this.isSideBarOpen = true;

      if (!this.noOverlay) {
        document.body.className += 'bm-overlay';
      }
      if (this.right) {
        document.querySelector('.bm-menu').style.left = 'auto';
        document.querySelector('.bm-menu').style.right = '0px';
      }
      this.$nextTick(function() {
        document.getElementById('sideNav').style.width = this.width
          ? this.width + 'px'
          : '300px';
      });
    },

    closeMenu() {
      this.$emit('closeMenu');
      this.isSideBarOpen = false;
      document.body.className = document.body.className.replace(
        'bm-overlay',
        ''
      );
      document.getElementById('sideNav').style.width = '0px';
    },
    toggleMenu(){
      //alert(this.isSideBarOpen);
      if(this.isSideBarOpen) {
        this.closeMenu();
      } else{
        this.openMenu();
      }
    },
    closeMenuOnEsc(e) {
      e = e || window.event;
      if (e.key === 'Escape' || e.keyCode === 27) {
        document.getElementById('sideNav').style.width = '0px';
        document.body.style.backgroundColor = 'inherit';
        this.isSideBarOpen = false;
      }
    },
    documentClick(e) {
      let element = document.querySelector('.bm-burger-button');
      let target = e.target;
      if (element !== target && !element.contains(target)) {
        this.closeMenu();
      }
    }
  },

  mounted() {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeMenuOnEsc);
    }
    if (this.burgerIcon === false) {
      document.querySelector('.bm-burger-button').style.display = 'none';
    }
    if (this.crossIcon === false) {
      document.querySelector('.bm-cross-button').style.display = 'none';
    }
  },
  created: function() {
    document.addEventListener('click', this.documentClick);
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.closeMenuOnEsc);
    document.removeEventListener('click', this.documentClick);
  },
  watch: {
    isOpen: {
      deep: true,
      immediate: true,
      handler(oldValue) {
        if (oldValue) {
          this.openMenu();
        }
      }
    },
    right: {
      deep: true,
      immediate: true,
      handler(oldValue, newValue) {
        if (oldValue) {
          this.$nextTick(() => {
            document.querySelector('.bm-burger-button').style.left = 'auto';
            document.querySelector('.bm-burger-button').style.right = '36px';
            document.querySelector('.bm-menu').style.left = 'auto';
            document.querySelector('.bm-menu').style.right = '0px';
          });
        }
        if (newValue) {
          if (
            document.querySelector('.bm-burger-button').hasAttribute('style')
          ) {
            document
              .querySelector('.bm-burger-button')
              .removeAttribute('style');
            document.getElementById('sideNav').style.right = 'auto';
          }
        }
      }
    }
  }
};
