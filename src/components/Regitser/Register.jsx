import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Import zustand state management
import useRegisterStore from '../../store/LoginRegisterStore'

const Register = () => {
  // useRef for focus
  const inputRef = useRef()

  // Call the Store from zustand
  const {users, addUser} = useRegisterStore((state) => state)

  // Handler Variable to get User info
  const [fullname, setFullName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')

  // state variable to check contact if number
  const [contact, setContact] = useState('')
  const [isNumeric, setIsNumeric] = useState(false)

  // state variable to check valid email
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)

  const [username, setUsername] = useState('')

  // state variable to visible password and confirm password
  const [password, setPassword]  = useState('')
  const [confirmPassword, setConfirmPassword]  = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [showConfirmPassword, setShowConfirmPassword] = useState(true)

  // Check the value of contact is a number
  const handleContactChange = (e) => {
    const contactValue = e.target.value
    setContact(contactValue);

    // Check if the input value is a number
    setIsNumeric(!isNaN(contactValue))
  }

  // Check if the email address is valid
  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    setEmail(inputValue)

    // Define a regular expression pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    setIsValidEmail(emailPattern.test(inputValue))
  }

  // Ternary operator to check length of password
  let passResult = password.length === 0 ? '' : password.length < 8 ? 'Weak password' : 'Strong password'

  let confirmPassResult = confirmPassword.length === 0 ? '' : confirmPassword.length < 8 ? 'weak password' : 'strong password'


  // function to view Password and confimpassword
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  // Handler function to update the selected field
  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }

  // Handler function to stored User Zustand Array Object variable
  const handleSubmit = () => {
    // check the input fields if empty
    if(
        fullname.length > 0 &&
        birthday.length > 0 &&
        gender.length > 0 &&
        address.length > 0 &&
        contact.length > 0 &&
        email.length > 0 &&
        username.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0
      ){
        
        // Create a user object with all the user's information
        const user = {
          fullname,
          birthday,
          gender,
          address,
          contact,
          email,
          username,
          password,
          confirmPassword,
        }

        if(password === confirmPassword){
          // Call the Zustand action to add the user to the array
          addUser(user)

          // Clear the input values
          setFullName('')
          setBirthday('')
          setGender('')
          setAddress('')
          setContact('')
          setEmail('')
          setUsername('')
          setPassword('')
          setConfirmPassword('')
        }else{
          alert('Password and Confirm Password did not match')
        }
      }else{
        alert('Complete Details')
      }
  }

  return (
    <div className=''>
      <div className='bg-slate-100 max-h-[100%] min-h-[100%] max-w-[100%] min-w-[100%] flex justify-center items-center'>
          
          <div className='bg-white shadow-xl py-8 px-12 w-[500px] flex flex-col justify-center items-center'>

            <div>
              <p
                className='text-2xl mb-8 font-bold'
              ><i>Registration Form</i></p>
            </div>

            <div className='mt-3'>
              <input  
                ref={inputRef}
                type="text" 
                value={fullname}
                placeholder='Full Name'
                onChange={(e) => {setFullName(e.target.value)}}
                className='font-semibold border-2 px-2 py-1 w-[300px] rounded'
              />
            </div>

            <div className='flex justify-evenly w-[300px] mt-3 border-2 py-1 font-semibold'>
              <label htmlFor="birthday">Birthday:</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={birthday}
                onChange={(e) => {setBirthday(e.target.value)}}
                className='px-4 py-1'
              />
            </div>

            <div className='border-2 w-[300px] mt-3 flex justify-evenly p-2 rounded font-semibold'>
              <div>
                <label>
                  <input
                    type="radio"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleGenderChange}
                  />
                  {" "}
                  Male
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleGenderChange}
                  />
                  {" "}
                  Female
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    value="other"
                    checked={gender === 'other'}
                    onChange={handleGenderChange}
                  />
                  {" "}
                  Other
                </label>
              </div>
            </div>

            <div className='mt-3'>
              <input 
                type="text" 
                value={address}
                placeholder='Address'
                className='font-semibold border-2 px-2 py-1 w-[300px] rounded'
                onChange={(e) => {setAddress(e.target.value)}}
              />
            </div>

            <div className='mt-3 grid'>
              <input 
                type="text" 
                value={contact}
                placeholder='Contact'
                className='font-semibold border-2 px-2 py-1 w-[300px] rounded'
                onChange={handleContactChange}
              />
              {
                 contact.length === 0 ? '' : contact.length > 11 ? (<small className='font-semibold text-rose-500 ml-2'>11 Digit only</small>) : isNumeric ? " " : (<small className='font-semibold text-rose-500 ml-2'>Enter Contact Number</small>)
              }
              
            </div>

            
            <div className='mt-3 grid'>
              <input 
                type="email" 
                value={email}
                placeholder='Email'
                className='font-semibold border-2 px-2 py-1 w-[300px] rounded'
                onChange={handleEmailChange}
              />
              {
                email.length === 0 ? '' : isValidEmail ? '': (
                  <small className='font-semibold text-rose-500 ml-2'>Invalid Email Address</small>
                )  
              }
            </div>

            <div className='mt-3'>
              <input 
                type="text" 
                value={username}
                placeholder='Username'
                className='font-semibold border-2 px-2 py-1 w-[300px] rounded'
                onChange={(e) => {setUsername(e.target.value)}}
              />
            </div>

            <div className=''>
              <div className='mt-3 flex relative'>
                <input 
                  type={showPassword ?  'password' : 'text'}
                  value={password}
                  placeholder='Password'
                  className='font-semibold border-2 px-2 py-1 w-[300px] rounded'
                  onChange={(e) => {setPassword(e.target.value)}}
                />
                <div 
                  className='absolute right-2 top-2 cursor-pointer'
                  onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <i className="fa-duotone fa-eye"></i> : <i className="fa-duotone fa-eye-slash"></i>}
                </div>
              </div>

              {
                password.length >= 8 ? <div className='font-semibold text-green-500 ml-2'>
                  <small>
                    {passResult}
                  </small>
                </div> : <div className='font-semibold text-rose-500 ml-2'>
                  <small>
                    {passResult}
                  </small>
                </div>
              }

              <div className='mt-3 relative'>
                <input 
                  type={showConfirmPassword ?  'password' : 'text'} 
                  value={confirmPassword}
                  placeholder='Confirm password'
                  className='font-semibold border-2 px-2 py-1 w-[300px] rounded'
                  onChange={(e) => {setConfirmPassword(e.target.value)}}
                />
                <div 
                  className='absolute right-2 top-2 cursor-pointer'
                  onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <i className="fa-duotone fa-eye"></i> : <i className="fa-duotone fa-eye-slash"></i>}
                </div>
              </div>
              {
                confirmPassword.length >= 8 ? <div className='font-semibold text-green-500 ml-2'>
                  <small>
                    {confirmPassResult}
                  </small>
                </div> : <div className='font-semibold text-rose-500 ml-2'>
                  <small>
                    {confirmPassResult}
                  </small>
                </div>
              }

            </div>

            <div className='mt-6 grid'>
              <button
                onClick={handleSubmit}
                className='bg-green-300 py-1 rounded w-[200px] hover:bg-green-200 font-semibold'
              >Submit</button>
              <small
                className='ml-8 my-2'
              >Have an account ? <Link className='hover:text-blue-500 font-bold' to='/login'>Login</Link></small>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Register