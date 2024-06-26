export const navLinks = [
    {
      label: "Dashboard",
      route: "/dashboard",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Argomenti",
      route: "/arguments",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Materie",
      route: "/subjects",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Traduzioni",
      route: "/translates",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Riassunti",
      route: "/summaries",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Corsi",
      route: "/courses",
      icon: "/assets/icons/home.svg",
    },
    // {
    //   label: "Image Restore",
    //   route: "/transformations/add/restore",
    //   icon: "/assets/icons/image.svg",
    // },
    // {
    //   label: "Generative Fill",
    //   route: "/transformations/add/fill",
    //   icon: "/assets/icons/stars.svg",
    // },
    // {
    //   label: "Object Remove",
    //   route: "/transformations/add/remove",
    //   icon: "/assets/icons/scan.svg",
    // },
    // {
    //   label: "Object Recolor",
    //   route: "/transformations/add/recolor",
    //   icon: "/assets/icons/filter.svg",
    // },
    // {
    //   label: "Background Remove",
    //   route: "/transformations/add/removeBackground",
    //   icon: "/assets/icons/camera.svg",
    // },
    {
      label: "Profilo",
      route: "/profile",
      icon: "/assets/icons/profile.svg",
    },
    {
      label: "Negozio",
      route: "/credits",
      icon: "/assets/icons/bag.svg",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Free",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 5,
      inclusions: [
        {
          label: "5 Free Credits",
          isIncluded: true,
        },
        {
          label: "Basic Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: false,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Package",
      icon: "/assets/icons/free-plan.svg",
      price: 5,
      credits: 30,
      inclusions: [
        {
          label: "30 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Premium Package",
      icon: "/assets/icons/free-plan.svg",
      price: 15,
      credits: 150,
      inclusions: [
        {
          label: "150 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: true,
        },
      ],
    },
    {
      _id: 4,
      name: "Gold Package",
      icon: "/assets/icons/free-plan.svg",
      price: 30,
      credits: 400,
      inclusions: [
        {
          label: "400 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: true,
        },
      ],
    },
    {
      _id: 4,
      name: "Platinum Package",
      icon: "/assets/icons/free-plan.svg",
      price: 50,
      credits: 1000,
      inclusions: [
        {
          label: "1000 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Restore Image",
      subTitle: "Refine images by removing noise and imperfections",
      config: { restore: true },
      icon: "image.svg",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Background Remove",
      subTitle: "Removes the background of the image using AI",
      config: { removeBackground: true },
      icon: "camera.svg",
    },
    fill: {
      type: "fill",
      title: "Generative Fill",
      subTitle: "Enhance an image's dimensions using AI outpainting",
      config: { fillBackground: true },
      icon: "stars.svg",
    },
    remove: {
      type: "remove",
      title: "Object Remove",
      subTitle: "Identify and eliminate objects from images",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
    },
    recolor: {
      type: "recolor",
      title: "Object Recolor",
      subTitle: "Identify and recolor objects from the image",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  export const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "W",
    "Z",
];
  
  export const creditFee = -1;

  export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`,
  }))