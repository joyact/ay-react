import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useUserContext } from '../../contexts/user-context'
import { requestSignUp } from './service'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`

function Form() {
  const { setUser } = useUserContext()
  const history = useHistory()
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
    rePassword: '',
    name: '',
  })

  const { id, password, rePassword, name } = formValues

  const handleFormValues = ({ target: { id, value } }) => {
    setFormValues({
      ...formValues,
      [id]: value,
    })
  }

  const handleSubmit = async () => {
    if (await requestSignUp({ id, password, name })) {
      history.push('/login')
    } else {
      window.alert('회원가입에 실패하였습니다')
    }
  }

  const isMatchedPassword = password === rePassword
  const isSubmitable = isMatchedPassword && id && password && name

  return (
    <Container>
      <Input
        id="id"
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={handleFormValues}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={handleFormValues}
      />
      <Input
        id="rePassword"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        value={rePassword}
        onChange={handleFormValues}
      />
      <Input
        id="name"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={handleFormValues}
      />
      <Button
        disabled={!isSubmitable}
        onClick={isSubmitable ? handleSubmit : () => {}}
      >
        로그인
      </Button>
    </Container>
  )
}

export default Form
