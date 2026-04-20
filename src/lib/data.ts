import type { Project, Skill } from '@/types';

export const projects: Project[] = [
  {
    title: 'Equishift',
    description: 'A full-stack application built to deliver seamless user experiences.',
    image: '/images/equishift.png',
    tags: ['Next.js', 'TypeScript', 'Node.js'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'RJA Cuts',
    description: 'A modern web presence for a barbershop, featuring booking and gallery.',
    image: '/images/rja-cuts.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: '',
  },
];

export const skills: Skill[] = [
  { name: 'TypeScript', icon: 'typescript', category: 'Language', proficiency: 90 },
  { name: 'JavaScript', icon: 'javascript', category: 'Language', proficiency: 92 },
  { name: 'Python', icon: 'python', category: 'Language', proficiency: 75 },
  { name: 'React', icon: 'react', category: 'Frontend', proficiency: 90 },
  { name: 'Next.js', icon: 'nextjs', category: 'Frontend', proficiency: 88 },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'Frontend', proficiency: 90 },
  { name: 'Three.js', icon: 'threejs', category: 'Frontend', proficiency: 70 },
  { name: 'Node.js', icon: 'nodejs', category: 'Backend', proficiency: 85 },
  { name: 'Express', icon: 'express', category: 'Backend', proficiency: 82 },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'Database', proficiency: 80 },
  { name: 'MongoDB', icon: 'mongodb', category: 'Database', proficiency: 78 },
  { name: 'Redis', icon: 'redis', category: 'Database', proficiency: 70 },
  { name: 'Docker', icon: 'docker', category: 'DevOps', proficiency: 75 },
  { name: 'AWS', icon: 'aws', category: 'DevOps', proficiency: 72 },
  { name: 'Git', icon: 'git', category: 'DevOps', proficiency: 90 },
  { name: 'Vercel', icon: 'vercel', category: 'DevOps', proficiency: 85 },
];

export const contactEmail = 'Malachi3114@gmail.com';
