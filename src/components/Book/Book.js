import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`https://backend-proyecto-final-production.up.railway.app${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article> {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>$ {price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Actualizar
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Eliminar
      </Button>
    </div>
  );
};

export default Book;