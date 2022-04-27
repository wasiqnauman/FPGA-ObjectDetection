import Image from "next/image";
import banner from "/assets/images/banner.jpg";
import Loader from "./Loader";
import { useState } from "react";

function Banner() {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    fetch("http://127.0.0.1:5000/upload_file", {
      method: "POST",
      body,
    })
      .then(validateResponse)
      .then((response) => response.blob())
      .then((blob) => {
        setCreateObjectURL(URL.createObjectURL(blob));
        setLoading(false);
      });
  };

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
          className="w-[300px] text-orange-500 bg-white m-3.5 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        ></input>
        <button
          onClick={submitImage}
          className="text-orange-500 bg-white m-3.5 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          Detect
        </button>
      </div>
      <div className="absolute mt-1 top-full left-1/2 transform -translate-x-1/2 w-7/12 text-center">        
        {loading ? 
          <div>
            <img src={createObjectURL} className="brightness-[0.25] object-cover absolute top-full left-1/2 transform -translate-x-1/2"/>
            <Loader />
          </div>
         : 
          <img src={createObjectURL} className="object-cover absolute top-full left-1/2 transform -translate-x-1/2"/>
        }
      </div>
    </div>
  );
}

export default Banner;
