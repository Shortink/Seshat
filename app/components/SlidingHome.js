"use client"
import CarouselItem from "./CarouselItem";

export default function SlidingHome() {

  return (
    <div className=" max-h-[450px] overflow-clip">
      <div className="carousel rounded-box  max-h-[450px] ">
      <CarouselItem bookId={"xw2_DwAAQBAJ"} />
        <CarouselItem bookId={"kr09DwAAQBAJ"}/>
        <CarouselItem bookId={"cbXdEAAAQBAJ"} />
      </div>
    </div>
  );
}
