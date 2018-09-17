import axios from "axios";

export default {
  name: "user-login",
  components: {},
  props: [],
  data() {
    return {
      User: {
        email: '',
        password: ''
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    navigate(link) {
      this.$router.push(link);
    },
    logInAPI() {
      let loguser = {
        email: this.User.email,
        password: this.User.password
      };

      axios
        .post(this.$serverUrl + "/login", loguser)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
