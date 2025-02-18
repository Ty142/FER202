import React, { useState } from "react";
import p1 from "../Images/st1.png";
import p2 from "../Images/st2.png";
import p3 from "../Images/st3.png";
import p4 from "../Images/st4.png";
import "bootstrap/dist/css/bootstrap.min.css";

// Component cho mỗi học sinh
const StudentCard = ({ name, studentId, city, imgSrc, radioName }) => {
  const [attendance, setAttendance] = useState(null);

  const handleAttendanceChange = (status) => {
    setAttendance(status);
  };

  return (
    <div className="col-md-4">
      <div className="border border-dark">
        <img src={imgSrc} className="w-100 stu-img" alt={name} />
        <div className="details">
          <div className="d-flex justify-content-center align-items-center mssv mt-3 fs-5">
            {studentId}
          </div>
          <div className="name mt-3 d-flex justify-content-between align-items-center ps-3 pe-3">
            <div className="fs-5">{name}</div>
            <div className="fs-5">{city}</div>
          </div>
          <div className="mb-3 mt-1 check-attendant d-flex justify-content-center align-items-center">
            <div className="present pe-5 me-5">
              <input
                className="present"
                name={radioName}
                type="radio"
                checked={attendance === "present"}
                onChange={() => handleAttendanceChange("present")}
              />
              <label className="fs-5">Present</label>
            </div>
            <div className="absent ps-5 ms-5">
              <input
                className="absent"
                name={radioName}
                type="radio"
                checked={attendance === "absent"}
                onChange={() => handleAttendanceChange("absent")}
              />
              <label className="fs-5">Absent</label>
            </div>
          </div>
          <div className="submit d-flex justify-content-center align-items-center mb-3">
            <button className="bg-orange text-white fs-5">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      {/* Banner */}
      <div className="container-s bg-orange">
        <div className="row justify-content-center">
          <img
            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/475346771_2357220154646832_396899804518326885_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=N0lm3ubG688Q7kNvgE6ptXQ&_nc_oc=Adj9tToMrWnOWl7q3YyZ_JkLxtDLLVgbHr18lElPKxv7hYcmfd8y-_eVa-vEkYAiLYSFgswVd7t5EIGgAFb078Xs&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&oh=03_Q7cD1gG8oIAc5-NQScWrew4n1XmYWQ3Njrre7m-PpWQDf8Ywsg&oe=67CD6C2C"
            className="w-100 ps-5 pe-5 mt-5 mb-5"
          />
        </div>
      </div>

      <div className="container-s">
        <div className="home-student d-flex justify-content-center align-items-center py-3 ms-5">
          <span className="text-orange">
            Home /<span className="text-black"> Student</span>
          </span>
        </div>

        {/* Title */}
        <div className="mt-5 pt-5 fs-1 d-flex justify-content-center align-items-center fw-bold">
          Student Detail
        </div>

        {/* Student Cards */}
        <div className="mb-5">
          <div className="row stu-detail-items d-flex ps-5 ms-5 me-5 pe-5 justify-content-center">
            {/* Tạo các học sinh bằng component */}
            <StudentCard
              name="Châu Vĩnh Thiện"
              studentId="DE180454"
              city="Da Nang"
              imgSrc={p1}
              radioName="Radio1"
            />
            <StudentCard
              name="Nguyễn Hữu Quốc Khánh"
              studentId="DE181168"
              city="Da Nang"
              imgSrc={p4}
              radioName="Radio2"
            />
          </div>

          <div className="row stu-detail-items d-flex ps-5 ms-5 me-5 pe-5 justify-content-center">
            <StudentCard
              name="Đỗ Phúc Nguyên"
              studentId="DE181468"
              city="Da Nang"
              imgSrc={p2}
              radioName="Radio3"
            />
            <StudentCard
              name="Lê Hoàng Minh"
              studentId="DE180468"
              city="Da Nang"
              imgSrc={p3}
              radioName="Radio4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
