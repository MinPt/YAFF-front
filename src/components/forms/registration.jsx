import GlobalForm from "../common/globalForm";
import api from "../../gateways/CRADops/apiPost";
import { toast } from "react-toastify";
import Input from "../common/input";
import * as yup from "yup";

class Register extends GlobalForm {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
    },
    errors: {},
    apiResponse: {},
    inputFields: [
      <Input type="text" name="username" label="Username" />,
      <Input type="text" name="email" label="Email" />,
      <Input type="password" name="password" label="Password" />,
    ],
  };

  schema = yup.object().shape({
    username: yup.string().min(5).max(55).required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password should have: 1 lower character, 1 upper character, 1 numeric character, 1 special symbol and be at least 8 characters long"
      )
      .required(),
  });

  handleSubmit = async (value) => {
    const model = { ...value };
    try {
      const data = await api.registerUser(model);
      this.setState({ apiResponse: data });
      localStorage.setItem("jwt", data.jwtToken);
      toast("You successfully registrated. Please consider to login.");
      this.props.history.push("/login");
    } catch (error) {
      const data = error.response.data.errors;
      for (let i in data) {
        console.log(data[i], i.toLowerCase());
      }
      console.log(data);
    }
  };
}

export default Register;
