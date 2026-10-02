import health from "../../assets/CGI/health.png";
import robotics from "../../assets/CGI/robotics.png";
import casino from "../../assets/CGI/casino.png";
import construction from "../../assets/CGI/contruction.png";
import influencer from "../../assets/CGI/influencer.png";
import nft from "../../assets/CGI/NFT.png";
import survey from "../../assets/CGI/survey.png";
import sports from "../../assets/CGI/sports.png";
import shoes from "../../assets/CGI/shoes.png";
import portfolio from "../../assets/CGI/portfolio.png";

const caseStudies = [
  {
    id: "1",
    title: "E-commerce Platform",
    category: "Web",
    summary: "Modern e-commerce platform with secure payment integration.",
    year: 2025,
    image: shoes,
  },
  {
    id: "2",
    title: "Healthcare Mobile App",
    category: "Mobile",
    summary: "Mobile application for healthcare management and appointments.",
    year: 2024,
    image: health,
  },
  {
    id: "3",
    title: "AI Customer Support",
    category: "AI",
    summary: "AI-powered chatbot for automated customer support.",
    year: 2025,
    image: robotics,
  },
  {
    id: "4",
    title: "Blockchain Wallet",
    category: "Blockchain",
    summary: "Secure digital wallet for managing blockchain assets.",
    year: 2024,
    image: nft,
  },
  {
    id: "5",
    title: "Business Analytics Dashboard",
    category: "Web",
    summary: "Real-time analytics dashboard for business intelligence.",
    year: 2025,
    image: survey,
  },
  {
    id: "6",
    title: "Fitness Tracking App",
    category: "Mobile",
    summary: "Mobile app for tracking workouts and fitness progress.",
    year: 2023,
    image: sports,
  },
  {
    id: "7",
    title: "AI Recommendation Engine",
    category: "AI",
    summary: "Personalized product recommendations powered by AI.",
    year: 2025,
    image: influencer,
  },
  {
    id: "8",
    title: "Smart Contract Platform",
    category: "Blockchain",
    summary: "Platform for creating and managing decentralized smart contracts.",
    year: 2024,
    image: portfolio,
  },
  {
    id: "9",
    title: "Online Casino Platform",
    category: "Web",
    summary: "Interactive online casino platform with a range of games.",
    year: 2025,
    image: casino,
  },
  {
    id: "10",
    title: "Construction Management Platform",
    category: "Web",
    summary: "Digital platform for coordinating construction projects.",
    year: 2024,
    image: construction,
  },
];

export const fetchCaseStudies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error("Network failed"));
        return;
      }

      resolve(caseStudies);
    }, 800);
  });
};
