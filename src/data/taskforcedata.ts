// Image imports
import AlishaImg from '../assets/team/alisha.png';
import ArjunImg from '../assets/team/arjun.png';
import AyushiImg from '../assets/team/ayushi.png';
import CMohanImg from '../assets/team/dr.c.mohan.png';
import DhirendraImg from '../assets/team/dr.dhirendra.png';
import KamalImg from '../assets/team/dr.kamal.png';
import KrishnaImg from '../assets/team/krishnashah.png';
import PrashantImg from '../assets/team/prashant.png';
import VedanshiImg from '../assets/team/vedanshi.png';
import VishwaImg from '../assets/team/vishwabhaskar.png';
import KanishqImg from '../assets/team/kanishq.png';
import RushikeshImg from '../assets/team/rushikesh.png';
import AshishImg from '../assets/team/ashish.png';
import AbunasarImg from '../assets/team/abunasar.png';
import DrAmitImg from '../assets/team/dr.amit.png';
import priyaImg from '../assets/team/priya.png';
import abhishekImg from '../assets/team/abhishek.png';
// import rimmyImg from '../assets/team/rimmy.png';

export interface TaskforceMember {
    id: number;
    name: string;
    role: string;
    dept: "CSE" | "ME" | "EEE" | string;
    year?: string;
    image: string;
    linkedin?: string;
}

const PLACEHOLDER_IMAGE = "https://i.pravatar.cc/300?u=placeholder";

export const TASKFORCE_MEMBERS: TaskforceMember[] = [
    // Faculty
    {
        id: 1,
        name: "Dr. Dhirendra Kumar Verma",
        role: "Assistant Professor",
        dept: "ME",
        image: DhirendraImg,
        linkedin: "https://www.linkedin.com/in/dr-dhirendra-kumar-verma-32a78a121/"
    },
    {
        id: 2,
        name: "Dr. Kamal Narayan Baruah",
        role: "Associate Professor",
        dept: "Biotechnology",
        image: KamalImg,
        linkedin: "https://www.linkedin.com/in/dr-kamal-narayan-baruah-33579aa4/"
    },
    {
        id: 3,
        name: "Dr. Amit Bhola",
        role: "Assistant Professor",
        dept: "CSE",
        image: DrAmitImg,
        linkedin: "https://www.linkedin.com/in/amit-bhola/"
    },
    {
        id: 4,
        name: "Dr. C. Mohan",
        role: "Professor",
        dept: "EE",
        image: CMohanImg,
        linkedin: "https://linkedin.com"
    },
    // Tech Team / Leads
    {
        id: 5,
        name: "Prashant Singh",
        role: "Lead Coordinator",
        dept: "B.Tech CSE",
        year: "2",
        image: PrashantImg,
        linkedin: "https://www.linkedin.com/in/prasantsingh945/"
    },
    {
        id: 6,
        name: "Vishwa Bhaskar Shukla",
        role: "Technical Lead",
        dept: "B.Tech CSE",
        year: "2",
        image: VishwaImg,
        linkedin: "https://www.linkedin.com/in/vishwa-bhaskar-a4131a345/"
    },
    {
        id: 7,
        name: "Arjun Agarwal",
        role: "Technical Lead",
        dept: "B.Tech ME",
        year: "2",
        image: ArjunImg,
        linkedin: "https://www.linkedin.com/in/arjun-agarwal-et/"
    },
    {
        id: 8,
        name: "Ayushi Singhal",
        role: "Management",
        dept: "B.Tech CSE",
        year: "2",
        image: AyushiImg,
        linkedin: "https://www.linkedin.com/"
    },
    {
        id: 9,
        name: "Alisha Mohapatra",
        role: "AI/ML Engineer",
        dept: "B.Tech CSE",
        year: "2",
        image: AlishaImg,
        linkedin: "https://linkedin.com"
    },
    // Volunteers / Members
    {
        id: 10,
        name: "Rushikesh Mande",
        role: "Finance Lead",
        dept: "B.Tech CSE",
        year: "2",
        image: RushikeshImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 11,
        name: "Vedanshi",
        role: "Creative Head",
        dept: "B.Tech CSE",
        year: "2",
        image: VedanshiImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 12,
        name: "Abhishek",
        role: "Tech Team",
        dept: "B.Tech CSE",
        year: "2",
        image: abhishekImg,
        linkedin: "https://www.linkedin.com/in/1abhishekpandey2/"
    },
    {
        id: 22,
        name: "Ashish Kumar Pal",
        role: "Logistics",
        dept: "B.Tech CSE",
        year: "1",
        image: AshishImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 13,
        name: "Hargun Singh",
        role: "Public Relations",
        dept: "CSE",
        year: "1",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 14,
        name: "Krishna Shah",
        role: "Event Management",
        dept: "EEE",
        year: "1",
        image: KrishnaImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 15,
        name: "Rakshit Chauhan",
        role: "Tech Support",
        dept: "CSE",
        year: "2",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 16,
        name: "Sharamjeet Shaurya",
        role: "Field Coordinator",
        dept: "ME",
        year: "2",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 17,
        name: "Priya",
        role: "Social Media",
        dept: "EEE",
        year: "1",
        image: priyaImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 18,
        name: "Rashi Chauhan",
        role: "Documentation",
        dept: "CSE",
        year: "1",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 19,
        name: "Kashan Iqbal",
        role: "Embedded Systems",
        dept: "EEE",
        year: "2",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 20,
        name: "Bilal",
        role: "Hardware Support",
        dept: "ME",
        year: "1",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 21,
        name: "AbuNasar",
        role: "Volunteer",
        dept: "CSE",
        year: "1",
        image: AbunasarImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 22,
        name: "Kanishq",
        role: "Volunteer",
        dept: "CSE",
        year: "1",
        image: KanishqImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 23,
        name: "Rimmy",
        role: "Design Lead",
        dept: "B.Tech CSE",
        year: "2",
        image: KanishqImg,
        linkedin: "https://linkedin.com"
    }

];
