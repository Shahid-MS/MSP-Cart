import React from "react";

const Homesectioncard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          src="https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/1/1/1108_1__1.jpg"
          alt=""
          className="object-cover object-top w-full h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">No filter</h3>
        <p className="mt-2 text-sm text-grey-500">Adorable Purple Floral Printed Organza Ceremony Wear Saree</p>
      </div>
    </div>
  );
};

export default Homesectioncard;
