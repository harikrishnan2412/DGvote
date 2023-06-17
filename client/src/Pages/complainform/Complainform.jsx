import { useState } from "react";
import { storage, firestore } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';
import "./Complainform.css";
import Header from "../../components/header/Header";

function Complainform() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    desc: '',
    photoUrl: ''
  });

  const handleChange1 = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // State to store uploaded file
  const [file, setFile] = useState("");

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!file) {
      alert("Please upload an image first!");
      return;
    }
  
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
  
        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(downloadURL);
  
          const updatedFormData = {
            ...formData,
            photoUrl: downloadURL
          };
  
          const db = firestore;
          await addDoc(collection(db, 'forms'), updatedFormData);
          console.log('Form data added to Firestore');
  
          setFormData({
            title: '',
            location: '',
            desc: '',
            photoUrl: ''
          });
        } catch (error) {
          console.error('Error adding form data to Firestore:', error);
        }
      }
    );
  };
  

  



  return (
    <div className="bodyz">
      

      <form className="form1" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange1}
          required
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange1}
          required
        />

        <label htmlFor="desc">Description</label>
        <input className="diskription"
          type="textarea"
          name="desc"
          onChange={handleChange1}
          value={formData.desc}
        />

        <input type="file" onChange={handleChange} accept="image/*" />
        <>{percent} % done</>

        <button type="submit">Submit</button>
      </form>
      <div className="sidedesign">
        <h1>"The vote is not only a right; it is also a power." </h1>
      </div>

    </div>
  );
}

export default Complainform;
