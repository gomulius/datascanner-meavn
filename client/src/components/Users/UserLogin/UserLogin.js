import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs, maxLength} from "vuelidate/lib/validators";
import swal from 'sweetalert';

export default {
  name: "user-login",
  components: {},
  props: [],
  data: () => ({
    email: '',
    password: '',
    form: {}
  }),
  validations: {
    form: {
      password: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    navigate(link) {
      this.$router.push(link);
    },
    async logInAPI() {
     return axios({
       method: 'post',
       data: {
         email: this.form.email,
         password: this.form.password
       },
       url: 'http://localhost:8081/users/login',
       headers: { 'Content-Type' : 'application/json' }
     })
     .catch((error) => {
      const message = error;
      swal('Oh noo!', `${message}`, 'error');
      console.info('Authentication error', message);
      this.$router.push({ name: 'Login' });
    })
     .then((response) => {
       window.localStorage.setItem('auth', response.data.token);
       //window.location.href = 'http://localhost:8080/user-dashboard';
       this.$router.push({ name: 'UserDashboard' });
     })
    },
    clear(){
      this.$refs.form.reset();
    }
  }
};
