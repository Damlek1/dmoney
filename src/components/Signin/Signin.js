import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './index'

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to='/'>dolla</Icon>
            <FormContent>
                <Form>
                    <FormH1>Sign in your account</FormH1>
                    <FormLabel htmlfor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlfor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        n</FormWrap>
      </Container>
    </>
  )
}

export default Signin