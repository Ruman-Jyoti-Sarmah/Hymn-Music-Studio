import { Mic2, Music, Sliders, Users, Radio, Disc } from 'lucide-react';

export const studioData = {
  name: "HYMN music production",
  tagline: "Where Your Sound Comes Alive",
  description: "A professional recording environment designed for artists who demand excellence. From vintage warmth to modern clarity, we capture your vision.",
  contact: {
    email: "booking@hymnmusic.com",
    phone: "+91 9401188132",
    address: "123 Soundwave Avenue, Music City, CA 90210",
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  heroImage: "https://www.masterclass.com/articles/home-recording-studio-101-what-are-the-best-types-of-microphones-for-home-studio-recording",
  services: [
    {
      title: "Recording",
      description: "Pristine audio capture in our acoustically treated live rooms. Top-tier microphone locker including Neumann, AKG, and Shure.",
      icon: Mic2,
      price: "from 6000/hr"
    },
    {
      title: "Mixing",
      description: "Balance, depth, and clarity. We blend your tracks into a cohesive masterpiece using industry-standard analog and digital gear.",
      icon: Sliders,
      price: "from 3000/track"
    },
    {
      title: "Mastering",
      description: "The final polish. We ensure your music translates perfectly across all playback systems and streaming platforms.",
      icon: Disc,
      price: "from 1000/track"
    },
    {
      title: "Production",
      description: "Need guidance? Our experienced producers help refine your arrangements, tones, and performance to reach full potential.",
      icon: Music,
      price: "Custom Quote"
    },
    {
      title: "Podcast Studio",
      description: "Professional setup for voice-over and podcast recording with video capabilities.",
      icon: Radio,
      price: "from 6000/hr"
    },
    {
      title: "Rehearsal Space",
      description: "Soundproofed rooms fully equipped with backline for band practice.",
      icon: Users,
      price: "from 3000/hr"
    }
  ],
  portfolio: [
    {
      id: 1,
      title: "Neon Nights",
      artist: "The Midnight Echo",
      category: "Indie Rock",
      image: "https://pixabay.com/get/g2983008c47bdbf17d7385082e99b3b6a6a9c01defee9b30e5753b80c5b59dbc983582a3e3317d8c023924c23a45576fc60221ad7f467f946b0845c70d7f9f010_1280.jpg",
      role: "Recording & Mixing"
    },
    {
      id: 2,
      title: "Soul Sessions Vol. 1",
      artist: "Sarah Jenkins",
      category: "R&B / Soul",
      image: "https://pixabay.com/get/gc6ede7a0850523b60079c1bf6666d4e7f2be02ad60d7efc0bbd991d58f7de81e648724eb7c8e2c7aa409b24a3eabab5fbc5684b59f29431ae77598c8212f4ef1_1280.jpg",
      role: "Full Production"
    },
    {
      id: 3,
      title: "Analog Dreams",
      artist: "Synthwave Collective",
      category: "Electronic",
      image: "https://pixabay.com/get/g53e620152abe3691c765636335659329683ea52365b277f73c0f2da474e914d51a42f6cc72e55fde16ae8b0e0e40f6e081cb411fdbff5172ac0e4223071220ca_1280.jpg",
      role: "Mastering"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Lead Vocalist, Lunar Tides",
      content: "The vibe at HYMN is unmatched. We felt so comfortable and creative. The final mix blew us away!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Jessica Chen",
      role: "Solo Artist",
      content: "Professionalism at its finest. They really took the time to understand the sound I was going for. Highly recommended.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Podcast Host",
      content: "Great facility for podcasting. The sound quality is broadcast-ready and the staff is super helpful.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ]
};
