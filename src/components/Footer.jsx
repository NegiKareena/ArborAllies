export default function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
        {/* The ticker strip */}
        <div className="ticker-container dark:bg-gray-800">
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {/* Repeat this block for each item */}
              <div className="ticker-item">
                <span className="text-red-500 text-xl">❤️</span>
                <span className="ml-2">Little Leaves, Big Smiles</span>
              </div>
              <div className="ticker-item">
                <span className="text-red-500 text-xl">❤️</span>
                <span className="ml-2">Nature's Little Hugs</span>
              </div>
              <div className="ticker-item">
                <span className="text-red-500 text-xl">❤️</span>
                <span className="ml-2">Grow with Love</span>
              </div>
              <div className="ticker-item">
                <span className="text-red-500 text-xl">❤️</span>
                <span className="ml-2">Petals of Joy</span>
              </div>
              <div className="ticker-item">
                <span className="text-red-500 text-xl">❤️</span>
                <span className="ml-2">Leafy Happiness</span>
              </div>
              <div className="ticker-item">
                <span className="text-red-500 text-xl">❤️</span>
                <span className="ml-2">Sprout a Smile</span>
              </div>
              {/* Repeat as needed */}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <nav>
          <div className="grid grid-flow-col gap-4 mt-6">
            <a href="https://twitter.com" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                ></path>
              </svg>
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                ></path>
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                ></path>
              </svg>
            </a>
          </div>
        </nav>

        <aside className="pt-4">
          <p>
           Developed By Team ArborAllies:)
          </p>
        </aside>
      </footer>

      <style jsx>{`
        .ticker-container {
          width: 100%; /* Full width */
          overflow: hidden;
          background: #f8f8f8; /* Light background color */
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem; /* Space between ticker and footer content */
        }

        .ticker-wrapper {
          display: flex;
          align-items: center;
          height: 50px; /* Adjust the height as needed */
        }

        .ticker-content {
          display: flex;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          padding: 0 20px;
          font-size: 1rem; /* Adjust the font size as needed */
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .dark .ticker-container {
          background: #333; /* Dark background color for dark mode */
        }
      `}</style>
    </div>
  );
}
