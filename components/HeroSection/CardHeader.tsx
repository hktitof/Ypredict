import React from 'react'

export default function CardHeader() {
  return (
    <div
    className="card-header"
    style={{ background: "radial-gradient(circle at top left, #f03985, #5144f8)" }}
  >
    <ul className="nav nav-tabs card-header-tabs justify-content-center" id="bologna-list" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link disabled"
          style={{ color: "white" }}
          href="#seed"
          role="tab"
          aria-controls="description"
          aria-selected="true"
        >
          {" "}
          <i className="fi fi-ss-badge-check"></i> Seed
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link active"
          href="#private"
          role="tab"
          aria-controls="history"
          aria-selected="false"
        >
          <i className="fi fi-sr-unlock"></i> Private
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#presale" role="tab" aria-controls="deals" aria-selected="false">
          <i className="fi fi-sr-lock"></i> Presale 
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          style={{ color: "white" }}
          href="#public"
          role="tab"
          aria-controls="deals"
          aria-selected="false"
        >
          <i className="fi fi-sr-lock"></i>
          Public
        </a>
      </li>
    </ul>
  </div>
  )
}
