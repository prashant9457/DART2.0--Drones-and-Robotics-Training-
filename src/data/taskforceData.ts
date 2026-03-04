// Image imports
import AlishaImg from '../assets/team/Alisha.png';
import ArjunImg from '../assets/team/Arjun.png';
import AyushiImg from '../assets/team/Ayushi.png';
import CMohanImg from '../assets/team/Dr.C.Mohan.png';
import DhirendraImg from '../assets/team/Dr.Dhirendra.png';
import KamalImg from '../assets/team/Dr.Kamal.png';
import KrishnaImg from '../assets/team/KrishnaShah.png';
import PrashantImg from '../assets/team/Prashant.png';
import VedanshiImg from '../assets/team/Vedanshi.png';
import VishwaImg from '../assets/team/VishwaBhaskar.png';
import KanishqImg from '../assets/team/kanishq.png';
import RushikeshImg from '../assets/team/Rushikesh.png';
import AshishImg from '../assets/team/Ashish.png';
import AbunasarImg from '../assets/team/Abunasar.png';
import DrAmitImg from '../assets/team/Dr.Amit.png';
import priyaImg from '../assets/team/Priya.png';

export interface TaskforceMember {
    id: number;
    name: string;
    role: string;
    category: "Faculty" | "Tech Team" | "Volunteers";
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
        category: "Faculty",
        dept: "ME",
        image: DhirendraImg,
        linkedin: "https://www.linkedin.com/in/dr-dhirendra-kumar-verma-32a78a121/"
    },
    {
        id: 2,
        name: "Dr. Kamal Narayan Baruah",
        role: "Associate Professor",
        category: "Faculty",
        dept: "Biotechnology",
        image: KamalImg,
        linkedin: "https://www.linkedin.com/in/dr-kamal-narayan-baruah-33579aa4/"
    },
    {
        id: 3,
        name: "Dr. Amit Bhola",
        role: "Assistant Professor",
        category: "Faculty",
        dept: "CSE",
        image: DrAmitImg,
        linkedin: "https://www.linkedin.com/in/amit-bhola/"
    },
    {
        id: 4,
        name: "Dr. C. Mohan",
        role: "Professor",
        category: "Faculty",
        dept: "EE",
        image: CMohanImg,
        linkedin: "https://linkedin.com"
    },
    // Tech Team / Leads
    {
        id: 5,
        name: "Prashant Singh",
        role: "Lead Coordinator",
        category: "Tech Team",
        dept: "B.Tech CSE",
        year: "2",
        image: PrashantImg,
        linkedin: "https://www.linkedin.com/in/prasantsingh945/"
    },
    {
        id: 6,
        name: "Vishwa Bhaskar Shukla",
        role: "Technical Lead",
        category: "Tech Team",
        dept: "B.Tech CSE",
        year: "2",
        image: VishwaImg,
        linkedin: "https://www.linkedin.com/in/vishwa-bhaskar-a4131a345/"
    },
    {
        id: 7,
        name: "Arjun Agarwal",
        role: "Technical Lead",
        category: "Tech Team",
        dept: "B.Tech ME",
        year: "2",
        image: ArjunImg,
        linkedin: "https://www.linkedin.com/in/arjun-agarwal-et/"
    },
    {
        id: 8,
        name: "Ayushi Singhal",
        role: "Management",
        category: "Tech Team",
        dept: "B.Tech CSE",
        year: "2",
        image: AyushiImg,
        linkedin: "https://www.linkedin.com/"
    },
    {
        id: 9,
        name: "Alisha Mohapatra",
        role: "AI/ML Engineer",
        category: "Tech Team",
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
        category: "Volunteers",
        dept: "B.Tech CSE",
        year: "2",
        image: RushikeshImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 11,
        name: "Vedanshi",
        role: "Creative Head",
        category: "Tech Team",
        dept: "B.Tech CSE",
        year: "2",
        image: VedanshiImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 12,
        name: "Ashish Kumar Pal",
        role: "Logistics",
        category: "Volunteers",
        dept: "B.Tech CSE",
        year: "1",
        image: AshishImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 13,
        name: "Hargun Singh",
        role: "Public Relations",
        category: "Volunteers",
        dept: "CSE",
        year: "1",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 14,
        name: "Krishna Shah",
        role: "Event Management",
        category: "Volunteers",
        dept: "EEE",
        year: "1",
        image: KrishnaImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 15,
        name: "Rakshit Chauhan",
        role: "Tech Support",
        category: "Volunteers",
        dept: "CSE",
        year: "2",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 16,
        name: "Sharamjeet Shaurya",
        role: "Field Coordinator",
        category: "Volunteers",
        dept: "ME",
        year: "2",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 17,
        name: "Priya",
        role: "Social Media",
        category: "Volunteers",
        dept: "EEE",
        year: "1",
        image: priyaImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 18,
        name: "Rashi Chauhan",
        role: "Documentation",
        category: "Volunteers",
        dept: "CSE",
        year: "1",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 19,
        name: "Kashan Iqbal",
        role: "Embedded Systems",
        category: "Volunteers",
        dept: "EEE",
        year: "2",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 20,
        name: "Bilal",
        role: "Hardware Support",
        category: "Volunteers",
        dept: "ME",
        year: "1",
        image: PLACEHOLDER_IMAGE,
        linkedin: "https://linkedin.com"
    },
    {
        id: 21,
        name: "AbuNasar",
        role: "Volunteer",
        category: "Volunteers",
        dept: "CSE",
        year: "1",
        image: AbunasarImg,
        linkedin: "https://linkedin.com"
    },
    {
        id: 22,
        name: "Kanishq",
        role: "Volunteer",
        category: "Volunteers",
        dept: "CSE",
        year: "1",
        image: KanishqImg,
        linkedin: "https://linkedin.com"
    }
];
