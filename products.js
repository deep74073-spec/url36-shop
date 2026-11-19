// URL36 Shop - curated gadget discovery collection
// Amazon Associates tracking ID: websitewire-21

const amazonSearch = (query) =>
  "https://www.amazon.in/s?k=" + encodeURIComponent(query) + "&tag=websitewire-21";

const products = [
  {
    id:"power-bank-20000",
    name:"20,000mAh Fast Charging Power Bank",
    category:"Tech",
    icon:"🔋",
    description:"Extra battery backup for travel, work and everyday use.",
    amazonUrl:amazonSearch("20000mah fast charging power bank")
  },
  {
    id:"mini-power-bank",
    name:"Mini Pocket Power Bank",
    category:"Tech",
    icon:"⚡",
    description:"Compact charging option for people on the move.",
    amazonUrl:amazonSearch("mini pocket power bank")
  },
  {
    id:"gan-charger",
    name:"Compact USB-C Fast Charger",
    category:"Tech",
    icon:"🔌",
    description:"Look for compatible fast charging and safety protection.",
    amazonUrl:amazonSearch("USB C PD fast charger")
  },
  {
    id:"type-c-cable",
    name:"Braided Type-C Fast Charging Cable",
    category:"Tech",
    icon:"🔗",
    description:"A useful everyday replacement cable for compatible devices.",
    amazonUrl:amazonSearch("braided type c fast charging cable")
  },
  {
    id:"wireless-earbuds",
    name:"Wireless Bluetooth Earbuds",
    category:"Tech",
    icon:"🎧",
    description:"Explore earbuds for music, calls and daily commuting.",
    amazonUrl:amazonSearch("bluetooth wireless earbuds")
  },
  {
    id:"bluetooth-neckband",
    name:"Bluetooth Wireless Neckband",
    category:"Tech",
    icon:"🎵",
    description:"A practical audio option for travel and workouts.",
    amazonUrl:amazonSearch("bluetooth wireless neckband")
  },
  {
    id:"phone-cooler",
    name:"Mobile Phone Cooling Fan",
    category:"Tech",
    icon:"❄️",
    description:"A cooling accessory to explore for long gaming sessions.",
    amazonUrl:amazonSearch("mobile phone cooler fan")
  },
  {
    id:"selfie-tripod",
    name:"Bluetooth Selfie Stick Tripod",
    category:"Tech",
    icon:"🤳",
    description:"Useful for reels, video calls and hands-free photos.",
    amazonUrl:amazonSearch("bluetooth selfie stick tripod")
  },
  {
    id:"wireless-mic",
    name:"Wireless Microphone for Mobile",
    category:"Tech",
    icon:"🎙️",
    description:"Explore clip-on microphones for videos and interviews.",
    amazonUrl:amazonSearch("wireless microphone for mobile type c")
  },
  {
    id:"mini-led-light",
    name:"Rechargeable Mini LED Video Light",
    category:"Tech",
    icon:"💡",
    description:"Portable lighting accessory for creators and photos.",
    amazonUrl:amazonSearch("rechargeable mini led video light")
  },
  {
    id:"smart-plug",
    name:"Wi-Fi Smart Plug",
    category:"Home",
    icon:"🔌",
    description:"Explore app-controlled power plugs for compatible appliances.",
    amazonUrl:amazonSearch("wifi smart plug 16a India")
  },
  {
    id:"motion-light",
    name:"Motion Sensor LED Night Light",
    category:"Home",
    icon:"🚨",
    description:"Automatic lighting for wardrobes, stairs and corridors.",
    amazonUrl:amazonSearch("rechargeable motion sensor led night light")
  },
  {
    id:"smart-bulb",
    name:"Wi-Fi Smart LED Bulb",
    category:"Home",
    icon:"💡",
    description:"Explore app-controlled lighting and colour options.",
    amazonUrl:amazonSearch("wifi smart led bulb")
  },
  {
    id:"led-strip",
    name:"RGB LED Strip Lights",
    category:"Home",
    icon:"🌈",
    description:"Decorative lighting for desks, rooms and entertainment setups.",
    amazonUrl:amazonSearch("RGB LED strip lights")
  },
  {
    id:"mini-fan",
    name:"Rechargeable Portable Mini Fan",
    category:"Lifestyle",
    icon:"🌀",
    description:"Compact cooling for desks, travel and outdoor use.",
    amazonUrl:amazonSearch("rechargeable portable mini fan")
  },
  {
    id:"electric-lighter",
    name:"USB Rechargeable Electric Lighter",
    category:"Home",
    icon:"🔥",
    description:"A rechargeable alternative for compatible household uses.",
    amazonUrl:amazonSearch("USB rechargeable electric arc lighter")
  },
  {
    id:"milk-frother",
    name:"Portable Electric Milk Frother",
    category:"Home",
    icon:"☕",
    description:"A small kitchen gadget for coffee and milk-based drinks.",
    amazonUrl:amazonSearch("electric handheld milk frother")
  },
  {
    id:"mini-sealer",
    name:"Mini Bag Sealer and Cutter",
    category:"Home",
    icon:"📦",
    description:"A compact kitchen tool for resealing suitable snack packets.",
    amazonUrl:amazonSearch("USB rechargeable mini bag sealer")
  },
  {
    id:"digital-trimmer",
    name:"USB Rechargeable Beard Trimmer",
    category:"Lifestyle",
    icon:"✂️",
    description:"Compare trimming lengths, battery life and attachments.",
    amazonUrl:amazonSearch("USB C rechargeable beard trimmer")
  },
  {
    id:"digital-weighing-scale",
    name:"Digital Smart Weighing Scale",
    category:"Lifestyle",
    icon:"⚖️",
    description:"Explore digital weighing scales with easy-to-read displays.",
    amazonUrl:amazonSearch("digital body weighing scale")
  }
];
