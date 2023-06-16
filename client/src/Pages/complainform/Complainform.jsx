import React from 'react'
import "./Complainform.css"


const Complainform = () => {
  return (
    <div>
        <div className="form">
        <form action="" method="post" onSubmit={(event) => sub(event)}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name= "title"
            placeholder=""
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="location">location</label>
          <input
            type="text"
            name= "locaiton"
            placeholder=""
            onChange={(e) => setName(e.target.value)}
          />
           <label htmlFor="">Upload Picture showing the problem</label>
          <input type="File" name="Profile picture" />
          <label htmlFor="title">Title</label>
          <textarea
            type=""
            name= "title"
            placeholder=""
            onChange={(e) => setName(e.target.value)}
          />
          </form>
        </div>
    </div>
  )
}

export default Complainform