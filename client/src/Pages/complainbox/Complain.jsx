import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import Complainbox from "../../components/Complainbox/Complainbox.jsx";
import "./Complain.css";
import Header from "../../components/header/Header.jsx";

const Complain = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const querySnapshot = await getDocs(collection(firestore, "forms"));
      const complaintList = querySnapshot.docs.map((doc) => doc.data());
      setComplaints(complaintList);
    };

    fetchComplaints();
  }, []);

  return (
    <div className="complainbody">
      <Header path1="/vote" navlink1="Vote" path2="/complainform" navlink2="Complaint" />
      <h2 id="greet-top">What's happening around you</h2>
      <div className="complaint-holder">
        {complaints.map((complaint) => (
          <Complainbox
            key={complaint.id} // Replace "id" with the actual unique identifier field in your Firestore documents
            desc={complaint.desc}
            location={complaint.location}
            title={complaint.title}
            img={complaint.photoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Complain;
