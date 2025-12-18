import React from "react";
import { Navigate, useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();

  if (!username) {
    return <Navigate to={"/404"} replace />;
  }

  return (
    <div>
      <h3>Bienvenue sur le profil de {username}</h3>
    </div>
  );
};

export default Profile;
