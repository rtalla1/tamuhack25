import React, { useEffect, useState } from 'react'

function index() {

  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8080/api/home')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message)
      })
  }, [])

  return (
    <h1>Welcome to HeartLink!</h1>
  )
}

export default index