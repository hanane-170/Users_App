import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    dob: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8484/users/${id}`);
    setUser(result.data);
    console.log(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Détails de l'Utilisateur</h2>

          <div className="card">
            <div className="card-header">
              Utilisateur num : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nom: </b>
                  {user.nom}
                </li>
                <li className="list-group-item">
                  <b>Prenom: </b>
                  {user.prenom}
                </li>
                <li className="list-group-item">
                  <b>Date de naissance: </b>
                  {user.dob}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
