export default function Price() {
  return (
    <div className="bg-white max-w-[320px] my-4 mx-auto py-8 px-7 border-[0.5px] border-gray-300 rounded-xl">
      <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
        Pro Plan
      </span>
      <h1 className="text-xl font-medium my-4 ">Everything you need to ship</h1>
      <p className="text-gray-500 text-sm">
        For growing teams and serious side projects.
      </p>
      <p className="text-gray-500 my-4 text-sm">
        <span className="text-3xl font-medium">$29</span>/month
      </p>
      <button className="w-full my-4 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 ">
        Get started
      </button>
      <hr className=" mb-4 text-gray-400" />

      <span className="text-xs  uppercase tracking-widest text-gray-400 font-semibold">
        INCLUDES
      </span>

      <div class="flex flex-col mt-4 gap-3">
        <div class="flex items-start gap-3">
          <svg
            class="w-5 h-5 text-green-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-sm text-gray-700">Unlimited projects</span>
        </div>

        <div class="flex items-start gap-3">
          <svg
            class="w-5 h-5 text-green-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-sm text-gray-700">Advanced analytics</span>
        </div>

        <div class="flex items-start gap-3">
          <svg
            class="w-5 h-5 text-green-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-sm text-gray-700">24/7 Priority support</span>
        </div>

        <div class="flex items-start gap-3">
          <svg
            class="w-5 h-5 text-green-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-sm text-gray-700">Custom domains</span>
        </div>

        <div class="flex items-start gap-3">
          <svg
            class="w-5 h-5 text-green-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-sm text-gray-700">Team collaboration tools</span>
        </div>
      </div>
    </div>
  );
}
