import React from "react";
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
    handleCategoryImage,
  } = props;

  return (
    <Modal show={show} handleClose={handleClose} modalTitle={modalTitle}>
      <Row>
        <Col>
          <Input
            className="form-control-sm"
            value={categoryName}
            placeholder={`Category Name`}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          />
        </Col>
        <Col>
          <select
            className="form-control form-control-sm"
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
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default AddCategoryModal;
