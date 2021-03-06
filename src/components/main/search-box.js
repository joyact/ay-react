import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #1fcf89;
  border-radius: 2px;
  cursor: pointer;
`

function SearchBox() {
  return (
    <Link to="/search">
      <Box />
    </Link>
  )
}

export default SearchBox
