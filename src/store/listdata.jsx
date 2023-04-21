import { useState } from "react";

const CountryData = () => {
  const [allCountryInfo, setAllCountryInfo] = useState();
  const placeholder =[]
  const URL = "https://restcountries.com/v3.1/all";
  fetch(URL)
    .then((response) => response.json())

    .then((data) => FetchResult(data))

    .catch((error) => console.log(error));

    function FetchResult(data){
      data.map((value, key)=>{
        placeholder.push(value.name.common)
        setAllCountryInfo(placeholder)
        
      })
    }
    console.log(allCountryInfo)

  // return allCountryInfo;
};

const sideBarMenu = [
  { d: "", name: "Dashboard" },
  { d: "", name: "Category" },
  { d: "", name: "How it Works" },
  { d: "", name: "Resources" },
];
const milestone = [
  "Fill in Project Information",
  "Organization Information",
  "Start Project",
];
const categoryLists = ["Non-Profit", "Medical", "Memorial"];
const faq = [
  {
    question: " What is crowdfunding?",
    answer: ` Crowdfunding is a fundraising method that allows individuals
                  or organizations to raise money from a large number of people
                  (the crowd) to support a project or idea. It typically takes
                  place online through a crowdfunding platform, where backers
                  can contribute funds in exchange for rewards or equity,
                  depending on the type of crowdfunding campaign.`,
  },
  {
    question: `How does your decentralized crowdfunding app work?`,
    answer: `Our app utilizes blockchain technology to create a transparent
                  and decentralized platform for crowdfunding. Project creators
                  can create campaigns, set fundraising goals, and offer rewards
                  to backers. Backers can browse and support campaigns by
                  contributing funds using cryptocurrencies or other payment
                  methods. Funds are held in a secure smart contract and
                  released to project creators when campaign goals are met. The
                  decentralized nature of our app ensures transparency,
                  fairness, and community-driven decision-making.`,
  },
  {
    question: `What types of projects can be funded on your app?`,
    answer: `Our app supports a wide range of project categories, including
                  but not limited to arts and culture, technology, social
                  impact, business, and innovation. Projects can be creative
                  endeavors, entrepreneurial ventures, charitable causes, or
                  community initiatives. We believe in empowering diverse
                  projects and creators, regardless of their size or location,
                  to access funding and bring their ideas to life.`,
  },
  {
    question: `How can I create a crowdfunding campaign on your app?`,
    answer: `Creating a campaign on our app is simple. Just connect your
                  wallet, provide project details, set a fundraising goal, and
                  choose rewards for your backers. You can customize your
                  campaign page with multimedia content, share it with your
                  network, and engage with your backers throughout the campaign.
                  Our user-friendly interface and step-by-step guidance make it
                  easy for you to launch and manage your campaign.`,
  },
  {
    question: `What are the benefits of using your decentralized crowdfunding
                  app?`,
    answer: ` Our app offers several benefits, including transparency,
                  security, and inclusivity. The use of blockchain technology
                  ensures transparency in funds allocation and decision-making,
                  as all transactions are recorded on the blockchain. The
                  decentralized nature of the app provides added security, as
                  funds are held in smart contracts and automatically released
                  when campaign goals are met. Our app is also inclusive,
                  allowing project creators and backers from around the world to
                  participate, without the need for intermediaries or geographic
                  limitations.`,
  },
  {
    question: ` Can I trust the campaigns on your app?`,
    answer: `While we strive to ensure the integrity of campaigns on our
                  app, it's important to note that crowdfunding inherently
                  carries risks. Project creators are responsible for delivering
                  on their campaign promises, and as a backer, it's essential to
                  conduct due diligence and assess the risks associated with
                  each campaign before making a contribution. Our app provides
                  transparency through blockchain technology, and we encourage
                  open communication between project creators and backers to
                  build trust and accountability.`,
  },
];

export { sideBarMenu, categoryLists, faq, milestone, CountryData };
