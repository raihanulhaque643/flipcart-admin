import React from 'react';
import { Col, Row } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";

const AddCategoryModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        categoryList,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        handleCategoryImage
    } = props;

    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={modalTitle}
      >
        <Input
          value={categoryName}
          placeholder={`Category Name`}
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
        />
        <select
          className="form-control"
          value={parentCategoryId}
          onChange={(e) => setParentCategoryId(e.target.value)}
        >
          <option>Select Category</option>
          {categoryList.map((option) => {
            return (
              <option value={option.value} key={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
        <input
          type="file"
          name="categoryImage"
          onChange={handleCategoryImage}
        />
      </Modal>
    );
  };

export default AddCategoryModal;