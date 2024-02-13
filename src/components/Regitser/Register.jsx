import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// import style
import RegStyle from './Register.module.css'
import RegLogo from '../../images/BackgroundImage/Logo.png'

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
    // Check if all input fields are filled
    if (
      fullname.length > 0 &&
      birthday.length > 0 &&
      gender.length > 0 &&
      address.length > 0 &&
      contact.length > 0 &&
      email.length > 0 &&
      username.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
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
      };
  
      // Check if password and confirmPassword match
      if (password === confirmPassword) {
        // Check if a user with the same username already exists
        const isExistingUser = users.some(
          (user) => user.username === username
        );
  
        if (!isExistingUser) {
          alert('Successfully Registered');
          // Call the Zustand action to add the user to the array
          addUser(user);
  
          // Clear the input values
          setFullName('');
          setBirthday('');
          setGender('');
          setAddress('');
          setContact('');
          setEmail('');
          setUsername('');
          setPassword('');
          setConfirmPassword('');
        } else {
          alert('Existing Account');
        }
      } else {
        alert('Password and Confirm Password did not match');
      }
    } else {
      alert('Complete Details');
    }
  };
  

  return (
    <div className={`${RegStyle['register']}`}>
      <div className='transparent flex justify-end items-center'>
          <div className='shadow-xl flex flex-col justify-center items-center '>
            <div className=''>
              <p
                className=''
              ><img src={RegLogo} alt="Logo" /></p>
            </div>

            {/* text field for fullname */}
            <div className='mt-1'>
              <input  
                ref={inputRef}
                type="text" 
                value={fullname}
                placeholder='Full Name'
                onChange={(e) => {setFullName(e.target.value)}}
                className='font-semibold border-2 px-2 py-1 rounded xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'
              />
            </div>

            {/* text field for Bday */}
            <div className='text-white flex justify-evenly mt-3 border-2 py-1 font-semibold xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'>
              <label htmlFor="birthday">Birthday:</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={birthday}
                onChange={(e) => {setBirthday(e.target.value)}}
                className='px-4 py-1 text-black'
              />
            </div>

            {/* text field for Gender*/}
            <div className='text-white border-2 mt-3 flex justify-evenly p-2 rounded font-semibold xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'>
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

            {/* text field for address*/}
            <div className='mt-3'>
              <input 
                type="text" 
                value={address}
                placeholder='Address'
                className='font-semibold border-2 px-2 py-1 rounded xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'
                onChange={(e) => {setAddress(e.target.value)}}
              />
            </div>

            {/* text field for Contact*/}
            <div className='mt-3 grid'>
              <input 
                type="text" 
                value={contact}
                placeholder='Contact'
                className='font-semibold border-2 px-2 py-1 rounded xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'
                onChange={handleContactChange}
              />
              {
                 contact.length === 0 ? '' : contact.length > 11 ? (<small className='font-semibold text-rose-500 ml-2'>11 Digit only</small>) : isNumeric ? " " : (<small className='font-semibold text-rose-500 ml-2'>Enter Contact Number</small>)
              }
              
            </div>

            {/* text field for Email*/}
            <div className='mt-3 grid'>
              <input 
                type="email" 
                value={email}
                placeholder='Email'
                className='font-semibold border-2 px-2 py-1 rounded xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'
                onChange={handleEmailChange}
              />
              {
                email.length === 0 ? '' : isValidEmail ? '': (
                  <small className='font-semibold text-rose-500 ml-2'>Invalid Email Address</small>
                )  
              }
            </div>

            {/* text field for Username*/}
            <div className='mt-3'>
              <input 
                type="text" 
                value={username}
                placeholder='Username'
                className='font-semibold border-2 px-2 py-1 rounded xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'
                onChange={(e) => {setUsername(e.target.value)}}
              />
            </div>

            {/* text field for Password and Confirm Passsword*/}
            <div className=''>
              <div className='m-auto mt-3 flex relative xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'>
                <input 
                  type={showPassword ?  'password' : 'text'}
                  value={password}
                  placeholder='Password'
                  className='font-semibold border-2 px-2 py-1 rounded w-full'
                  onChange={(e) => {setPassword(e.target.value)}}
                />
                <div 
                  className='absolute right-2 top-2 cursor-pointer'
                  onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <i className="fa-sharp fa-light fa-eye"></i> : <i className="fa-duotone fa-eye-slash"></i>}
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

              <div className='m-auto mt-3 flex relative xs:w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'>
                <input 
                  type={showConfirmPassword ?  'password' : 'text'} 
                  value={confirmPassword}
                  placeholder='Confirm password'
                  className='font-semibold border-2 px-2 py-1 w-full rounded'
                  onChange={(e) => {setConfirmPassword(e.target.value)}}
                />
                <div 
                  className='absolute right-2 top-2 cursor-pointer'
                  onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <i className="fa-sharp fa-light fa-eye"></i> : <i className="fa-duotone fa-eye-slash"></i>}
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
                className='bg-green-600 py-1 rounded w-[200px] hover:bg-green-500 font-semibold text-white'
              >Submit</button>
              <small
                className='ml-8 my-2 text-white'
              >Have an account ? <Link className='hover:text-blue-500 font-bold' to='/login'>Login</Link></small>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Register