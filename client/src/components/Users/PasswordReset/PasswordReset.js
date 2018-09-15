export default {
  name: 'password-reset',
  components: {},
  props: [],
  data () {
    return {
      section_one_visible: true
      }
  },
  computed: {

  },
  mounted () {
    if(this.$route.query.hasOwnProperty('pass_res')){
      this.section_one_visible = false;
    } else{
      this.section_one_visible = true;
    }
  },
  methods: {
    switchSections(section){
      if(section == "1"){
        this.section_one_visible = true;
      } else{
        this.section_one_visible = false;
      }
    }
  }
}
