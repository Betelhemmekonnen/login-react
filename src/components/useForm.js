import { useState } from "react";
import ReactDOM from "react-dom/client";
import "../components/LoginForm.css"
export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div class="wrapper">
    <form onSubmit={handleSubmit}>
     
      <input 
      className="input-box"
        type="text" 
        name="username" 
        placeholder="user name"
        value={inputs.username || ""} 
        onChange={handleChange}
      />
        <input 
          className="input-box"
          type="number" 
          name="age" 
          placeholder="age"
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        <input  className="input-box" type="submit" />
    </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);