import React from "react";

export default function CardHeader(props: { selectedSection; setSelectedSection }) {
  return (
    <div className="card-header" style={{ background: "radial-gradient(circle at top left, #f03985, #5144f8)" }}>
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
          <div
            onClick={() => props.setSelectedSection("private")}
            className={`nav-link hover:cursor-pointer ${props.selectedSection === "private" ? "active" : "text-white"}`}
            role="tab"
            aria-controls="history"
            aria-selected="false"
          >
            <i className="fi fi-sr-unlock"></i> Private
          </div>
        </li>
        <li className="nav-item">
          <div
            onClick={() => props.setSelectedSection("presale")}
            className={`nav-link hover:cursor-pointer ${props.selectedSection === "presale" ? "active" : "text-white"}`}
            role="tab"
            aria-controls="deals"
            aria-selected="false"
          >
            <i className="fi fi-sr-lock"></i> Presale
          </div>
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
  );
}
