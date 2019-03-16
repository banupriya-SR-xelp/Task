import map from "lodash.map";
import cloneDeep from "lodash.clonedeep";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import Profile_1 from "./img/Profile_1.png";
import Profile_2 from "./img/Profile_2.png";
import Profile_3 from "./img/Profile_3.png";
import Profile_4 from "./img/Profile_4.png";
import Profile_5 from "./img/Profile_5.png";
const PeopleData = {
  1: {
    name: "Prakash Sanker",
    profileImage: Profile_1,
    collaboratedWith: [2, 3]
  },
  2: {
    name: "Aakarsh Yadav",
    profileImage: Profile_2,
    collaboratedWith: [3, 4, 5, 6]
  },
  3: {
    name: "Meghna Sharma",
    profileImage: Profile_3,
    collaboratedWith: [1, 2, 4]
  },
  4: {
    name: "Shitanshu Roy",
    profileImage: Profile_4,
    collaboratedWith: [6]
  },
  5: {
    name: "Ankur Gala",
    profileImage: Profile_5,
    collaboratedWith: []
  },
  6: {
    name: "Vinay Kumar",
    profileImage: Profile_3,
    collaboratedWith: [1]
  }
};

export const FeedsData = [
  {
    id: 1,
    name: "Feed 1",
    createdAt: 1529229437,
    feedCreator: "Prakash Sanker"
  },
  {
    id: 2,
    name: "Feed 2",
    createdAt: 1521280637,
    feedCreator: "Aakarsh Yadav"
  },
  {
    id: 3,
    name: "Feed 3",
    createdAt: 1530439037,
    feedCreator: "Ankur Gala"
  },
  {
    id: 4,
    name: "Feed 4",
    createdAt: 1688205437,
    feedCreator: "Meghna Sharma"
  },
  {
    id: 5,
    name: "Feed 5",
    createdAt: 1120211837,
    feedCreator: "Omar Diab"
  },
  {
    id: 6,
    name: "Feed 6",
    createdAt: 1309514237,
    feedCreator: "Anthony Mainero"
  }
];

const getRandomPopulatedUser = () => {
  const randomIndex = Math.floor(Math.random() * 6) + 1;
  const user = cloneDeep(PeopleData[randomIndex]);
  const collaboratedWith = user.collaboratedWith;
  const populatedCollaboratedWith = map(collaboratedWith, collaboratorId => {
    return PeopleData[collaboratorId];
  });

  user.collaboratedWith = populatedCollaboratedWith;
  return user;
};

const TYPE_1 = "TYPE_1";
const TYPE_2 = "TYPE_2";
const TYPE_3 = "TYPE_3";

const imageUrls = [img1, img2, img3, img4, img5];

const card1TextValues = [
  {
    heading: "Fishing in the Congo",
    subtext: "Congo"
  },
  {
    heading: "Rafting in the Amazon",
    subtext: "Brazil"
  },
  {
    heading: "Biking in Ladakh",
    subtext: "India"
  },
  {
    heading: "Rafting in Bali",
    subtext: "Indonesia"
  },
  {
    heading: "Hiking in Oaxaca",
    subtext: "Mexico"
  },
  {
    heading: "Painting in Paris",
    subtext: "France"
  }
];

const getRandomImageUrl = () => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const getRandomCard1Text = () => {
  return card1TextValues[Math.floor(Math.random() * card1TextValues.length)];
};

const createType1Card = () => {
  return {
    type: TYPE_1,
    cardData: {
      image: getRandomImageUrl(),
      ...getRandomCard1Text()
    }
  };
};
const createType2Card = () => {
  return {
    type: TYPE_2,
    cardData: {
      bannerImage: getRandomImageUrl()
    }
  };
};
const createType3Card = () => {
  const user = getRandomPopulatedUser();
  return {
    type: TYPE_3,
    cardData: {
      user
    }
  };
};

export const SingleFeedData = {
  1: [
    createType3Card(),
    createType3Card(),
    createType3Card(),
    createType3Card()
  ],
  2: [
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType1Card(),
    createType1Card(),
    createType3Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card()
  ],
  3: [
    createType3Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType1Card(),
    createType2Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType3Card(),
    createType2Card(),
    createType1Card(),
    createType2Card()
  ],
  4: [createType1Card(), createType1Card(), createType1Card()],
  5: [createType1Card(), createType2Card(), createType2Card()],
  6: [
    createType1Card(),
    createType2Card(),
    createType2Card(),
    createType1Card(),
    createType1Card(),
    createType1Card()
  ]
};
export default SingleFeedData;
