import "./Admin.css"
import React, { useState } from "react";
import AIDescriptionEnhancer from "../AI/AI.js"


const ProductCard = () => {
  const [items, setItems] = useState([
    { id: 1, ProductName: "Joystick", Description: "The north coat", Price: 250, Tag: "-40%", DiscountedPrice: 120, Category: "Flash Sales", Colors: ["Red"] },
    { id: 2, ProductName: "Wireless Mouse", Description: "Ergonomic design with smooth scrolling", Price: 50, Tag: "New ", DiscountedPrice: 45, Category: "Explore products", Colors: ["Black"] },
    { id: 3, ProductName: "Gaming Keyboard", Description: "RGB backlit with customizable keys", Price: 100, Tag: "", DiscountedPrice: 85, Category: "Best selling", Colors: ["Multicolor"] },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const [formValues, setFormValues] = useState({
    id: "",
    ProductName: "",
    Description: "",
    Price: "",
    Tag: "",
    DiscountedPrice: "",
    Category: "",
    Colors: [],
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // Update the field that was changed
  };

  // Toggle form visibility for adding/editing items
  const handleButtonClick = (item = null) => {
    setIsFormVisible(!isFormVisible);
    if (item) {
      setIsEditing(true);
      setFormValues(item);
      setCurrentItem(item);
    } else {
      setIsEditing(false);
      setFormValues({
        id: "",
        ProductName: "",
        Description: "",
        Price: "",
        Tag: "",
        DiscountedPrice: "",
        Category: "",
        Colors: [],
      });
    }
  };

  const handleButtonClickEmpty = (item = null) => {
    setIsFormVisible(true);
    if (item) {
      setIsEditing(true);
      setFormValues({ ...item });  // Populate form with current item data for editing
      setCurrentItem(item);
    } else {
      setIsEditing(false);
      setFormValues({
        id:"",
        ProductName: "",
        Description: "",
        Price: "",
        Tag: "",
        DiscountedPrice: "",
        Category: "",
        Colors: [],
      });  // Reset form values to empty for adding a new product
      setCurrentItem(null);  // Clear current item as we're adding a new one
    }
  };
  

const handleUpdate = (e) => {
  

  // Update the item in the list
  setItems((prevItems) =>
    prevItems.map((item) =>
      item.id === currentItem.id ? { ...item, ...formValues } : item
    )
  );

  setIsFormVisible(false); // Hide form after update
};

const handleAddRow = (e) => {

  if (!formValues.id || !formValues.ProductName || !formValues.Description || !formValues.Price || !formValues.Category || !formValues.Colors) {
    alert("Please fill in all required fields."); // Optional: show an alert if some fields are missing
    return; // Prevent the row from being added
  }
 
  const newItem = {
    ...formValues
   
  };

  setItems([...items, newItem]); // Add the new item to the array
  setFormValues({
    id:"",
    ProductName: "",
    Description: "",
    Price: "",
    Tag: "",
    DiscountedPrice: "",
    Category: "",
    Colors: [],
  });
  setIsFormVisible(false); // Hide the form after adding the row
};

 

  // Delete item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Toggle selected color
  const handleColorSelect = (color) => {
    setFormValues((prevValues) => {
      const updatedColors = prevValues.Colors.includes(color)
        ? prevValues.Colors.filter((c) => c !== color)  // Deselect the color
        : [...prevValues.Colors, color];  // Select the color
      return { ...prevValues, Colors: updatedColors };
    });
  };

  return (
    <div className="panel__component">
     <button className="add__product__btn" onClick={() => handleButtonClickEmpty() }>Add Product</button>

    <table className="row">
      <thead className="product__descriptions">
        <tr className="product__row">
          <th className="underlined__row">ID</th>
          <th className="underlined__row">Product Name</th>
          <th className="underlined__row">Description</th>
          <th className="underlined__row">Price</th>
          <th className="underlined__row">Tag </th>
          <th className="underlined__row">Discounted Price</th>
          <th className="underlined__row">Category</th>
          <th className="underlined__row">Colors</th>
          <th className="underlined__row">Operations</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.ProductName}</td>
            <td className="max-width__cell">{item.Description}</td>
            <td>${item.Price}</td>
            <td>{item.Tag}</td>
            <td>${item.DiscountedPrice}</td>
            <td>
              <p className="category__tag">{item.Category}</p>
            </td>
            <td>
              {/* Render the color circles here */}
              <div className="color-circle-container" style={{display:"flex", justifyContent:"space-evenly"}}>
                {item.Colors.map((color) => (
                  <div
                    key={color}
                    className="color-circle"
                    style={{
                      backgroundColor: color.toLowerCase(),
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      margin: "5px 0",

                    }}
                  ></div>
                ))}
              </div>
            </td>
            <td className="operations">
              <button className="edit__btn" onClick={() => handleButtonClick(item)}>Edit</button>
              <button className="delete__btn" onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}


{isFormVisible && (
  <div className="popup">
    <div className="popup-content">
      <h2>{isEditing ? "Edit Product" : "Add Product"}</h2>
      
      <div className="API__section">
        <AIDescriptionEnhancer descriptionForm={formValues.Description}></AIDescriptionEnhancer>
      </div>

      <form onSubmit={handleUpdate}>
        <div className="form-container">
          <label>ID</label><br/>
          <input type="number" name="id" value={formValues.id} onChange={handleInputChange} required></input> 
          <br/>
          <label>Product Name:</label>
          <br />
          <input
            type="text"
            name="ProductName"
            value={formValues.ProductName}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Description:(Preview)</label>
          <br />
          <textarea className="description__preview"
            type="text"
            name="Description"
            value={formValues.Description}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Price:</label>
          <br />
          <input
            name="Price"
            type="number"
            placeholder="$"
            min="1"
            value={formValues.Price}
            onChange={handleInputChange}
            required
          />
          <br />
          <label>Discounted Price:</label>
          <br />
          <input
            name="DiscountedPrice"
            type="number"
            placeholder="$"
            min="0"
            value={formValues.DiscountedPrice}
            onChange={handleInputChange}
          />
          <br />
          <label>Category:</label>
          <br />
          <select
            name="Category"
            value={formValues.Category}
            onChange={handleInputChange}
            required
          >
            <option value="Best Selling">Best Selling</option>
            <option value="Explore Products">Explore Products</option>
            <option value="Flash Sales">Flash Sales</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label>Tag:</label>
          <br />
          <select
            name="Tag"
            value={formValues.Tag}
            onChange={handleInputChange}
          >
            <option value="">Select a Tag</option>
            <option value="-10%">-10%</option>
            <option value="-20%">-20%</option>
            <option value="-30%">-30%</option>
            <option value="-40%">-40%</option>
            <option value="-50%">-50%</option>
            <option value="New">New</option>
          </select>
          <br />
          <label>Colors:</label>
          <br />
          <div className="color-palette">
            {["Red", "Blue", "Green", "Yellow", "Purple"].map((color) => (
              <span
                key={color}
                className={`color-selector ${color.toLowerCase()}`}
                style={{
                  backgroundColor: color.toLowerCase(),
                  width: "20px",
                  height: "20px",
                  borderRadius: "20px",
                  display: "inline-block",
                  margin: "5px",
                  cursor: "pointer",
                  border: formValues.Colors.includes(color)
                    ? "2px solid black"
                    : "none",
                }}
                onClick={() => handleColorSelect(color)}
              ></span>
            ))}
          </div>
          <br />

          {isEditing ? (
          <button className="update__btn" type="submit">Update</button>
           ) : (
            <button onClick={handleAddRow} type="button">Add</button>
          )}

          {/* Close button */}
          <button
            className="close__btn"
            type="button"
            onClick={() => setIsFormVisible(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      </tbody>
    </table>
    </div>
  );
};

export default ProductCard;
