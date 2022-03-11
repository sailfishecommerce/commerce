import TopbarSlider from "@/components/Slider/TopbarSlider";

export default function Topbar() {
  return (
    <div className="topbar bg-gray-700 w-full h-20 text-white flex items-center justify-center px-2 md:px-0">
      <div className="container flex justify-between items-center">
        <p className="support hidden md:flex">Support 00124-567-985</p>
        <TopbarSlider />
      </div>
    </div>
  );
}
