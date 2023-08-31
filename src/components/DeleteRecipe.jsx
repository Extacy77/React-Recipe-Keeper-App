import { db } from "../config/firebase";
import "../index.css";
import {
  doc,
  deleteDoc,
} from "firebase/firestore";
import { MdOutlineRemoveCircle } from "react-icons/md";

const DeleteRecipe = ({ id }) => {
    const removeRecipe = (id) => {
        deleteDoc(doc(db, "recipes", id));
      };

  return (
    <div className="buttons">
     <button className="remove"
      onClick={() => removeRecipe(id)}>Remove</button>
  </div>
  )
}

export default DeleteRecipe;
