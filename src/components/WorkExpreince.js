import React from 'react';
import { WorkExpreinceData } from './WorkExpreinceData';

function WorkExpreince() {
  return (
    <div className="work-expreince container">
      <div className="col-md-12 p-4">
        <h1>My Work Experience</h1>
        <div className="col-md-12 text-center">
          {WorkExpreinceData.map((item, index) => {
            return (
              <div key={index} className={item.cName}>
                <div className="card-text row d-flex justify-content-center work-expreince-card">
                  <div className="col-md-3 p-4">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded-circle p-2"
                    />
                  </div>
                  <div className="col-md-3 p-5 about-text">
                    <h4>{item.title}</h4>
                    <h5>{item.role}</h5>
                    <h6>
                      {item.begin_date} - {item.end_date}
                    </h6>
                  </div>
                  <div className="col-md-6 p-4">
                    <p>{item.about_role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkExpreince;
