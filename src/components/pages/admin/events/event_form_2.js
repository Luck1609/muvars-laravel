import ImageSelection from "components/widgets/image_selection";
import React from "react";

export default function EventForm2() {
  return (
    <div className="grid gap-5 w-11/12 mx-auto">
      <div className="col-span-2">
        <ImageSelection
          name="cover_photo"
          label="Add cover photo"
          alt_text="Event flyer"
        />
      </div>

      <div className="col-span-2">
        <ImageSelection
          name="flyer"
          label="Add event flyer"
          alt_text="Event flyer"
        />
      </div>
    </div>
  );
}
