import React from "react";
import { Col, Row } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";

const UpdateCategoriesModal = (props) => {
  const {
    show,
    handleClose,
    modalTitle,
    size,
    expandedArray,
    checkedArray,
    handleCategoryInput,
    categoryList,
    onSubmit
  } = props;

  console.log(expandedArray, checkedArray);

  return (
    <Modal
      show={show}
      handleClose={handleClose}
      onSubmit={onSubmit}
      modalTitle={modalTitle}
      size={size}
    >
      {expandedArray.length > 0 && (
        <span style={{ fontWeight: "bold" }}>Expanded</span>
      )}
      {expandedArray.length > 0 &&
        expandedArray.map((item, index) => (
          <Row key={index}>
            <Col>
              <Input
                value={item.name}
                placeholder={`Category Name`}
                onChange={(e) => {
                  handleCategoryInput(
                    "name",
                    e.target.value,
                    index,
                    "expanded"
                  );
                }}
              />
            </Col>
            <Col>
              <select
                className="form-control"
                value={item.parentId}
                onChange={(e) => {
                  handleCategoryInput(
                    "parentId",
                    e.target.value,
                    index,
                    "expanded"
                  );
                }}
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
            <Col>
              <select
                value={item.type}
                onChange={(e) => {
                  handleCategoryInput(
                    "type",
                    e.target.value,
                    index,
                    "expanded"
                  );
                }}
                className="form-control"
              >
                <option value="">Select Type</option>
                <option value="store">Store</option>
                <option value="product">Product</option>
                <option value="page">Page</option>
              </select>
            </Col>
          </Row>
        ))}

      {checkedArray.length > 0 && (
        <span style={{ fontWeight: "bold" }}>Checked</span>
      )}
      {checkedArray.length > 0 &&
        checkedArray.map((item, index) => (
          <Row key={index}>
            <Col>
              <Input
                value={item.name}
                placeholder={`Category Name`}
                onChange={(e) => {
                  handleCategoryInput("name", e.target.value, index, "checked");
                }}
              />
            </Col>
            <Col>
              <select
                className="form-control"
                value={item.parentId}
                onChange={(e) => {
                  handleCategoryInput(
                    "parentId",
                    e.target.value,
                    index,
                    "checked"
                  );
                }}
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
            <Col>
              <select
                value={item.type}
                onChange={(e) => {
                  handleCategoryInput("type", e.target.value, index, "checked");
                }}
                className="form-control"
              >
                <option value="">Select Type</option>
                <option value="store">Store</option>
                <option value="product">Product</option>
                <option value="page">Page</option>
              </select>
            </Col>
          </Row>
        ))}
    </Modal>
  );
};

export default UpdateCategoriesModal;
