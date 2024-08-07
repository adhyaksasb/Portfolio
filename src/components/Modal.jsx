import clsx from "clsx";

const Modal = ({
  visible,
  onClose,
  title,
  description,
  skill,
  image,
  code,
  isDeployed,
  website,
}) => {
  const handleOnClose = (e) => {
    if (
      e.target.id === "container" ||
      e.target.id === "close" ||
      e.target.id === "X"
    )
      onClose();
  };
  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      id="container"
      tabindex="-1"
      aria-hidden="true"
      class="fixed bg-black bg-opacity-30 backdrop-blur-sm top-0 left-0 right-0 z-50 w-full h-full p-4 flex justify-center items-center overflow-x- overflow-y-auto md:inset-0 max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-900">
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-font1 dark:text-white">
              {title}
            </h3>
            <button
              onClick={handleOnClose}
              id="close"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                onClick={handleOnClose}
                id="X"
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-6 space-y-6">
            <img src={require(`../assets/${image}`)} alt="Project" />
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-200">
              {description}
            </p>
          </div>
          <div class="flex items-center p-6 space-x-2 justify-between border-t border-gray-200 rounded-b dark:border-gray-600">
            <div>
              <span class="text-white bg-[#151c42] hover:bg-[#191f44] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center float-left">
                <p className="cursor-default disableCaret">{skill}</p>
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href={code}
                class="flex text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center float-right"
              >
                <p className="disableCaret">Source Code</p>
              </a>
              <div className={clsx(!isDeployed && "cursor-not-allowed")}>
                <a
                  href={website}
                  class={clsx(
                    "flex text-white hover:bg-font2 dark:hover:bg-[#191f44] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center float-right",
                    !isDeployed
                      ? "pointer-events-none bg-gray-600"
                      : "bg-font1 dark:bg-[#784390]"
                  )}
                >
                  <p className="disableCaret">Go to Website</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
