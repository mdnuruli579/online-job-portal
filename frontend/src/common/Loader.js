const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-box">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <div className="mt-3 fw-semibold">
          Please wait...
        </div>
      </div>
    </div>
  );
};

export default Loader;