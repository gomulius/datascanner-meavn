import Header from '../Header/index.vue'
import DesignerLeftMenu from './DesignerLeftMenu/index.vue'
import DesignerWorkingArea from './DesignerWorkingArea/index.vue'

export default {
  name: 'designer-dashboard',
  components: {
    'app-header': Header,
    'app-designerleftmenu':  DesignerLeftMenu,
    'app-designerworkingarea': DesignerWorkingArea
  },
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
