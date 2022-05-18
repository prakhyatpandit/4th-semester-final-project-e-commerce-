import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import css from './css/Nav.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search here...'
        className='mr-sm-2 ml-sm-5 search-form rounded-pill border border-info ' 
      ></Form.Control>
      <Button type='submit' variant='outline-info' className='p-2 search-btn  rounded-pill pr-5'>
      <i className="fas fa-search text-secondary "></i> <h className="text-secondary"> search</h>
      </Button>
    </Form>
  )
}

export default SearchBox
