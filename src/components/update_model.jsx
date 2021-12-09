import { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const Update = ({ items, setItems, buttonClick }) => {
  const [updateitem, setUpdateitem] = useState({
    product_name: "",
    quantity: "",
  });
  const [modelclose, setModelclose] = useState(true);
  const changeHandler = (e) => {
    setUpdateitem({ ...updateitem, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    items.map((item, index) => {
      if (item.index === index) {
        setUpdateitem({ ...items, updateitem });
      }
    });
    setItems([updateitem]);

    setModelclose(false);
    buttonClick();
  };
  return (
    <div>
      <Modal isOpen={modelclose} size="lg">
        <ModalHeader></ModalHeader>
        <ModalBody>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="product_name"
              name="product_name"
              onChange={changeHandler}
            />
            <br />
            <input
              type="text"
              placeholder="quantity"
              name="quantity"
              onChange={changeHandler}
            />
            <br />

            <input type="submit" value="save" />
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Update;
