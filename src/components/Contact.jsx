import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1080px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-center font-bold text-4xl mt-14 py-4'>Contact</h1>
        <form action="" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col py-2'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Name</label>
                    <input type="text" name='name' className='border-2 rounded-lg flex p-3 border-grey-300'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Phone Number</label>
                    <input type="text"name='phone number' className='border-2 rounded-lg flex p-3 border-grey-300' />
                </div>
            </div>

            <div className='flex flex-col py-2'>
                <label htmlFor="" className='uppercase text-sm py-2'>Email</label>
                <input type="text" name='email' className='border-2 rounded-lg flex p-3 border-grey-300'/>
            </div>
                
            <div className='flex flex-col py-2'>
                <label htmlFor="" className='uppercase text-sm py-2'>Subject</label>
                <input type="text" name='subject' className='border-2 rounded-lg flex p-3 border-grey-300'/>
            </div>

            <div className='flex flex-col py-2'>
                <label htmlFor="" className='uppercase text-sm py-2'>Message</label>
                <textarea name="message" id="" cols="30" rows="10" className='border-2 rounded-lg flex p-3 border-grey-300'></textarea>
            </div>
            <button className='uppercase bg-purple-900 text-white mt-4 w-full p-4 rounded-lg'>
            Submit Message
            </button>

            
        </form>
       
    </div>
  )
}

export default Contact
