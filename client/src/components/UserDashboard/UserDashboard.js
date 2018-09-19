import AppHeader from '../Header/index.vue'
import UserLeftMenu from './UserLeftMenu/index.vue'
import UserWorkingArea from './UserWorkingArea/index.vue'

export default {
  name: 'user-dashboard',
  components: {
    'app-header': AppHeader,
    'app-userleftmenu':  UserLeftMenu,
    'app-userworkingarea': UserWorkingArea
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
