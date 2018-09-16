import Header from '@/components/Header'
import UserLeftMenu from '@/components/UserDashboard/UserLeftMenu'

export default {
  name: 'user-profile',
  components: {
    'app-header': Header,
    'app-userleftmenu':  UserLeftMenu
  },
  props: [],
  data () {
    return {
      edit: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
