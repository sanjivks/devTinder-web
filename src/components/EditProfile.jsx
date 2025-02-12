import React, { useState } from "react";
import UserCard from "./UserCard";

const EditProfile = ({user}) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [photoUrl, setphotoUrl] = useState(user.photoUrl);
  const [age, setage] = useState(user.age);
  const [gender, setgender] = useState(user.gender);
  const [about, setabout] = useState(user.about);
  return (
    <div className="flex justify-center my-10">
     <div className="flex justify-center mx-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">First Name:</span>
              </div>
              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Last Name:</span>
              </div>
              <input
                type="text"
                value={lastName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setlastName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Photo URL:</span>
              </div>
              <input
                type="text"
                value={photoUrl}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setphotoUrl(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Age:</span>
              </div>
              <input
                type="text"
                value={age}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setage(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Gender:</span>
              </div>
              <input
                type="text"
                value={gender}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setgender(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">About:</span>
              </div>
              <input
                type="text"
                value={about}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setabout(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-700"></p>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick="">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
         <UserCard user={{firstName,lastName,photoUrl,age,gender,about}}/>
    
    </div>
   
  );
};

export default EditProfile;
