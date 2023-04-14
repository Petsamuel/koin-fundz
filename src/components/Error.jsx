function Error() {
  return (
    <section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-20">
          {" "}
          OOPS! PAGE NOT FOUND
        </h1>

        <div class="relative mb-8">
          <iframe
            width="890"
            height="340"
            src="https://4940a5fd.sibforms.com/serve/MUIEAAjvswJL5IyZq-wT2FVmoVXuMipnc8pEsF8efi4xwTnJpL3w9bVsZ1RjsZyCO1Tf_AOBvzFypgJUgndctL-9zFmADzhMfjDLX4ofOkmXNI2VW24cXIOav294Mde-fVGpRUSyxh_6YD17w4bW1Rf8XgzJYN-sU53QRJ_cce2SR3HCO1Y7rbq3NensURAQr-FPWuaHpJf_A3Ul"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: 100 + "%",
            }}
          ></iframe>
        </div>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          <a href="/"> Go Home</a>
        </p>
      </div>
      <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}

export default Error;
