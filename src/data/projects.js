/**
 * Central project data.
 *
 * To add a new project, append an object to this array — no component
 * changes are needed. `categories` should match values used in the
 * `filterCategories` list below so it appears under the right filter.
 *
 * `image` is imported from src/assets so Vite bundles it correctly.
 * Swap the import path / filename below for your own screenshots.
 */

import adventureResortImg from '../assets/adventure-resort.png'
import duyananKioskImg from '../assets/duyanan-kiosk.png'
import techSupportImg from '../assets/tp-link-support.png'

export const filterCategories = [
  'All',
  'Web Development',
  'React',
  'Backend',
  'Database',
  'Academic',
  'IT / Support',
]

export const projects = [
  {
    id: 'adventure-resort-booking',
    title: 'Adventure Resort Booking',
    tagline: 'A resort booking interface built with React and Vite.',
    description:
      'A booking web app for a resort, letting guests browse room types, compare rates, and submit a reservation request. Built to practice component-driven React development and working with real-world pricing data.',
    image: adventureResortImg,
    categories: ['Web Development', 'React'],
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    features: [
      'Browseable room catalog with three tiers: Standard Room, Cabin, and Luxury Villa',
      'Live price display per room type (₱2,500 / ₱3,500 / ₱5,000)',
      'Responsive booking form with date and guest-count selection',
      'Component-based layout for easy addition of new room types',
    ],
    github: 'https://github.com/MELTHEGREAT/adventure-resort',
    demo: 'https://adventure-resort-kappa.vercel.app/',
    detail: {
      overview:
        'Adventure Resort Booking is a front-end booking interface for a fictional resort, created to practice building a realistic, multi-view React application from scratch.',
      problem:
        'Small resorts often rely on phone calls or messaging apps to take reservations, which makes it hard for guests to compare room options and pricing at a glance.',
      solution:
        'A single-page React app presents each room type with its price and amenities side by side, so a guest can compare options and submit a request in one flow.',
      challenges:
        'Structuring reusable components for the room cards and booking form, and keeping pricing and availability data in one place so it is easy to update.',
      learned:
        'How to structure a multi-view React app with Vite, manage form state cleanly, and organize pricing data separately from the UI so it stays easy to maintain.',
      screenshots: [],
    },
  },
  {
    id: 'duyanan-kiosk',
    title: 'Duyanan Kiosk Ordering System',
    tagline: 'Academic capstone: a self-service ordering kiosk with sales analytics.',
    description:
      'A capstone project built as a self-service kiosk ordering system for a restaurant setting, paired with a descriptive-analytics dashboard for tracking sales and order trends.',
    image: duyananKioskImg,
    categories: ['Academic', 'Web Development', 'Database'],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS'],
    features: [
      'Self-service ordering workflow: browse menu, customize order, checkout',
      'Descriptive analytics dashboard for order and sales trends',
      'Order history and item-level breakdowns stored in MySQL',
      'Built and defended as a capstone project',
    ],
    github: '',
    demo: '',
    detail: {
      overview:
        'Duyanan is a kiosk-style ordering system developed as an academic capstone project, aimed at reducing queueing time and giving restaurant staff visibility into sales patterns.',
      problem:
        'Manual order-taking slows down service during peak hours, and staff have limited visibility into which items sell best and when.',
      solution:
        'A kiosk-facing ordering interface lets customers place their own orders, while an admin-facing dashboard summarizes sales with descriptive analytics.',
      challenges:
        'Designing a database schema that supported both fast order entry and after-the-fact reporting, and keeping the kiosk UI usable for customers unfamiliar with the system.',
      learned:
        'End-to-end system design — from database schema to UI to reporting — and how to present technical work clearly during a capstone defense.',
      screenshots: [],
    },
  },
  {
    id: 'it-support-experience',
    title: 'IT & Technical Support Case Studies',
    tagline: 'Practical troubleshooting, networking, and customer support work.',
    description:
      'A collection of real support scenarios handled as a Technical Support Specialist — diagnosing connectivity issues, resolving hardware and software problems, and guiding customers through fixes.',
    image: techSupportImg,
    categories: ['IT / Support'],
    technologies: ['Networking', 'PC Troubleshooting', 'Remote Support Tools'],
    features: [
      'Diagnosing and resolving network connectivity issues for customers',
      'Structured troubleshooting of hardware and software problems',
      'Clear, non-technical explanations of technical solutions',
      'Following escalation procedures for issues beyond first-line support',
    ],
    github: '',
    demo: '',
    detail: {
      overview:
        'This is a case-study section rather than a software project — it documents the practical troubleshooting and support work done day-to-day as a Technical Support Specialist.',
      problem:
        'Customers contact support with connectivity, hardware, or software issues that need fast, accurate diagnosis without in-person access to the device.',
      solution:
        'Applying structured troubleshooting steps — isolating the issue, testing hypotheses, and escalating when needed — while communicating each step clearly to the customer.',
      challenges:
        'Diagnosing issues remotely with limited information, and adjusting technical explanations to match each customer\u2019s comfort level.',
      learned:
        'Systematic troubleshooting habits, clear technical communication, and how to stay calm and methodical under time pressure.',
      screenshots: [],
    },
  },
]