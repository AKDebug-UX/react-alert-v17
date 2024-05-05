import React, { useState } from "react";
import { WeeklyFeatureds } from "../../WeeklyFeatured/data";
import search from "../../../assets/Search-icon.svg";

const SearchPopup = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(WeeklyFeatureds);

  const handleSearch = (value) => {
    setIsDropdownOpen(value.length > 0);
    setSearchTerm(value);
    setFilteredContacts(
      WeeklyFeatureds.filter(
        ({ title, descr }) =>
          title.toLowerCase().includes(value.toLowerCase()) ||
          descr.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="flex-col">
      <div
        // onClick={() => navigate("/results")}
        id="search-shadow"
        className="cursor-pointer flex relative bg-white-A700 rounded-[6px] p-1 items-center"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => { handleSearch(e.target.value); }}
          className="lg:text-[12px] text-[#D0C9D6] xl:text-[15px] border-0 lg:pl-[25px] xl:pl-[40px] lg:w-[210px] xl:w-[300px] bg-transparent"
          placeholder="Enter title or author of the novel "
          name=""
          id=""
        />
        <img
          className="absolute lg:left-1.5 xl:left-4"
          src={search}
          alt=""
        />
      </div>
      <div className="right-4">
        {isDropdownOpen && (
          <div id="content" className="bg-[white] shadow right-18 z-50 overflow-auto h-[200px] absolute w-[300px] p-2 mt-3 py-[15px] rounded-md">
            <div className="grid grid-cols-1 gap-[30px] items-center justify-start ml-0.5 md:ml-[0] w-full">
              {filteredContacts.length > 0 ? (
                filteredContacts.map(({ id, img, title }) => (
                  <a key={id}>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <img
                          src={img}
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          alt="ellipseNinetySeven"
                        />
                        <div
                          className="font-bold font-satoshivariable text-gray_900_01 w-auto"
                          variant="body8"
                        >
                          {title}
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <div className="not-found">
                  <div className="">Not found</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default SearchPopup;
