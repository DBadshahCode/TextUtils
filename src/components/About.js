import React from "react";

export default function About() {

    
  return (
    <div className="container my-5 p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Text Utils</h1>
        <span className="col-md-8 fs-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quis,
          nam dolor eius deleniti distinctio adipisci voluptas laboriosam
          maiores inventore culpa suscipit placeat numquam nostrum provident.
          Aspernatur pariatur eos quibusdam?
        </span><br />
        <button className="btn btn-info btn-lg my-3" id="rm" type="button">
          Readmore
        </button>
      </div>
    </div>
  );
}
