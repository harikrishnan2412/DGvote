import "./Complainform.css"
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { getFirestore, initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseConfig from '../../firebase'; 

const FormComponent = () => {
  const [formData, setFormData] = useState({
    title:'',
    location:'',
    desc:'',
    image: null, // Image field
  });

  const handleChange = (event) => {
    if (event.target.name === 'image') {
      setFormData({
        ...formData,
        image: event.target.files[0], 
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const storage = getStorage(app);

      
      const docRef = await addDoc(collection(db, 'forms'), formData);

      console.log('Form data added to Firestore');

      
      if (formData.image) {
        const storageRef = ref(storage, `images/${docRef.id}`);
        await uploadBytes(storageRef, formData.image);
        console.log('Image uploaded to Firebase Storage');
      }

      
      setFormData({
        title:'',
        location:'',
        desc:'',
        image: null, // Image field
      });
    } catch (error) {
      console.error('Error adding form data to Firestore:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label htmlFor="image">Image</label>
      <input
        type="file"
        name="image"
        onChange={handleChange}
        accept="image/*"
      />

      <label htmlFor="desc">description</label>
      <input 
        type="textarea" 
        name="desc"
        onChange={handleChange}
        value={formData.desc}
       />

      

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
