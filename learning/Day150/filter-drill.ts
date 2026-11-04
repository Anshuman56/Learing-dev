function buildFilter(crop?: string, village?: string) {
  const arr = [
    { _id: 100, crop: "Tomato", village: "Bhubaneswar" },
    { _id: 101, crop: "patato", village: "pipili" },
    { _id: 102, crop: "xyz456", village: "Many spaces before     line" },
    { _id: 103, crop: "xyz789", village: "Multiple\nline description" },
    { _id: 104, crop: "Abc789", village: "SKU starts with A" },
  ];
  const regex = new RegExp("\^tomato\i", "g");
  if (crop?.trim() === "" && village?.trim() === "") console.log(arr);
  else if (crop && !village)
    console.log(arr.filter((item) => regex.test(item.crop)));
  else if (village && !crop)
    console.log(arr.filter((item) => item.village === `\^${village}\i`));
  else if (crop && village) console.log("crop and village");
  else console.log("all of them");
}
buildFilter();
buildFilter("tomato");
buildFilter(undefined, "Pipili");
buildFilter("tomato", "Pipili");
buildFilter("", "");
