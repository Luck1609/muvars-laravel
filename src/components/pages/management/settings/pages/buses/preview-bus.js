import Image from "next/image";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function PreviewBus() {
  const { watch } = useFormContext();

  const pictures = watch("pictures");

  console.log("Bus pictures", pictures);

  return (
    <div className="w-4/5 mx-auto grid grid-cols-2 gap-5">
      <div className="w-full p-2">
        <label className="block text-sm font-medium">Bus label</label>
        <span className="">{watch("label")}</span>
      </div>

      <div className="w-full p-2">
        <label className="block text-sm font-medium">Capacity</label>
        <span className="">{watch("capacity")}</span>
      </div>

      <div className="w-full p-2">
        <label className="block text-sm font-medium">Plate No.</label>
        <span className="">{watch("plate_no")}</span>
      </div>

      <div className="w-full p-2">
        <label className="block text-sm font-medium">Color</label>
        <span className="">{watch("color")}</span>
      </div>

      <div className="w-full p-2">
        <label className="block text-sm font-medium">Color</label>
        <span className="">{watch("seat_arrangement_style")}</span>
      </div>

      <div className="col-span-2 grid grid-cols-3 gap-3">
        {pictures.map((img, index) => {
          return (
            <div className="w-full h-20 relative" key={index.toString()}>
              <Image
                src={URL.createObjectURL(img)}
                alt="Bus preview picture"
                layout="fill"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
