import React, { useRef, useState } from 'react'
import { EMAILPATTERN } from '../constants/regex'
import { toast } from 'react-toastify'

const Subscribe = () => {
  const email = useRef(null)


  function handleSubmit(e) {
    e.preventDefault()

    if (EMAILPATTERN.test(email.current.value)) {
      toast("Now You are a member")
      email.current.value = ""
      return
    } else {
      toast("write correct email address")
      return
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-[#373737] text-4xl font-medium text-center'>Subscribe now & get 20% off</h2>
      <p className='text-[#9A9A9A] text-center' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <div>
        <form className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-0' onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter your email id' className='outline outline-[#C7C7C7] p-2' required ref={email} />
          <button className='text-white bg-black p-2 border-1 border-black'>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe