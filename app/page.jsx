import Image from "next/image";

import img1 from "../public/1.jpeg";
import img2 from "../public/2.jpeg";
import img3 from "../public/3.jpeg";

export default function Home() {
  let categories = [
    {
      image: "cat1.jpeg",
      name: "Dairy, Bread & Eggs",
    },
    {
      image: "cat2.jpeg",
      name: "Snack & Munchies",
    },
    {
      image: "cat3.jpeg",
      name: "Bakery & Biscuits",
    },
    {
      image: "cat4.jpeg",
      name: "Instant Food",
    },
    {
      image: "cat5.jpeg",
      name: "Tea, Coffee & Drinks",
    },
    {
      image: "cat6.jpeg",
      name: "Fruits & Vegetables",
    },
    {
      image: "cat7.jpeg",
      name: "Cold Drinks & Juices",
    },
    {
      image: "cat8.jpeg",
      name: "Chicken, Meat & Fish",
    },
    {
      image: "cat9.jpeg",
      name: "Baby Care",
    },
    {
      image: "cat10.jpeg",
      name: "Cleaning Essentials",
    },
    {
      image: "cat11.jpeg",
      name: "Pet Care",
    },
    {
      image: "cat12.jpeg",
      name: "Atta, Rice & Dal",
    },
  ];

  let allCat = [
    "Vegetables & Fruits",
    "Breakfast & instant food",
    "Bakery & Biscuits",
    "Atta, rice & dal",
    "Sauces & spreads",
    "Organic & gourmet",
    "Baby care",
    "Cleaning essentials",
    "Personal care",
    "Dairy, bread & eggs",
    "Cold drinks & juices",
    "Tea, coffee & drinks",
    "Masala, oil & more",
    "Chicken, meat & fish",
    "Paan corner",
    "Pharma & wellness",
    "Home & office",
    "Pet care",
  ];

  let knowUs = ["Company", "About", "Blog", "Help Center", "Our Value"];

  let programs = [
    "Freshcart programs",
    "Gift Cards",
    "Promos & Coupons",
    "Freshcart Ads",
    "Careers",
  ];

  let consumers = [
    "Payments",
    "Shipping",
    "Product Returns",
    "FAQ",
    "Shop Checkout",
  ];

  let shoppers = [
    "Shopper Opportunities",
    "Become a Shopper",
    "Earnings",
    "Ideas & Guides",
    "New Retailers",
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between px-[16px] my-[20px]">
        <div className=" flex items-center justify-center">
          <div className="h-[40px] w-[340px] flex flex-auto items-center justify-between px-[17px] border border-neutral-200 rounded-bl-lg rounded-tl-lg text-sm font-medium">
            All Categories
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.20001 1.04999L5.70001 5.54999L10.2 1.04999"
                stroke="#21313C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="h-[40px] w-[800px] flex items-center justify-start border border-neutral-200 px-[17px] text-sm text-neutral-400">
            Search for products
          </div>
          <div className="h-[40px] w-[50px] flex flex-auto items-center justify-center border border-neutral-200 rounded-br-lg rounded-tr-lg">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33333 13.6467C10.2789 13.6467 12.6667 11.2589 12.6667 8.31334C12.6667 5.36783 10.2789 2.98001 7.33333 2.98001C4.38781 2.98001 2 5.36783 2 8.31334C2 11.2589 4.38781 13.6467 7.33333 13.6467Z"
                stroke="#21313C"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 14.98L11.1 12.08"
                stroke="#21313C"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="h-[40px] w-[140px] flex items-center justify-center gap-2 px-2 border border-neutral-200 rounded-lg ">
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0202 5.99593C11.0202 4.60854 10.5276 3.42217 9.54221 2.43681C8.55685 1.45145 7.37047 0.958765 5.98309 0.958765C4.5957 0.958765 3.40932 1.45145 2.42396 2.43681C1.4386 3.42217 0.945923 4.60854 0.945923 5.99593C0.945923 6.73692 1.10752 7.48185 1.43072 8.23073C1.75392 8.9796 2.14806 9.626 2.61315 10.1699C3.07824 10.7138 3.54727 11.2065 4.02025 11.648C4.49322 12.0894 4.88736 12.4205 5.20268 12.6412L5.6993 12.9723L5.98309 13.1615L6.26687 12.9723C6.39299 12.8935 6.56248 12.7791 6.77531 12.6294C6.98815 12.4796 7.37047 12.1564 7.92227 11.6598C8.47408 11.1632 8.95887 10.6587 9.37667 10.1463C9.79446 9.63388 10.1728 8.99931 10.5118 8.24255C10.8508 7.48579 11.0202 6.73692 11.0202 5.99593ZM10.027 5.99593C10.027 6.62656 9.86146 7.28084 9.53038 7.95877C9.1993 8.63669 8.78151 9.24762 8.277 9.79154C7.7725 10.3355 7.33894 10.773 6.97633 11.104C6.61372 11.4351 6.28263 11.711 5.98309 11.9317C5.63624 11.6795 5.27363 11.3799 4.89525 11.0331C4.51687 10.6862 4.08725 10.2448 3.6064 9.70877C3.12554 9.17273 2.72745 8.57363 2.41214 7.91147C2.09682 7.24931 1.93917 6.61079 1.93917 5.99593C1.93917 4.89232 2.33331 3.94638 3.1216 3.15809C3.90989 2.3698 4.86372 1.97566 5.98309 1.97566C7.10245 1.97566 8.05628 2.3698 8.84457 3.15809C9.63286 3.94638 10.027 4.89232 10.027 5.99593ZM5.2618 6.71721C5.2618 6.71721 5.21253 6.66794 5.114 6.56941C5.01546 6.47087 4.96619 6.28365 4.96619 6.00775C4.96619 5.73185 5.06473 5.49536 5.2618 5.29829C5.45887 5.10122 5.6993 5.00268 5.98309 5.00268C6.26687 5.00268 6.5073 5.10122 6.70437 5.29829C6.90144 5.49536 6.99998 5.73185 6.99998 6.00775C6.99998 6.28365 6.90144 6.52014 6.70437 6.71721C6.5073 6.91428 6.26687 7.01282 5.98309 7.01282C5.6993 7.01282 5.45887 6.91428 5.2618 6.71721ZM4.56417 4.57701C4.56417 4.57701 4.46563 4.67554 4.26856 4.87262C4.07149 5.06969 3.97295 5.44807 3.97295 6.00775C3.97295 6.56744 4.17002 7.04435 4.56417 7.4385C4.95831 7.83264 5.43128 8.02971 5.98309 8.02971C6.53489 8.02971 7.00786 7.83264 7.402 7.4385C7.79615 7.04435 7.99322 6.56744 7.99322 6.00775C7.99322 5.44807 7.79615 4.97115 7.402 4.57701C7.00786 4.18286 6.53489 3.98579 5.98309 3.98579C5.43128 3.98579 4.95831 4.18286 4.56417 4.57701Z"
              fill="#5C6C75"
            />
          </svg>
          <div className="text-neutral-400 text-sm font-medium">
            Pick Location
          </div>
        </div>
        <div className="h-[40px] w-[105px] flex items-center justify-between">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9268 2.81667C16.5012 2.39084 15.9958 2.05304 15.4396 1.82257C14.8834 1.5921 14.2872 1.47348 13.6851 1.47348C13.083 1.47348 12.4869 1.5921 11.9307 1.82257C11.3744 2.05304 10.8691 2.39084 10.4435 2.81667L9.56012 3.7L8.67678 2.81667C7.81704 1.95692 6.65098 1.47393 5.43512 1.47393C4.21926 1.47393 3.05319 1.95692 2.19345 2.81667C1.33371 3.67641 0.850708 4.84247 0.850708 6.05833C0.850708 7.2742 1.33371 8.44026 2.19345 9.3L3.07678 10.1833L9.56012 16.6667L16.0435 10.1833L16.9268 9.3C17.3526 8.87437 17.6904 8.36901 17.9209 7.8128C18.1513 7.25658 18.27 6.66041 18.27 6.05833C18.27 5.45626 18.1513 4.86009 17.9209 4.30387C17.6904 3.74766 17.3526 3.2423 16.9268 2.81667Z"
              stroke="#5C6C75"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9267 18.295V16.6283C16.9267 15.7443 16.5755 14.8964 15.9504 14.2713C15.3253 13.6462 14.4774 13.295 13.5934 13.295H6.92672C6.04266 13.295 5.19482 13.6462 4.56969 14.2713C3.94457 14.8964 3.59338 15.7443 3.59338 16.6283V18.295"
              stroke="#5C6C75"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.26 9.96168C12.1009 9.96168 13.5933 8.4693 13.5933 6.62835C13.5933 4.7874 12.1009 3.29501 10.26 3.29501C8.41902 3.29501 6.92664 4.7874 6.92664 6.62835C6.92664 8.4693 8.41902 9.96168 10.26 9.96168Z"
              stroke="#5C6C75"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_54)">
              <path
                d="M5.96008 2.64166L3.46008 5.975V17.6417C3.46008 18.0837 3.63568 18.5076 3.94824 18.8202C4.2608 19.1327 4.68472 19.3083 5.12675 19.3083H16.7934C17.2354 19.3083 17.6594 19.1327 17.9719 18.8202C18.2845 18.5076 18.4601 18.0837 18.4601 17.6417V5.975L15.9601 2.64166H5.96008Z"
                stroke="#5C6C75"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.46008 5.97501H18.4601"
                stroke="#5C6C75"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.2934 9.30835C14.2934 10.1924 13.9422 11.0403 13.3171 11.6654C12.6919 12.2905 11.8441 12.6417 10.96 12.6417C10.076 12.6417 9.22814 12.2905 8.60302 11.6654C7.9779 11.0403 7.62671 10.1924 7.62671 9.30835"
                stroke="#5C6C75"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_54">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.960083 0.975006)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* Nav */}
      <div className="w-full h-[50px] bg-green-600 px-[40px] py-[8px] flex items-center justify-start gap-4 text-white text-sm">
        <div className="flex items-center justify-center font-medium gap-2 mr-4">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 2.97H2V7.63667H6.66667V2.97Z"
              stroke="white"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 2.97H9.33331V7.63667H14V2.97Z"
              stroke="white"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 10.3033H9.33331V14.97H14V10.3033Z"
              stroke="white"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66667 10.3033H2V14.97H6.66667V10.3033Z"
              stroke="white"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          All Departments
        </div>

        <div className="flex items-center justify-start gap-2">
          Home
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02014 0.476105L0.609985 0.886261L4.10999 4.38626L4.52014 4.79642L4.9303 4.38626L8.4303 0.886261L8.02014 0.476105L7.60999 0.0659485L4.52014 3.15579L1.4303 0.0659485L1.02014 0.476105Z"
              fill="#C1C7C6"
            />
          </svg>
        </div>

        <div className="flex items-center justify-start gap-2">
          Shop
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02014 0.476105L0.609985 0.886261L4.10999 4.38626L4.52014 4.79642L4.9303 4.38626L8.4303 0.886261L8.02014 0.476105L7.60999 0.0659485L4.52014 3.15579L1.4303 0.0659485L1.02014 0.476105Z"
              fill="#C1C7C6"
            />
          </svg>
        </div>

        <div className="flex items-center justify-start gap-2">
          Stores
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02014 0.476105L0.609985 0.886261L4.10999 4.38626L4.52014 4.79642L4.9303 4.38626L8.4303 0.886261L8.02014 0.476105L7.60999 0.0659485L4.52014 3.15579L1.4303 0.0659485L1.02014 0.476105Z"
              fill="#C1C7C6"
            />
          </svg>
        </div>

        <div className="flex items-center justify-start gap-2">
          Mega menu
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02014 0.476105L0.609985 0.886261L4.10999 4.38626L4.52014 4.79642L4.9303 4.38626L8.4303 0.886261L8.02014 0.476105L7.60999 0.0659485L4.52014 3.15579L1.4303 0.0659485L1.02014 0.476105Z"
              fill="#C1C7C6"
            />
          </svg>
        </div>

        <div className="flex items-center justify-start gap-2">
          Pages
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02014 0.476105L0.609985 0.886261L4.10999 4.38626L4.52014 4.79642L4.9303 4.38626L8.4303 0.886261L8.02014 0.476105L7.60999 0.0659485L4.52014 3.15579L1.4303 0.0659485L1.02014 0.476105Z"
              fill="#C1C7C6"
            />
          </svg>
        </div>

        <div className="flex items-center justify-start gap-2">
          Account
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02014 0.476105L0.609985 0.886261L4.10999 4.38626L4.52014 4.79642L4.9303 4.38626L8.4303 0.886261L8.02014 0.476105L7.60999 0.0659485L4.52014 3.15579L1.4303 0.0659485L1.02014 0.476105Z"
              fill="#C1C7C6"
            />
          </svg>
        </div>

        <div>Dashboard</div>

        <div>Docs</div>
      </div>

      {/* Body Content*/}
      <div className="mx-[300px] mt-[32px] ">
        {/* Section 1 */}
        <div className="w-full h-auto px-[32px] bg-[#F0F3F2] rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <svg
              width="120"
              height="121"
              viewBox="0 0 120 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="about-icons-1.svg">
                <path
                  id="Vector"
                  d="M90.6546 21.1186C79.6158 18.1023 65.4301 61.3347 78.6794 64.9543C91.9287 68.5739 101.698 24.1394 90.6546 21.1186Z"
                  fill="#EABC49"
                />
                <path
                  id="Vector_2"
                  d="M93.4378 30.6943C92.5599 28.997 91.0113 27.6554 89.0214 27.1152C87.0315 26.575 85.0146 26.9396 83.3984 27.9526L93.4378 30.6943Z"
                  fill="#DB3030"
                />
                <path
                  id="Vector_3"
                  d="M85.9378 58.1383C85.06 56.441 83.5113 55.0994 81.5214 54.5592C79.5315 54.0145 77.5146 54.3836 75.8984 55.3966L85.9378 58.1383Z"
                  fill="#EB8F48"
                />
                <path
                  id="Vector_4"
                  d="M92.476 37.7894C91.4405 35.786 89.6082 34.1968 87.2582 33.5575C84.9082 32.9137 82.5266 33.3504 80.6133 34.548L92.476 37.7894Z"
                  fill="#DB3030"
                />
                <path
                  id="Vector_5"
                  d="M88.6049 51.9481C87.5694 49.9447 85.7371 48.36 83.3871 47.7162C81.0371 47.0724 78.6555 47.5091 76.7422 48.7067L88.6049 51.9481Z"
                  fill="#DB3030"
                />
                <path
                  id="Vector_6"
                  d="M90.9935 45.1051C89.8725 42.9396 87.8916 41.2244 85.3525 40.5311C82.8134 39.8378 80.2383 40.306 78.1719 41.6025L90.9935 45.1051Z"
                  fill="#DB3030"
                />
                <path
                  id="Vector_7"
                  d="M74.8353 25.553H65.7548C64.6248 25.553 63.7109 24.6391 63.7109 23.5091C63.7109 22.3791 64.6248 21.4652 65.7548 21.4652H74.8353C75.9653 21.4652 76.8792 22.3791 76.8792 23.5091C76.8792 24.6346 75.9653 25.553 74.8353 25.553Z"
                  fill="#00684A"
                />
                <path
                  id="Vector_8"
                  d="M78.778 39.0814C78.778 37.7758 77.72 36.7179 76.4144 36.7179H76.1848C78.1027 36.7179 79.3542 34.701 78.5078 32.9812L74.8342 25.5485H70.2917H65.7538L62.0802 32.9812C61.2293 34.701 62.4808 36.7179 64.4032 36.7179H64.1736C62.868 36.7179 61.81 37.7758 61.81 39.0814C61.81 40.387 62.868 41.4449 64.1736 41.4449C62.868 41.4449 61.81 42.5029 61.81 43.8085C61.81 45.1141 62.868 46.172 64.1736 46.172C62.868 46.172 61.81 47.23 61.81 48.5356C61.81 49.8411 62.868 50.8991 64.1736 50.8991C62.868 50.8991 61.81 51.9571 61.81 53.2626C61.81 54.5682 62.868 55.6262 64.1736 55.6262H76.4144C77.72 55.6262 78.778 54.5682 78.778 53.2626C78.778 51.9571 77.72 50.8991 76.4144 50.8991C77.72 50.8991 78.778 49.8411 78.778 48.5356C78.778 47.23 77.72 46.172 76.4144 46.172C77.72 46.172 78.778 45.1141 78.778 43.8085C78.778 42.5029 77.72 41.4449 76.4144 41.4449C77.72 41.4449 78.778 40.387 78.778 39.0814Z"
                  fill="#FAE7DB"
                />
                <path
                  id="Vector_9"
                  d="M78.778 39.0814C78.778 37.7759 77.72 36.7179 76.4144 36.7179H76.1848C78.1027 36.7179 79.3542 34.701 78.5078 32.9813L77.2878 30.5097C77.0582 30.5502 76.8331 30.5952 76.6125 30.6582C75.1989 31.0544 73.9293 31.8333 72.6013 32.4545C71.2732 33.0758 69.7965 33.553 68.3514 33.2829C67.0503 33.0398 65.9428 32.2249 64.7228 31.7072C64.1601 31.4686 63.5253 31.3155 62.9085 31.302L62.0802 32.9813C61.2293 34.701 62.4808 36.7179 64.4032 36.7179H64.1736C62.868 36.7179 61.81 37.7759 61.81 39.0814C61.81 40.387 62.868 41.445 64.1736 41.445C62.868 41.445 61.81 42.5029 61.81 43.8085C61.81 45.1141 62.868 46.172 64.1736 46.172C62.868 46.172 61.81 47.23 61.81 48.5356C61.81 49.8411 62.868 50.8991 64.1736 50.8991C62.868 50.8991 61.81 51.9571 61.81 53.2626C61.81 54.5682 62.868 55.6262 64.1736 55.6262H76.4144C77.72 55.6262 78.778 54.5682 78.778 53.2626C78.778 51.9571 77.72 50.8991 76.4144 50.8991C77.72 50.8991 78.778 49.8411 78.778 48.5356C78.778 47.23 77.72 46.172 76.4144 46.172C77.72 46.172 78.778 45.1141 78.778 43.8085C78.778 42.5029 77.72 41.445 76.4144 41.445C77.72 41.445 78.778 40.387 78.778 39.0814Z"
                  fill="#016BF8"
                />
                <path
                  id="Vector_10"
                  d="M42.7553 34.8495H23.8516V66.1067H42.7553V34.8495Z"
                  fill="#2B5B4F"
                />
                <path
                  id="Vector_11"
                  d="M47.2241 27.5833H28.3203V24.486C28.3203 22.9508 29.5674 21.7038 31.1025 21.7038H44.4419C45.977 21.7038 47.2241 22.9508 47.2241 24.486V27.5833Z"
                  fill="#2B5B4F"
                />
                <path
                  id="Vector_12"
                  d="M42.7553 34.8495H23.8516L28.322 27.5833H47.2258L42.7553 34.8495Z"
                  fill="#FAE7DB"
                />
                <path
                  id="Vector_13"
                  d="M51.6948 34.8495V66.1066H42.7539V34.8495L47.2244 27.5833L51.6948 34.8495Z"
                  fill="#EABC49"
                />
                <path
                  id="Vector_14"
                  d="M38.5456 41.6565H28.0605C27.6778 41.6565 27.3672 41.3459 27.3672 40.9632C27.3672 40.5806 27.6778 40.2699 28.0605 40.2699H38.5456C38.9282 40.2699 39.2389 40.5806 39.2389 40.9632C39.2344 41.3459 38.9282 41.6565 38.5456 41.6565Z"
                  fill="#254C40"
                />
                <path
                  id="Vector_15"
                  d="M38.5456 46.6177H28.0605C27.6778 46.6177 27.3672 46.3071 27.3672 45.9244C27.3672 45.5417 27.6778 45.2311 28.0605 45.2311H38.5456C38.9282 45.2311 39.2389 45.5417 39.2389 45.9244C39.2344 46.3071 38.9282 46.6177 38.5456 46.6177Z"
                  fill="#254C40"
                />
                <path
                  id="Vector_16"
                  d="M38.5456 51.5744H28.0605C27.6778 51.5744 27.3672 51.2637 27.3672 50.8811C27.3672 50.4984 27.6778 50.1878 28.0605 50.1878H38.5456C38.9282 50.1878 39.2389 50.4984 39.2389 50.8811C39.2344 51.2637 38.9282 51.5744 38.5456 51.5744Z"
                  fill="#EABC49"
                />
                <path
                  id="Vector_17"
                  d="M54.7181 58.1389L53.219 56.6893L51.1886 57.153L49.6894 55.7034L47.659 56.1671L46.1599 54.7174L44.125 55.1856C44.125 55.1856 47.452 48.7703 49.0276 43.1249C50.6033 37.4794 51.076 30.2672 51.076 30.2672L52.5752 31.7169L54.6101 31.2532L56.1092 32.7028L58.1396 32.2391L59.6388 33.6887L61.6692 33.225L63.1683 34.6747L65.1987 34.211L66.6979 35.6606L68.7283 35.1969L70.2274 36.6465L72.2623 36.1828C72.2623 36.1828 68.9353 42.5981 67.3597 48.2436C65.784 53.8891 65.3113 61.1012 65.3113 61.1012L63.8121 59.6516L61.7772 60.1153L60.2781 58.6657L58.2477 59.1294L56.7485 57.6797L54.7181 58.1389Z"
                  fill="#FAE7DB"
                />
                <path
                  id="Vector_18"
                  d="M68.7342 35.1871L66.7039 35.6508L65.2047 34.2012L63.1743 34.6649L61.6752 33.2153L59.6448 33.679L58.1456 32.2293L56.1152 32.693L54.6161 31.2434L52.5812 31.7071L51.082 30.2575C51.082 30.2575 51.0055 31.4055 50.8164 33.1432L71.0032 38.7752C71.7416 37.1905 72.2683 36.1686 72.2683 36.1686L70.2334 36.6323L68.7342 35.1871Z"
                  fill="#EABC49"
                />
                <path
                  id="Vector_19"
                  d="M47.659 56.1708L49.6894 55.7071L51.1886 57.1568L53.219 56.6931L54.7181 58.1427L56.7485 57.679L58.2477 59.1286L60.2781 58.6649L61.7772 60.1146L63.8121 59.6509L65.3113 61.1005C65.3113 61.1005 65.3878 59.9525 65.5769 58.2147L45.3946 52.5738C44.6562 54.1585 44.125 55.1849 44.125 55.1849L46.1599 54.7212L47.659 56.1708Z"
                  fill="#EABC49"
                />
                <path
                  id="Vector_20"
                  d="M62.5621 46.8968C61.4817 50.782 58.6454 53.3841 56.2368 52.7088C53.8238 52.038 52.7478 48.3419 53.8328 44.4567C54.9178 40.5715 57.7495 37.9693 60.1581 38.6446C62.5711 39.3199 63.6471 43.0116 62.5621 46.8968Z"
                  fill="#00684A"
                />
                <path
                  id="Vector_21"
                  d="M87.8559 100.088H32.1485C29.767 100.088 27.7231 98.4038 27.2594 96.0673L19.3359 58.89H100.668L92.7405 96.0673C92.2813 98.4038 90.2374 100.088 87.8559 100.088Z"
                  fill="#00684A"
                />
                <path
                  id="Vector_22"
                  d="M101.335 58.89H18.6698C16.6709 58.89 15.0547 57.2693 15.0547 55.275V52.5873C15.0547 50.5884 16.6754 48.9722 18.6698 48.9722H101.335C103.334 48.9722 104.95 50.5929 104.95 52.5873V55.275C104.95 57.2738 103.334 58.89 101.335 58.89Z"
                  fill="#0AAD0A"
                />
                <path
                  id="Vector_23"
                  d="M60.0012 92.1325C59.0018 92.1325 58.1914 91.3222 58.1914 90.3227V68.6503C58.1914 67.6508 59.0018 66.8405 60.0012 66.8405C61.0006 66.8405 61.811 67.6508 61.811 68.6503V90.3227C61.811 91.3267 61.0006 92.1325 60.0012 92.1325Z"
                  fill="#0AAD0A"
                />
                <path
                  id="Vector_24"
                  d="M70.1301 92.1325C69.1307 92.1325 68.3203 91.3222 68.3203 90.3227V68.6503C68.3203 67.6508 69.1307 66.8405 70.1301 66.8405C71.1295 66.8405 71.9399 67.6508 71.9399 68.6503V90.3227C71.9399 91.3267 71.1295 92.1325 70.1301 92.1325Z"
                  fill="#0AAD0A"
                />
                <path
                  id="Vector_25"
                  d="M80.2668 92.1325C79.2674 92.1325 78.457 91.3222 78.457 90.3227V68.6503C78.457 67.6508 79.2674 66.8405 80.2668 66.8405C81.2663 66.8405 82.0766 67.6508 82.0766 68.6503V90.3227C82.0721 91.3267 81.2618 92.1325 80.2668 92.1325Z"
                  fill="#0AAD0A"
                />
                <path
                  id="Vector_26"
                  d="M49.8723 92.1325C50.8717 92.1325 51.6821 91.3222 51.6821 90.3227V68.6503C51.6821 67.6508 50.8717 66.8405 49.8723 66.8405C48.8729 66.8405 48.0625 67.6508 48.0625 68.6503V90.3227C48.0625 91.3267 48.8729 92.1325 49.8723 92.1325Z"
                  fill="#0AAD0A"
                />
                <path
                  id="Vector_27"
                  d="M39.7434 92.1325C40.7428 92.1325 41.5532 91.3222 41.5532 90.3227V68.6503C41.5532 67.6508 40.7428 66.8405 39.7434 66.8405C38.7439 66.8405 37.9336 67.6508 37.9336 68.6503V90.3227C37.9336 91.3267 38.7439 92.1325 39.7434 92.1325Z"
                  fill="#0AAD0A"
                />
                <path
                  id="Vector_28"
                  d="M103.615 75.6373L81.5871 56.0493C80.4976 55.0813 80.4031 53.4156 81.371 52.3261C82.3389 51.2367 84.0047 51.1421 85.0941 52.11L107.122 71.6981C108.212 72.666 108.306 74.3318 107.338 75.4212C106.37 76.5107 104.705 76.6053 103.615 75.6373Z"
                  fill="#EABC49"
                />
                <path
                  id="Vector_29"
                  d="M84.3824 54.0549C84.3824 54.6491 83.9007 55.1309 83.3064 55.1309C82.7122 55.1309 82.2305 54.6491 82.2305 54.0549C82.2305 53.4606 82.7122 52.9789 83.3064 52.9789C83.9007 52.9789 84.3824 53.4606 84.3824 54.0549Z"
                  fill="#00684A"
                />
                <path
                  id="Vector_30"
                  d="M16.391 75.6373L38.4191 56.0493C39.5086 55.0813 39.6032 53.4156 38.6352 52.3261C37.6673 51.2367 36.0016 51.1421 34.9121 52.11L12.884 71.6981C11.7945 72.666 11.6999 74.3318 12.6679 75.4212C13.6358 76.5107 15.3015 76.6053 16.391 75.6373Z"
                  fill="#EABC49"
                />
                <path
                  id="Vector_31"
                  d="M35.6172 54.0549C35.6172 54.6491 36.0989 55.1309 36.6932 55.1309C37.2874 55.1309 37.7691 54.6491 37.7691 54.0549C37.7691 53.4606 37.2874 52.9789 36.6932 52.9789C36.0989 52.9789 35.6172 53.4606 35.6172 54.0549Z"
                  fill="#00684A"
                />
              </g>
            </svg>

            <div>
              <p className="font-medium text-2xl">Welcome !</p>
              <p className="text-sm text-[#5C6C75]">
                Download the app get free food &{" "}
                <span className="text-[#0AAD0A]">$30</span> off on your first
                order.
              </p>
            </div>
          </div>

          <div className="text-sm font-medium text-white bg-[#001E2B] rounded-md px-[17px] py-[9px]">
            Downlaod FreshCart App
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-center justify-between mt-[32px] mb-[90px]">
          <div
            className="h-[250px] w-[400px] p-[32px] rounded-lg"
            style={{
              backgroundImage: `url(${img1.src})`,
            }}
          >
            <p className="text-2xl font-bold w-[210px]">
              10% cashback on personal care
            </p>
            <p className="mt-[16px] text-[#5C6C75]">Max cashback: $12</p>
            <p className="text-[#5C6C75]">
              Code: <span className="text-black font-bold">CARE12</span>
            </p>
            <div className="mt-[20px] text-white text-sm font-medium py-[9px] px-[17px] bg-black rounded-lg w-[110px] text-center">
              Shop Now
            </div>
          </div>

          <div
            className="h-[250px] w-[400px] p-[32px] rounded-lg"
            style={{
              backgroundImage: `url(${img2.src})`,
            }}
          >
            <p className="text-2xl font-bold w-[210px]">
              Say yes to season’s fresh
            </p>
            <p className="mt-[16px] text-[#5C6C75] w-[130px]">
              Refresh your day the fruity way
            </p>
            <div className="mt-[20px] text-white text-sm font-medium py-[9px] px-[17px] bg-black rounded-lg w-[110px] text-center">
              Shop Now
            </div>
          </div>

          <div
            className="h-[250px] w-[400px] p-[32px] rounded-lg"
            style={{
              backgroundImage: `url(${img3.src})`,
            }}
          >
            <p className="text-2xl font-bold w-[210px]">
              When in doubt, eat ice cream
            </p>
            <p className="mt-[16px] text-[#5C6C75] w-[130px]">
              Enjoy a scoop of summer today
            </p>
            <div className="mt-[20px] text-white text-sm font-medium py-[9px] px-[17px] bg-black rounded-lg w-[110px] text-center">
              Shop Now
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <p className="text-2xl font-bold mb-[32px]">Shop by Category</p>
        <div className="grid grid-cols-6 gap-4 justify-between w-full mb-[80px]">
          {categories.map((category) => {
            return (
              <div className="border border-[#DFE2E1] w-[190px] h-[220px] rounded-lg flex flex-col items-center justify-center gap-4">
                <img src={category.image} alt="" />
                <p className="text-[#5C6C75] font-medium text-md">
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section 4 */}
        <p className="text-2xl font-bold">Fruits & vegetables</p>
        <p className="mb-[20px]">eat fresh, stay healthy</p>
        <div className="grid grid-cols-5 gap-2 mb-[80px]">
          <div className="border border-[#DFE2E1] w-[245px] h-[370px] rounded-lg flex flex-col items-start gap-4 px-[17px]">
            <img src="veg1.jpeg" />
            <div className="w-full">
              <p className="text-[#5C6C75] text-sm">Fruits & Vegetables</p>
              <p className="font-medium text-md mb-[10px]">Beatroot</p>

              <div className="flex items-center justify-start gap-2 mb-[10px]">
                <img src="rating.png" alt="" className="w-24" />
                <p className="text-[#5C6C75] text-md">4.5 (39)</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-md font-medium">
                  $18 <span className="text-[#5C6C75] line-through">$24</span>
                </p>
                <div className="bg-[#0AAD0A] py-[7px] px-[9px] rounded-lg  text-white font-medium text-center">
                  + Add
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#DFE2E1] w-[245px] h-[370px] rounded-lg flex flex-col items-start gap-4 px-[17px]">
            <img src="veg2.jpeg" />
            <div className="w-full">
              <p className="text-[#5C6C75] text-sm">Fruits & Vegetables</p>
              <p className="font-medium text-md mb-[10px]">Fresh Apple</p>

              <div className="flex items-center justify-start gap-2 mb-[10px]">
                <img src="rating.png" alt="" className="w-24" />
                <p className="text-[#5C6C75] text-md">4.5 (149)</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-md font-medium">$24</p>
                <div className="bg-[#0AAD0A] py-[7px] px-[9px] rounded-lg  text-white font-medium text-center">
                  + Add
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#DFE2E1] w-[245px] h-[370px] rounded-lg flex flex-col items-start gap-4 px-[17px]">
            <img src="veg3.jpeg" />
            <div className="w-full">
              <p className="text-[#5C6C75] text-sm">Fruits & Vegetables</p>
              <p className="font-medium text-md mb-[10px]">Golden Pineapple</p>

              <div className="flex items-center justify-start gap-2 mb-[10px]">
                <img src="rating.png" alt="" className="w-24" />
                <p className="text-[#5C6C75] text-md">4.5 (25)</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-md font-medium">
                  $32 <span className="text-[#5C6C75] line-through">$35</span>
                </p>
                <div className="bg-[#0AAD0A] py-[7px] px-[9px] rounded-lg  text-white font-medium text-center">
                  + Add
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#DFE2E1] w-[245px] h-[370px] rounded-lg flex flex-col items-start gap-4 px-[17px]">
            <img src="veg4.jpeg" />
            <div className="w-full">
              <p className="text-[#5C6C75] text-sm">Fruits & Vegetables</p>
              <p className="font-medium text-md mb-[10px]">Fresh Kiwi</p>

              <div className="flex items-center justify-start gap-2 mb-[10px]">
                <img src="rating.png" alt="" className="w-24" />
                <p className="text-[#5C6C75] text-md">5 (469)</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-md font-medium">
                  $3 <span className="text-[#5C6C75] line-through">$5</span>
                </p>
                <div className="bg-[#0AAD0A] py-[7px] px-[9px] rounded-lg  text-white font-medium text-center">
                  + Add
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#DFE2E1] w-[245px] h-[370px] rounded-lg flex flex-col items-start gap-4 px-[17px]">
            <img src="veg5.jpeg" />
            <div className="w-full">
              <p className="text-[#5C6C75] text-sm">Fruits & Vegetables</p>
              <p className="font-medium text-md mb-[10px]">Fresh Banana</p>

              <div className="flex items-center justify-start gap-2 mb-[10px]">
                <img src="rating.png" alt="" className="w-24" />
                <p className="text-[#5C6C75] text-md">3.5 (456)</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-md font-medium">
                  $13 <span className="text-[#5C6C75] line-through">$18</span>
                </p>
                <div className="bg-[#0AAD0A] py-[7px] px-[9px] rounded-lg  text-white font-medium text-center">
                  + Add
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="h-auto w-full border-y border-[#DFE2E1] mb-[80px] py-[80px] grid grid-cols-2 gap-[80px]">
          <div className="flex justify-end">
            <img src="app.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-semibold mb-[9px]">
              Get the FreshCart app
            </p>
            <p className="text-[#5C6C75] font-medium mb-[28px]">
              We will send you a link, open it on your phone to download the
              app.
            </p>
            <div className="mb-[18px]">
              <label className="text-[#5C6C75] mr-[24px]">
                <input
                  type="radio"
                  name="myRadio"
                  value="email"
                  className="mr-[7px]"
                />
                Email
              </label>
              <label className="text-[#5C6C75]">
                <input
                  type="radio"
                  name="myRadio"
                  value="phone"
                  className="mr-[7px]"
                />
                Phone
              </label>
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="py-[10px] px-[16px] rounded-lg border border-[#DFE2E1] text-[#889397] font-medium mr-[12px]"
              />
              <button className="py-[10px] px-[16px] bg-[#0AAD0A] rounded-lg border-none text-white font-medium">
                Share app link
              </button>
            </div>

            <p className="text-[#5C6C75] font-medium mt-[36px] mb-[12px] ">
              Download app from
            </p>
            <div className="flex gap-4">
              <img src="appstore-btn.svg" alt="" />
              <img src="googleplay-btn.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="flex gap-4 mb-[100px]">
          <div className="w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M20.0002 37.5267C29.2049 37.5267 36.6668 30.0648 36.6668 20.8601C36.6668 11.6553 29.2049 4.19336 20.0002 4.19336C10.7954 4.19336 3.3335 11.6553 3.3335 20.8601C3.3335 30.0648 10.7954 37.5267 20.0002 37.5267Z"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 10.8599V20.8599L26.6667 24.1932"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#21313C] font-medium text-lg mt-[24px] mb-[12px]">
              10 minute grocery now
            </p>
            <p className="text-[#5C6C75]">
              Get your order delivered to your doorstep at the earliest from
              pickup stores near you.
            </p>
          </div>

          <div className="w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M33.3332 20.8599V37.5266H6.6665V20.8599"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M36.6668 12.5264H3.3335V20.8597H36.6668V12.5264Z"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 37.5264V12.5264"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.0002 12.5267H12.5002C11.3951 12.5267 10.3353 12.0877 9.55388 11.3063C8.77248 10.5249 8.3335 9.46509 8.3335 8.36002C8.3335 7.25495 8.77248 6.19515 9.55388 5.41374C10.3353 4.63234 11.3951 4.19336 12.5002 4.19336C18.3335 4.19336 20.0002 12.5267 20.0002 12.5267Z"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12.5267H27.5C28.6051 12.5267 29.6649 12.0877 30.4463 11.3063C31.2277 10.5249 31.6667 9.46509 31.6667 8.36002C31.6667 7.25495 31.2277 6.19515 30.4463 5.41374C29.6649 4.63234 28.6051 4.19336 27.5 4.19336C21.6667 4.19336 20 12.5267 20 12.5267Z"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#21313C] font-medium text-lg mt-[24px] mb-[12px]">
              Best Prices & Offers
            </p>
            <p className="text-[#5C6C75]">
              Cheaper prices than your local supermarket, great cashback offers
              to top it off. Get best pricess & offers.
            </p>
          </div>

          <div className="w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M27.5 16.5265L12.5 7.87646"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35 27.5267V14.1934C34.9994 13.6089 34.8451 13.0347 34.5526 12.5287C34.26 12.0226 33.8396 11.6023 33.3333 11.3101L21.6667 4.64337C21.1599 4.3508 20.5851 4.19678 20 4.19678C19.4149 4.19678 18.8401 4.3508 18.3333 4.64337L6.66667 11.3101C6.16044 11.6023 5.73997 12.0226 5.44744 12.5287C5.1549 13.0347 5.0006 13.6089 5 14.1934V27.5267C5.0006 28.1113 5.1549 28.6854 5.44744 29.1915C5.73997 29.6975 6.16044 30.1178 6.66667 30.4101L18.3333 37.0767C18.8401 37.3693 19.4149 37.5233 20 37.5233C20.5851 37.5233 21.1599 37.3693 21.6667 37.0767L33.3333 30.4101C33.8396 30.1178 34.26 29.6975 34.5526 29.1915C34.8451 28.6854 34.9994 28.1113 35 27.5267Z"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.4502 12.46L20.0002 20.8767L34.5502 12.46"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 37.6599V20.8599"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#21313C] font-medium text-lg mt-[24px] mb-[12px]">
              Wide Assortment
            </p>
            <p className="text-[#5C6C75]">
              Choose from 5000+ products across food, personal care, household,
              bakery, veg and non-veg & other categories.
            </p>
          </div>

          <div className="w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M38.3335 7.52637V17.5264H28.3335"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.6665 34.1934V24.1934H11.6665"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.84984 15.8599C6.69512 13.4712 8.13173 11.3355 10.0256 9.65219C11.9195 7.96888 14.2089 6.79276 16.6803 6.23359C19.1517 5.67441 21.7244 5.75039 24.1585 6.45445C26.5925 7.1585 28.8086 8.46768 30.5998 10.2598L38.3332 17.5265M1.6665 24.1932L9.39984 31.4599C11.1911 33.252 13.4071 34.5612 15.8412 35.2652C18.2752 35.9693 20.848 36.0453 23.3194 35.4861C25.7907 34.9269 28.0802 33.7508 29.9741 32.0675C31.8679 30.3842 33.3046 28.2486 34.1498 25.8599"
                stroke="#0AAD0A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#21313C] font-medium text-lg mt-[24px] mb-[12px]">
              Easy Returns
            </p>
            <p className="text-[#5C6C75]">
              Not satisfied with a product? Return it at the doorstep & get a
              refund within hours. No questions asked{" "}
              <span className="text-[#0AAD0A]">policy.</span>
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#F0F3F2] px-[300px] py-[50px]  ">
        <div className="flex gap-20">
          <div>
            <p className="font-medium text-sm mb-[9px]">Categories</p>
            <ul className="columns-2 gap-16">
              {allCat.map((cat) => {
                return (
                  <li className="text-[#5C6C75] text-sm mb-[7px] cursor-pointer">
                    {cat}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-medium text-sm mb-[9px]">Get to know us</p>
            <ul>
              {knowUs.map((know) => {
                return (
                  <li className="text-[#5C6C75] text-sm mb-[7px] cursor-pointer">
                    {know}
                  </li>
                );
              })}
            </ul>
            <p className="font-medium text-sm mb-[9px] mt-[16px]">
              Freshcart programs
            </p>
            <ul>
              {programs.map((program) => {
                return (
                  <li className="text-[#5C6C75] text-sm mb-[7px] cursor-pointer">
                    {program}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-medium text-sm mb-[9px]">For Consumers</p>
            <ul>
              {consumers.map((consumer) => {
                return (
                  <li className="text-[#5C6C75] text-sm mb-[7px] cursor-pointer">
                    {consumer}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-medium text-sm mb-[9px]">Become a Shopper</p>
            <ul>
              {shoppers.map((shopper) => {
                return (
                  <li className="text-[#5C6C75] text-sm mb-[7px] cursor-pointer">
                    {shopper}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="border-y border-[#DFE2E1] flex justify-between items-center py-[20px]">
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium">Payment Partners</p>
            <img src="amazonpay.svg" alt="" />
            <img src="american-express.svg" alt="" />
            <img src="mastercard.svg" alt="" />
            <img src="paypal.svg" alt="" />
            <img src="visa.svg" alt="" />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium">Get deliveries with FreshCart</p>
            <img src="appstore-btn.svg" alt="" />
            <img src="googleplay-btn.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-[20px]">
          <p className="text-[#5C6C75] text-sm">© 2023. All rights reserved.</p>

          <div className="flex gap-2 items-center">
            <p className="text-[#5C6C75] text-sm">Follow us on</p>
            <img
              className="border border-[#889397] rounded-lg p-1"
              src="Facebook.svg"
              alt=""
            />
            <img
              className="border border-[#889397] rounded-lg p-1"
              src="Twitter.svg"
              alt=""
            />
            <img
              className="border border-[#889397] rounded-lg p-1"
              src="Instagram.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
