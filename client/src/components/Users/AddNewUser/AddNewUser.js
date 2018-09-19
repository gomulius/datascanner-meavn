import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs, maxLength} from "vuelidate/lib/validators";
import swal from 'sweetalert';

export default {
  name: 'add-new-user',
  components: {},
  props: [],
  data: () => ({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: '',
    tandc: 'not_accepted',
    form: {
      gender: ''
    }
  }),
  computed: {

  },
  mounted () {

  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirm_password: {
        required,
        sameAs: sameAs('password')
      },
      tandc: {
        required,
        maxLength: maxLength(8)
      }
    }
  },
  methods: {
    navigate(link){
      this.$router.push(link)
    },
    async submit() {
      return axios({
        method: 'post',
        data: {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          gender: this.form.gender
        },
        url: 'http://localhost:8081/users/register',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() =>{
        swal('Success!', 'You have been sucessfully registered', 'success');
        this.$router.push('/');
      })
      .catch((error) => {
        const message = error;
        swal('Problem!', `${message}`, 'error');
      })
      return true;
    },
    clear() {
      this.$refs.form.reset();
    }
  }
}
