
import { AddForm, Input, Label, Button, IsvisibleBtn, PasswordInputWrap } from '../components/form/Form.styled'
import { useDispatch, useSelector } from "react-redux"
import { login } from 'reduce/auth/authOperations'
import { Wrap } from '../components/App.styled'
import { Error } from '../components/Error/Error'
import { selectError } from 'reduce/auth/authSelectors'
import { AiFillEye } from "react-icons/ai";
import { useState } from 'react'


export const Login = () => {
  const [passType, setPassType] = useState('password')
  const isError = useSelector(selectError)
  const dispatch = useDispatch()

  const onHandkeSubmit = (evt) => {
    evt.preventDefault()

    const email = evt.target.email.value
    const password = evt.target.password.value

    dispatch(login({ email, password }))

    
  }
   const onVisibleBtnClick = () => {
    
        if(passType==="password")
      {
       setPassType("text")
       return;
      }
      setPassType("password")

  }

    return (
        <Wrap>
        <h2>Login</h2>
         <AddForm onSubmit={onHandkeSubmit}>
            
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          pattern="^[\w\-._]+@[\w\-._]+\.[A-Za-z]{2,6}$"
          title=" must include the required character @"
          required
          id="email"
        />
          
        <Label htmlFor="password">Password</Label>
        <PasswordInputWrap>
          <Input
          type={passType}
          name="password"
          pattern="^(?=.*\d)(?=.*[a-zA-Zа-яА-Я])[a-zA-Zа-яА-Я\d]{6,}$"
          title="Phone password must consist of at least 6 characters, one of which must be a number and the rest must be Latin or Cyrillic"
          required
          id="password"
        />
          <IsvisibleBtn type='button' onClick={onVisibleBtnClick}><AiFillEye /></IsvisibleBtn>
          </PasswordInputWrap>
        <Button  type="submit">Login</Button>
        </AddForm>
        {isError && <Error text="login error" />}
        </Wrap>
       
       
        
    )


}