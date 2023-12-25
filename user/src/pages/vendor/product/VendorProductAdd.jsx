// ProductAddForm.jsx
import AuthUser from "../../../components/AuthUser";
import React, { useState } from "react";
import axios from "axios";
import AppURL from "../../../api/AppURL";

const VendorProductAdd = () => {
  const { user } = AuthUser();

  const [formData, setFormData] = useState({
    user_id: user.id,
    title: "",
    price: "",
    special_price: "",
    category: "",
    subcategory: "",
    remark: "",
    status: "",
    product_code: "",
    short_description: "",
    long_description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/storeProduct",
        data
      );
      console.log(response.data);
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-lg-12 mx-auto">
            <div class="card">
              <div class="card-header py-3 bg-transparent">
                <div class="d-sm-flex align-items-center">
                  <h5 class="mb-2 mb-sm-0">Add New Product</h5>
                  <div class="ms-auto">
                    <button type="submit" class="btn btn-primary">
                      Publish Now
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-12 col-lg-8">
                    <div class="card shadow-none bg-light border">
                      <div class="card-body">
                        <div class="col-12">
                          <label class="form-label">Product title</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Product title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                          />
                        </div>

                        <div class="col-12">
                          <label class="form-label">Category</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label">Sub Category</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="subcategory"
                            name="subcategory"
                            value={formData.subcategory}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label">Images</label>
                          <input
                            class="form-control"
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label">Long description</label>
                          <textarea
                            class="form-control"
                            placeholder="Full description"
                            rows="4"
                            cols="4"
                            name="long_description"
                            value={formData.long_description}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <label class="form-label">Short description</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="short_description"
                            name="short_description"
                            value={formData.short_description}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-4">
                    <div class="card shadow-none bg-light border">
                      <div class="card-body">
                        <div class="row g-3">
                          <div class="col-12">
                            <label class="form-label">Price</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Price"
                              name="price"
                              value={formData.price}
                              onChange={handleChange}
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Special Price</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="special_price"
                              name="special_price"
                              value={formData.special_price}
                              onChange={handleChange}
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Remark</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Price"
                              name="remark"
                              value={formData.remark}
                              onChange={handleChange}
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Product Code</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="code"
                              name="product_code"
                              value={formData.product_code}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default VendorProductAdd;
