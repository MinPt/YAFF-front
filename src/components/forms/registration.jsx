import Form from "../common/form";
import api from "../../gateways/CRADops/apiPost";
import { toast } from "react-toastify";

class Register extends Form {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
    },
    errors: {},
    apiResponse: {},
  };

  async handleSubmit(e) {
    e.preventDefault();

    const model = { ...this.state.data };
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
  }

  render() {
    return (
      <form>
        {this.createInput("Username", "username")}
        {this.createInput("Email", "email")}
        {this.createInput("Password", "password")}
        {this.createButton("Register")}
      </form>
    );
  }
}

export default Register;
