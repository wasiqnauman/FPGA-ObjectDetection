import Image from "next/image";
import banner from "/assets/images/banner.jpg";
import { useState } from "react";

function Banner() {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

  const submitImage = (e) => {
    const body = new FormData();
    body.append("file", image);
    const response = fetch("http://127.0.0.1:5000/upload_file", {
      method: "POST",
      body
    }).then(validateResponse)
    .then(response => response.blob())
    .then(blob => {
      setCreateObjectURL(URL.createObjectURL(blob))
    })
  }

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={banner} layout="fill" objectFit="cover" className="" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg drop-shadow-md text-white">
          Want to detect objects in an image? Perfect
        </p>
        <input
          type="file"
          name="myImage"
          onChange={uploadImage}
          className="text-orange-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
        </input>
        <button
          onClick={submitImage}
          className="text-orange-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          Detect
        </button>
        <img src={createObjectURL}/>
      </div>
    </div>
  );
}

export default Banner;
