import React, { useState, useRef } from 'react'
import './App.css'

export default function App() {

  const [preview, setPreview] = useState();

  const fileUploaderRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (event) => {
    //console.log('fileUploaderRef', fileUploaderRef.current.value)
    let files = event.target.files;
    let reader;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        reader = new FileReader();
        reader.readAsDataURL(file); 

        reader.onload = event => {
            setPreview(event.target.result);
        }
      }     
    }     

  const removeFile = () => {
    fileUploaderRef.current.value = null
    setPreview(null)
    //console.log('fileUploaderRef', fileUploaderRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type = 'file'
        id = 'file-uploader'
        name = 'fileuploader'
        ref={fileUploaderRef}
        onChange={handleChange}
      />
      <br/>
      <img src={preview}/>
      <br />
      <button onClick={() => removeFile()}>Remove</button>
    </form>
  )
}
