const Spinner = () => (
  <div className='loader'>
    <style jsx>{`
      .loader {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #0bb489;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Spinner;
