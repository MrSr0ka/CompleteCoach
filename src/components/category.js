import React, { useState } from "react";
import face from "./face.jpg";
import Categories from "./categories";

const Category = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  return (
    <>
      <h1 className="text-center text-info">
        Use buttons to search tutors per Faculty
      </h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="cold-md-3">
            <button
              className="btn btn-warning w-35 mr-2 ml-5"
              onClick={() => filterResult("Accounting")}
            >
              Accounting
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Arts")}
            >
              Arts
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Biology")}
            >
              Biology
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Business")}
            >
              Business
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Chemistry")}
            >
              Chemistry
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Computing")}
            >
              Computing
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Maths")}
            >
              Maths
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Politics")}
            >
              Politics
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Physics")}
            >
              Physics
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Psychology")}
            >
              Psychology
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => filterResult("Sociology")}
            >
              Sociology
            </button>
            <button
              className="btn btn-warning w-35 mr-2"
              onClick={() => setData(Categories)}
            >
              All Tutors
            </button>
          </div>
          <div className="cold-md-9"></div>
          <div className="row">
            {data.map((values) => {
              const { id, title, price, image, description } = values;
              return (
                <>
                  <div className="col-md-4" key={id}>
                    <div className="card mt-4 ml-5">
                      <img
                        className="card-img-top"
                        src={image}
                        alt="Face shot"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>Price: {price}</p>
                        <a href="#" className="btn btn-primary">
                          More details
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
