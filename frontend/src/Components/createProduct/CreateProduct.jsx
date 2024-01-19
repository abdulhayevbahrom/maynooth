import React from "react";
import "./CreatePro.css";
import axios from "axios";

function CreateProduct() {
  function create(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let pro = Object.fromEntries(formData);
    pro.images = pro.images.split(" ");
    pro.price = +pro.price;
    pro.size = +pro.size;

    console.log(pro);
    axios
      .post("http://localhost:5000/pro/create", pro)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="createProduct">
      <form onSubmit={create}>
        <h3>Create product</h3>
        <label>Title</label>
        <input name="title" type="text" />

        <label>Price</label>
        <input name="price" type="number" />

        <label>Color</label>
        <input name="color" type="color" />

        <label>Brand</label>
        <input name="brand" type="text" />

        <label>Images</label>
        <input name="images" type="text" />

        <label>size</label>
        <select name="size">
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <label>Category</label>
        <select name="category">
          <option value="sofa">Sofa</option>
          <option value="coffeeTables">Coffee Tables</option>
          <option value="comboSets">Combo Sets</option>
          <option value="neckTables">Neck Tables</option>
          <option value="rugs">Rugs</option>
          <option value="decor">Decor</option>
        </select>

        <label>Cloth</label>
        <select name="cloth">
          <option value="metal">Metal</option>
          <option value="yogoch">Yog'och</option>
          <option value="plastic">Plastic</option>
          <option value="charm">Charm</option>
        </select>

        <label>description</label>
        <textarea name="description" cols="30" rows="10"></textarea>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
