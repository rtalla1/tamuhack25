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
    <div style={welcomeMsg}>
      <h1>Welcome to HeartLink!</h1>
      <h3>Stay in touch with your loved ones ❤️</h3>
    </div>
  )
}

const welcomeMsg: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '2rem',
}

export default index