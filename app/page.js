"use client"
import React, { useState } from 'react';

const page = () => {

  const[title, setTitle]=useState("")
  const[description, setDescription]=useState("")
  const[addTask, setAddTask]=useState("")

  return (
    <>
    <div 
    className='bg-slate-500 h-12 w-full text-white text-center text-xl p-2'>
      <b>Amrit's Todo List</b>
      </div> 

      <div 
      className='bg-blue-600 h-20 w-full flex flex-row justify-between rounded-lg'>
        <form 
        className='w-full flex justify-between p-5'>

          <input
          className='w-96 rounded-lg'
          placeholder='Title'
          value={title}
          onChange={(e)=> setTitle(e.target.value)}>
          </input>
          <input
          className='w-96 rounded-lg'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}>
          </input>

          <button
          className='bg-green-500 rounded-lg shadow-xl text-white text-3xl'
          onClick={(e)=> {
            e.preventDefault();
            setAddTask(title + "->" + description);
            setTitle("")
            setDescription("")
          }}
          >Add</button>
        </form>
      </div>

      <div 
      className='bg-slate-700 text-center p-5 h-20 text-xl text-black'>
        <h3>
          {addTask}
        </h3>
      </div>
    </>
  );
};

export default page;