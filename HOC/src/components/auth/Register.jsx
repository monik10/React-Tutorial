/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import withFormHandling from './../hoc/withFormHandling';

const Register = ({values,handleChange,handleSubmit}) => {
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="enter email" value={values.email} onChange={handleChange}></input>
      <input type="password" name="password" placeholder="enter password" value={values.password} onChange={handleChange}></input>
      
      <button>submit</button>
     </form>
    </div>
  )
}

export default withFormHandling(Register);
