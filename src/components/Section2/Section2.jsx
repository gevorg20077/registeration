import logo from '../../Images/Logo.png'
import googleLogo from '../../Images/googleLogo.png'
import googleplayImage from '../../Images/GooglePlay.png'
import appstoreImage from '../../Images/AppStore.png'
import calendar from '../../Images/calendar-month-outline.png'
import './section2.css'
import { useEffect, useRef, useState } from 'react'
const Section2 = () => {
    const nameRef = useRef(null)
    const lastnameRef = useRef(null)
    const emailOrPhoneRef = useRef(null)
    const dateRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmRef = useRef(null)
    const [nameValue, setNameValue] = useState(false)
    const [lastnameValue, setLastnameValue] = useState(false)
    const [emailOrPhoneValue, setEmailOrPhoneValue] = useState(false)
    const [passwordValue, setPasswordValue] = useState(false)
    const [dateValue, setDateValue] = useState(false)
    const [confirmValue, setConfirmValue] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [currentName, setCurrentName] = useState(false)
    const [currentLastname, setCurrentLastname] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [pass, setPass] = useState(false)
    const [formattedDate, setFormattedDate] = useState('');
    const [isClickCheck, setIsClickCheck] = useState(false)
    const [submit, setSubmit] = useState(false)

    const createAccount = (e) => {
        e.preventDefault()
        setIsSubmit(!isSubmit)
        setSubmit(true)
        nameRef.current.value === '' ? setNameValue(true) : setNameValue(false)
        emailOrPhoneRef.current.value === '' ? setEmailOrPhoneValue(true) : setEmailOrPhoneValue(false)
        lastnameRef.current.value === '' ? setLastnameValue(true) : setLastnameValue(false)
        passwordRef.current.value === '' ? setPasswordValue(true) : setPasswordValue(false)
        dateRef.current.value === '' ? setDateValue(true) : setDateValue(false)
        confirmRef.current.value === '' ? setConfirmValue(true) : setConfirmValue(false)
    }
    useEffect(() => {
        setIsEmail((emailOrPhoneRef.current.value.includes('@') && emailOrPhoneRef.current.value.includes('.')) || (emailOrPhoneRef.current.value.includes('+') && !emailOrPhoneRef.current.value.match(/[a-zA-Z]/) && emailOrPhoneRef.current.value.match(/\d/)))
        setCurrentName(nameRef.current.value.match(/\d/) || nameRef.current.value.match(/[!@#\$%\^&~`,./?'";:*()[]/) ? false : true);
        setCurrentLastname(lastnameRef.current.value.match(/\d/) || lastnameRef.current.value.match(/[!@#\$%\^&~`,./?'";:*()[]/) ? false : true);
        setIsPassword(passwordRef.current.value === confirmRef.current.value)
        setPass(passwordRef.current.value.length >= 8)
    }, [isSubmit])
    const onChange = (e) => {
        setIsEmail((emailOrPhoneRef.current.value.includes('@') && emailOrPhoneRef.current.value.includes('.')) || (emailOrPhoneRef.current.value.includes('+') && !emailOrPhoneRef.current.value.match(/[a-zA-Z]/) && emailOrPhoneRef.current.value.match(/\d/)))
        setCurrentName(nameRef.current.value.match(/\d/) || nameRef.current.value.match(/[!@#\$%\^&~`,./?'";:*()[]/) ? false : true);
        setCurrentLastname(lastnameRef.current.value.match(/\d/) || lastnameRef.current.value.match(/[!@#\$%\^&~`,./?'";:*()[]/) ? false : true);
        setIsPassword(passwordRef.current.value === confirmRef.current.value)
        setPass(passwordRef.current.value.length >= 8)
        const inputValue = e.target.value.replace(/\D/g, '');
        let formattedValue = '';

        if (inputValue.length <= 2) {
            formattedValue = inputValue;
        } else if (inputValue.length <= 4) {
            formattedValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`;
        } else {
            formattedValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}/${inputValue.slice(4, 8)}`;
        }

        setFormattedDate(formattedValue);
    };
    const clickCheck = () => {
        setIsClickCheck(!isClickCheck)
    }
    return (
        <div className='section2'>
            <div className="logo">
                <img className='logoImg' src={logo} alt="" />
                <p>Logo</p>
            </div>
            <h1>Create account</h1>
            <p>For bussines, band or celebrity.</p>
            <form className="form" onSubmit={createAccount}>
                <div className='form1 formm'>
                    <div className="input1">
                        <p>First name</p>
                        <input style={{ border: (nameRef.current?.value === '' || nameRef.current?.value === undefined) ? nameValue && '1px solid red' : currentName ? submit && '1px solid green' : submit && '1px solid red' }} ref={nameRef} type="text" />
                        {(nameRef.current?.value === '' || nameRef.current?.value === undefined) ? nameValue && <p className='error'>Please write your name</p> : currentName ? submit && <p className='right'>Name is correct</p> : submit && <p className='error'>Name is incorrect</p>}
                    </div>
                    <div className="input2">
                        <p>Email or phone number</p>
                        <input style={{ border: (emailOrPhoneRef.current?.value === '' || emailOrPhoneRef.current?.value === undefined) ? emailOrPhoneValue && '1px solid red' : (isEmail) ? submit && '1px solid green' : submit && '1px solid red' }} ref={emailOrPhoneRef} type="text" />
                        {(emailOrPhoneRef.current?.value === '' || emailOrPhoneRef.current?.value === undefined) ? emailOrPhoneValue && <p className='error'>Please write your email or phone number</p> : isEmail ? submit && <p className='right'>Your email is correct</p> : submit && <p className='error'>Your email is incorrect</p>}
                    </div>
                    <div className="input3">
                        <p>Password</p>
                        <input style={{ border: (passwordRef.current?.value === '' || passwordRef.current?.value === undefined) ? passwordValue && '1px solid red' : pass ? submit && '1px solid green' : submit && '1px solid red' }} ref={passwordRef} type="password" />
                        {(passwordRef.current?.value === '' || passwordRef.current?.value === undefined) ? passwordValue && <p className='error'>Please write password</p> : pass ? submit && <p className='right'>Password is correct</p> : submit && <p className='error'>The line must contain more than 8 symbol </p>}
                    </div>
                    <div className="checkbox rememberMe">
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </div>
                    <div className="checkbox">
                        <input onClick={clickCheck} type="checkbox" />
                        <p>I agree to all the <a href="">Terms</a> and <a href="">Privacy policy</a></p>
                        {isClickCheck || submit && <p className='error checkError'>Please choose</p>}
                    </div>
                    <button>Create account</button>
                </div>
                <div className='form2 formm'>
                    <div className="input1">
                        <p>Last name</p>
                        <input style={{ border: (lastnameRef.current?.value === '' || lastnameRef.current?.value === undefined) ? lastnameValue && '1px solid red' : currentLastname ? submit && '1px solid green' : submit && '1px solid red' }} ref={lastnameRef} type="text" />
                        {(lastnameRef.current?.value === '' || lastnameRef.current?.value === undefined) ? lastnameValue && <p className='error'>Please write your lastname</p> : currentLastname ? submit && <p className='right'>Lastname is correct</p> : submit && <p className='error'>Lastname is incorrect</p>}
                    </div>
                    <div className="input2">
                        <p>Date of birth(MM/DD/YY)</p>
                        <input onChange={onChange} value={formattedDate} style={{ border: (dateRef.current?.value === '' || dateRef.current?.value === undefined) ? dateValue && '1px solid red' : formattedDate.length === 10 ? submit && '1px solid green' : submit && '1px solid red' }} ref={dateRef} type="text" className='dateInput' />
                        <p className='icon'><img src={calendar} alt="" /></p>
                        {(dateRef.current?.value === '' || dateRef.current?.value === undefined) ? dateValue && submit && <p className='error'>Please write your date of birth (MM/DD/YY)</p> : formattedDate.length === 10 ? submit && <p className='right'>Date is correct</p> : submit && <p className='error'>Date is incorrect</p>}
                    </div>
                    <div className="input3">
                        <p>Confirm password</p>
                        <input style={{ border: (confirmRef.current?.value === '' || confirmRef.current?.value === undefined) ? confirmValue && '1px solid red' : (isPassword && pass ? submit && '1px solid green' : submit && '1px solid red') }} ref={confirmRef} type="password" />
                        {(confirmRef.current?.value === '' || confirmRef.current?.value === undefined) ? confirmValue && <p className='error'>Please write confirm password</p> : isPassword && pass ? submit && <p className='right'>Confirm is correct</p> : submit && <p className='error'>Please write the password correctly</p>}
                    </div>
                    <a className='forgotPassword' href="">Forgot password?</a>
                    <a href='' className='button'><img src={googleLogo} alt="" />Sign-in with google</a>
                </div>
            </form>
            <p className='text'>Don't have an account? <a href="">Log in</a></p>
            <div className="images">
                <img src={googleplayImage} alt="" />
                <img src={appstoreImage} alt="" />
            </div>
        </div>
    )
}

export default Section2