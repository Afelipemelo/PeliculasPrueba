import React from 'react'
import styled from '@emotion/styled';

const MessageError = styled.p`
  padding: 3px;
  margin: 5px 0 0 0;
  color: red;
  background: #cfcfcf;
`
const Error = ({message}) => {
  return (
    <MessageError>{message}</MessageError>
  )
}

export default Error