
import React, { useState, useRef } from "react";
import { useGetUserQuery, useUpdateMutation } from '../Utility/authApi';

const PhoneNumberUpdate = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [update, { isLoading }] = useUpdateMutation();
  const { refetch } = useGetUserQuery();
  const modalRef = useRef(null);

  const addPhoneNumber = async () => {
    const obj = { phoneNumber };
    console.log(phoneNumber);

    const res = await update(obj);
    refetch();
    console.log("updated phone number", res);
  };

  const handleCloseClick = (event) => {
    event.preventDefault();
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => modalRef.current.showModal()}
      >
        Update Phone Number
      </button>
      <dialog id="my_modal_4" className="modal" ref={modalRef}>
        <div className="modal-box w-11/12 max-w-5xl flex justify-center items-center">
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered input-info w-full max-w-xs text-white"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <button
            className="btn btn-outline btn-primary"
            onClick={addPhoneNumber}
          >
            Add
          </button>
          <form method="dialog" onSubmit={handleCloseClick}>
            <button className="btn" type="submit">Close</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default PhoneNumberUpdate;