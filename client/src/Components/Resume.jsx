import React from "react";

const Resume = () => {
  return (
    <div>
      {/* intro */}
      <div className="tw-p-4 tw-grid  tw-grid-flow-col">
        <figure className=" tw-border-2 tw-border-red-900  tw-w-20 tw-h-20 tw-rounded-full ">
          <img
            className='=" tw-rounded-full'
            src="https://i.pravatar.cc/500?img=32"
            alt="mypic"
            srcset=""
          />
        </figure>
        <div className=" tw-col-span-6">
          <p className=" tw-text-2xl tw-pt-3 tw-uppercase">jai mata di</p>
          <p className=" ">BF2017</p>
        </div>
      </div>
      {/* discription  */}
      <div>
        <p>full stack devoloper </p>
      </div>

      {/* education project internship */}
      <div>
        <div>
          <h3>EDUCATION</h3>
          <p>eduction{}</p>
        </div>
        <div>
          <h3>PROJECT</h3>
          <p>this is my project </p>
        </div>
        <div>
          <h3>TRAINING AND INTERNSHIP</h3>
        </div>
      </div>
      {/* skill experience  */}
      <div>
        <div>skill</div>
        <div>experience</div>
      </div>
    </div>
  );
};

export default Resume;
