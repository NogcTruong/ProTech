"use client";

import BaseModal from "../common/baseModal";
import "../../app/checkout/checkout.css";
import { useEffect, useState } from "react";
import {
  getCities,
  getDistricts,
  getWards,
  LocationData,
  District,
  Ward,
} from "@/data/locationData";
import clsx from "clsx";

type FormOrderModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  value: { city: string; district: string; ward: string };
  onSelect: (value: { city: string; district: string; ward: string }) => void;
};

export default function FormOrderModal({
  open,
  onClose,
  title,
  value,
  onSelect,
}: FormOrderModalProps) {
  const [resWidth, setResWidth] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "thành phố" | "quận huyện" | "phường xã"
  >("thành phố");
  const [selectedCity, setSelectedCity] = useState<LocationData | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(
    null
  );
  const [selectedWard, setSelectedWard] = useState<Ward | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const cities = getCities();
  const districts = selectedCity ? getDistricts(selectedCity.id) : [];
  const wards =
    selectedCity && selectedDistrict
      ? getWards(selectedCity.id, selectedDistrict.id)
      : [];

  useEffect(() => {
    if (!open) return;

    const handleResize = () => {
      setResWidth(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const handleSelectCity = (city: LocationData) => {
    setSelectedCity(city);
    setSelectedDistrict(null);
    setSelectedWard(null);
    setActiveTab("quận huyện");
  };

  const handleSelectDistrict = (district: District) => {
    setSelectedDistrict(district);
    setSelectedWard(null);
    setActiveTab("phường xã");
  };

  const handleSelectWard = (ward: Ward) => {
    setSelectedWard(ward);
    onSelect({
      city: selectedCity?.name || "",
      district: selectedDistrict?.name || "",
      ward: ward.name,
    });
    onClose();
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDistricts = districts.filter((district) =>
    district.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredWards = wards.filter((ward) =>
    ward.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!open) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity">
      <div className="relative z-50">
        <div
          className="fixed inset-0 transition-opacity bg-gray-200/75"
          onClick={onClose}
          aria-label="Đóng modal"
        ></div>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={clsx(
              resWidth ? "" : "p-4 sm:p-0",
              "flex items-end sm:items-center justify-center text-center max-md:h-full h-full md:max-h-[calc(100%_-_100px)] min-h-fit"
            )}
          >
            <div
              className={clsx(
                resWidth
                  ? "w-screen  md:h-screen"
                  : "w-full sm:max-w-[600px] rounded-lg sm:my-8",
                "relative text-left rtl:text-right flex flex-col bg-white shadow-xl h-full"
              )}
            >
              <div className="relative shrink-0 h-12 px-[52px] py-2 border-b flex items-center">
                <div className="w-full text-center">
                  <span className="text-lg font-bold font-lexend line-clamp-1">
                    {title}
                  </span>
                </div>
                <button
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-bold font-lexend rounded-full text-sm gap-x-1.5 p-1.5 text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-colorPrimaryDefault inline-flex items-center absolute right-2 top-2"
                  onClick={onClose}
                  aria-label="Đóng"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 flex-shrink-0"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-4 md:px-6 flex-1 overflow-auto">
                <div className="sticky inset-x-0 top-0 bg-white pb-3">
                  <div className="flex divide-x py-4 text-sm font-semibold divide-space-x-2">
                    {selectedCity && (
                      <button
                        type="button"
                        className={`${
                          activeTab === "thành phố"
                            ? "text-gray-900 underline decoration-2 underline-offset-8"
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("thành phố")}
                      >
                        {selectedCity.name}
                      </button>
                    )}
                    {selectedDistrict && (
                      <button
                        type="button"
                        className={`${
                          activeTab === "quận huyện"
                            ? "text-gray-900 underline decoration-2 underline-offset-8"
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("quận huyện")}
                      >
                        {selectedDistrict.name}
                      </button>
                    )}
                    {selectedWard && (
                      <button
                        type="button"
                        className={`${
                          activeTab === "phường xã"
                            ? "text-gray-900 underline decoration-2 underline-offset-8"
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab("phường xã")}
                      >
                        {selectedWard.name}
                      </button>
                    )}

                    {activeTab === "phường xã" && (
                      <span className="underline decoration-2 underline-offset-8">
                        Phường xã
                      </span>
                    )}
                    {activeTab === "quận huyện" && (
                      <span className="underline decoration-2 underline-offset-8">
                        Quận huyện
                      </span>
                    )}
                    {activeTab === "thành phố" && (
                      <span className="underline decoration-2 underline-offset-8">
                        Tỉnh / Thành phố
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="relative">
                      <input
                        id="searchModal"
                        type="text"
                        placeholder="Tìm kiếm ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-transparent text-gray-900 ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-red-500 ps-9"
                      />
                      <span className="absolute inset-y-0 start-0 flex items-center pointer-events-none px-2.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col divide-y">
                  {activeTab === "thành phố" &&
                    filteredCities.map((city) => (
                      <button
                        key={city.id}
                        className="pb-4 pt-3 text-left"
                        onClick={() => handleSelectCity(city)}
                      >
                        {city.name}
                      </button>
                    ))}
                  {activeTab === "quận huyện" &&
                    filteredDistricts.map((district) => (
                      <button
                        key={district.id}
                        className="pb-4 pt-3 text-left"
                        onClick={() => handleSelectDistrict(district)}
                      >
                        {district.name}
                      </button>
                    ))}
                  {activeTab === "phường xã" &&
                    filteredWards.map((ward) => (
                      <button
                        key={ward.id}
                        className="pb-4 pt-3 text-left"
                        onClick={() => handleSelectWard(ward)}
                      >
                        {ward.name}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
