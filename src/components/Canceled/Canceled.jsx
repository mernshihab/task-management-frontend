import React, { useEffect } from "react";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import { TaskListByStatus } from "../../API/API__REQUEST";
import { useSelector } from "react-redux";
import { DeleteToDo } from "../../helper/DeleteAlert";
import { UpdateToDO } from "../../helper/UpdateAlert";
const Canceled = () => {
  useEffect(() => {
    TaskListByStatus("Canceled");
  }, []);
  const CanceledData = useSelector((state) => state.task.Canceled);
  const deleteItem = (id) => {
    DeleteToDo(id).then((result) => {
      if (result === true) {
        TaskListByStatus("Canceled");
      }
    });
  };

  const statusChangeItem = (id, status) => {
    UpdateToDO(id, status).then((result) => {
      if (result === true) {
        TaskListByStatus("Canceled");
      }
    });
  };
  return (
    <div className="container cancel">
      <div className="row">
        <div className="col">
          <div className="header__data">
            <div>
              <h3>Task Cancel</h3>
            </div>
            <div className="d-flex">
              <input type="text" placeholder="User Email" />
              <button className="my__btn ">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-30">
        {CanceledData.map((item, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="card__item">
              <h6 className="my__btn animate__animated animate__fadeInUp">
                {item.title}
              </h6>
              <p className="my__btn animate__animated animate__fadeInUp">
                {item.description}
              </p>
              <div className="edit__option my__btn animate__animated animate__fadeInUp">
                <div className="">
                  <span>
                    <BsFillCalendar2CheckFill className="mr-5" />{" "}
                    {item.createdDate}
                  </span>
                  <span className="pl-10 edit__icons">
                    <FiEdit
                      onClick={statusChangeItem.bind(
                        this,
                        item._id,
                        item.status
                      )}
                      className="ml-10 icon text-success"
                    />
                    <MdDeleteSweep
                      onClick={() => deleteItem(item._id)}
                      className="ml-10 del_icon text-danger"
                    />
                  </span>
                </div>
                <div className="status_cancel">
                  <span
                    onClick={statusChangeItem.bind(this, item._id, item.status)}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Canceled;
