import React from "react";

const PageLoader = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background:
          "linear-gradient(135deg, #171717 0%, #292524 55%, #3f1d2e 100%)",
      }}
    >
      <div className="text-center">

        {/* Spinner */}
        <div
          className="position-relative mx-auto mb-4"
          style={{
            width: "80px",
            height: "80px",
          }}
        >

          {/* Outer ring */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
            style={{
              border: "3px solid rgba(214, 179, 106, 0.15)",
              borderTop: "3px solid #d6b36a",
              animation: "spin 1s linear infinite",
            }}
          />

          {/* Inner ring */}
          <div
            className="position-absolute rounded-circle"
            style={{
              width: "54px",
              height: "54px",
              top: "13px",
              left: "13px",
              border: "2px solid rgba(159, 49, 87, 0.2)",
              borderBottom: "2px solid #9f3157",
              animation: "spinReverse 0.8s linear infinite",
            }}
          />

          {/* Center */}
          <div
            className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "18px",
              height: "18px",
              background: "#d6b36a",
              boxShadow:
                "0 0 20px rgba(214, 179, 106, 0.45)",
            }}
          />

        </div>


        {/* Logo */}
        <h4 className="fw-bold text-white mb-1">
          Job
          <span style={{ color: "#d6b36a" }}>
            Portal
          </span>
        </h4>


        {/* Loading text */}
        <p
          className="mb-0"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "14px",
          }}
        >
          Loading your experience
          <span className="loading-dots">
            ...
          </span>
        </p>

      </div>


      {/* Animations */}
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spinReverse {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }

          .loading-dots {
            display: inline-block;
            width: 18px;
            text-align: left;
            overflow: hidden;
            vertical-align: bottom;
            animation: dots 1.4s steps(4, end) infinite;
          }

          @keyframes dots {
            0% {
              width: 0;
            }

            25% {
              width: 5px;
            }

            50% {
              width: 10px;
            }

            75% {
              width: 15px;
            }

            100% {
              width: 18px;
            }
          }
        `}
      </style>

    </div>
  );
};

export default PageLoader;