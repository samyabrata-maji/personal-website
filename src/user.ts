const USERNAME = {
  name: "Samyabrata Maji",
  github: "samyabrata-maji",
  twitter: "sammaji15",
  linkedin: "samyabrata-maji",
};

const USER_PROFILE_GITHUB = {
  name: USERNAME.name,
  profile_url: `https://github.com/${USERNAME.github}`,
  repo_url: `https://api.github.com/users/${USERNAME.github}/repos`,
};

const settings = {
  showStarsCount: true,
  showForksCount: true,
  showForkedRepos: false,
};

const MENU_DATA = [
  {
    title: "Home",
    pageTo: "/",
    ionicon: "home-outline",
    color: "white",
    classNames: [],
  },
  {
    title: "Repo",
    pageTo: "/repo",
    ionicon: "git-branch-outline",
    color: "white",
    classNames: [],
  },
  {
    title: "Tech",
    pageTo: "/tech",
    ionicon: "build-outline",
    color: "white",
    classNames: [],
  },
  // {
  //   title: "Contact",
  //   pageTo: "/contact",
  //   ionicon: "help-outline",
  //   color: "white",
  //   classNames: [],
  // },
  {
    title: "Themes",
    ionicon: "sunny-outline",
    color: "white",
    classNames: [],
    id: "btn-toggle-theme",
  },
];

// oldest to newest
const JOURNEY_DATA = [
  {
    title: "Studied at St Patricks School",
    description: "Did my high schooling from St. Patricks School, Asansol",
    // from: "June, 2007",
    // to: "June, 2022",
  },
  {
    title: "Got into Game Development",
    description:
      "Learned basics of blender. Started using unity and C#. Finally switched to Unreal Engine",
    // from: "June, 2007",
    // to: "June, 2022",
  },
  {
    title: "Started Learing Web Development",
    description: "Learned JavaScript, TypeScript, React, ",
    // from: "June, 2007",
    // to: "June, 2022",
  },
  {
    title: "Pursuing BTech. in CSE",
    description: "From Maulana Abul Kalam University of Technology",
    // from: "June, 2007",
    // to: "June, 2022",
  },
];

const TECH_STACK_DATA = [
  { title: "java" },
  { title: "react" },
  { title: "javascript" },
  { title: "typescript" },
  { title: "python" },
  { title: "kotlin" },
  { title: "android studio" },
  { title: "opencv" },
  { title: "blender" },
  { title: "c#" },
  { title: "css3" },
  { title: "html5" },
];

/** order of values
 * values: [pri, priLight, sec, secLight, accent, accentLight, text, textAlt, bg ]
 * Also enable the "COLOR HIGHLIGHTING" extension, if you are using vs code
 */
let theme_index = 0;
const THEME = [
  {
    id: "th00",
    index: theme_index++,
    title: "Default",
    value: [
      "#9FC131",
      "#DBF227",
      "#012030",
      "#DAFDBA",
      "#11101d",
      "#ffffff",
      "#11101d",
      "#11101d",
      "#f5f5f5",
    ],
  },
  {
    id: "th01",
    index: theme_index++,
    title: "Dark Mode",
    value: [
      "#D1DADF",
      "#08AAFF",
      "#012030",
      "#375462",
      "#375462",
      "#375462",
      "#D1DADF",
      "#E7ECEE",
      "#002134",
    ],
  },
  // {
  //   // TODO: change in all the themes below
  //   id: "th03",
  //   index: theme_index++,
  //   title: "Vibrant",
  //   value: [
  //     "#9FC131",
  //     "#DBF227",
  //     "#012030",
  //     "#DAFDBA",
  //     "#11101d",
  //     "#1d1b31",
  //     "#f5f5f5",
  //   ],
  // },
  {
    id: "th04",
    index: theme_index++,
    title: "Soft",
    value: [
      "#318CFC",
      "#3098F2",
      "#012030",
      "#DFE6EE",
      "#11101d",
      "#ffffff",
      "#11101d",
      "#11101d",
      "##EDF2F7",
    ]
  },
  {
    id: "th05",
    index: theme_index++,
    title: "Blueish",
    value: [
      "#395B64",
      "#395B64",
      "#395B64",
      "#A5C9CA",
      "#395B64",
      "#A5C9CA",
      "#11101d",
      "#11101d",
      "#E7F6F2",
    ],
  },
];

export {
  USERNAME,
  USER_PROFILE_GITHUB,
  MENU_DATA,
  JOURNEY_DATA,
  TECH_STACK_DATA,
  THEME,
  settings,
};
