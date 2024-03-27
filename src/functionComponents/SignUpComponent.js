import React from 'react'

const SignUp = () => {
  return (
    <div>
      <p className='pp'>Sign Up</p>
      <lable htmlFor='fname'>First Name : </lable>
      <input type='text' name='firstanme' id='fname' placeholder='enter first name'/> <br></br><br></br>
      <lable htmlFor='sname'>Surname Name : </lable>
      <input type='text' name='firstanme' id='sname' placeholder='enter Surname'/><br></br><br></br>

      <lable htmlFor='Email'>Email : </lable>
      <input type='email' name='firstanme' id='Email' placeholder='enter mail'/><br></br><br></br>
      <lable htmlFor='Password'>Password : </lable>
      <input type='Password' name='firstanme' id='Password' placeholder='enter Password'/><br></br><br></br>
      <lable htmlFor='Mobile'>Mobile : </lable>
      <input type='number' name='firstanme' id='Mobile' placeholder='enter Mobile'/><br></br><br></br>
      <input type='submit' className='submit'/>




      
    </div>
  )
}

export default SignUp;
