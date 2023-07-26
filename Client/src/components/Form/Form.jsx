import { useState } from "react";
import "../Form/Form.module.css";
import validate from "./validation";
import { login } from "../../App"


export default function Form(props) {

    const [ userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [ errors, setErrors ] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
        setErrors(validate({ 
            ...userData, 
            [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.20minutos.es%2Fimagenes%2Fcinemania%2Fseries%2Frick-morty-peor-mejor-episodios-4733214%2F&psig=AOvVaw3lJJZdf2p4SfcoeppqDOZt&ust=1687654189378000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKCC-vjX2v8CFQAAAAAdAAAAABAE" />
        <label>Email:</label>
        <input name="email" placeholder="Email..." type="text" value={userData.email} 
        onChange={handleChange} className={errors.email &&  "warning"} />
        <p className="danger">{errors.email}</p>

        <label>Password:</label>
        <input name="password" type="password" value={userData.password} 
        onChange={handleChange} className={errors.password && "warning"} />
        <p className="danger">{errors.password}</p>

        <button>login</button>
      </form>
    </div>
  );
}
