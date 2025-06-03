export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  client?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company?: string;
}

export const siteData = {
  company: {
    name: "Stormant Designs",
    tagline: "Innovative Engineering Design Solutions",
    subTagline: "Expert engineering design to bring your vision to reality",
    foundedYear: 2024,
    location: "612 Park Avenue, Trinidad CO 81082",
    email: "info@stormantdesigns.com",
    phone: "+1 (303) 555-1234"
  },
  
  hero: {
    title: "STORMANT DESIGNS",
    subtitle: "Engineering Excellence",
    ctaText: "Discover Our Services",
    images: ['engineering1.jpg', 'engineering2.jpg', 'engineering3.jpg']
  },
  
  about: {
    title: "01 ABOUT",
    content: "Stormant Designs is a specialized engineering design firm based in Trinidad, Colorado. Established in 2024, we combine technical expertise with innovative thinking to deliver exceptional engineering solutions."
  },
  
  mission: {
    title: "02 MISSION",
    content: "Our mission is to create designs that seamlessly blend form and function, pushing the boundaries of what's possible in engineering while maintaining the highest standards of precision and quality."
  },
  
  values: {
    title: "03 VALUES",
    content: "We believe in sustainable design, client collaboration, and technical excellence. Every project we undertake reflects our commitment to these core values."
  },
  
  services: [
    {
      title: "Mechanical Design",
      description: "Comprehensive mechanical engineering solutions from concept to production, including 3D modeling, prototyping, and manufacturing support."
    },
    {
      title: "Structural Analysis",
      description: "Detailed structural analysis and optimization using advanced simulation tools to ensure safety, efficiency, and performance."
    },
    {
      title: "Product Development",
      description: "End-to-end product development services including concept generation, design refinement, testing, and production preparation."
    },
    {
      title: "Sustainable Engineering",
      description: "Environmentally conscious engineering solutions that minimize ecological impact while maximizing performance and efficiency."
    }
  ],
  
  portfolio: [
    {
      title: "Precision Automation System",
      description: "A custom-designed automation system for manufacturing applications, featuring advanced control systems and optimized mechanical components.",
      image: "portfolio1.jpg",
      client: "Industrial Innovations Inc."
    },
    {
      title: "Renewable Energy Solution",
      description: "An innovative renewable energy capture and storage system designed for urban environments with space constraints.",
      image: "portfolio2.jpg",
      client: "GreenTech Solutions"
    },
    {
      title: "Medical Device Prototype",
      description: "A precision-engineered medical device prototype designed for reliability, ease of use, and manufacturing scalability.",
      image: "portfolio3.jpg",
      client: "MedTech Innovations"
    }
  ],
  
  testimonials: [
    {
      quote: "Stormant Designs delivered exceptional engineering solutions that exceeded our expectations. Their attention to detail and innovative approach made all the difference in our project.",
      author: "Sarah Johnson",
      company: "Industrial Innovations Inc."
    },
    {
      quote: "Working with the Stormant team was a game-changer for our product development. Their technical expertise and creative problem-solving helped us overcome significant design challenges.",
      author: "Michael Chen",
      company: "GreenTech Solutions"
    },
    {
      quote: "The precision and quality of Stormant's engineering work is unmatched. They understood our requirements perfectly and delivered a solution that was both elegant and functional.",
      author: "Dr. Emily Rodriguez",
      company: "MedTech Innovations"
    }
  ],
  
  cta: {
    title: "Let us engineer your next project",
    projects: "We have successfully delivered a diverse portfolio of engineering projects for our clients.",
    scope:"The breadth of our design work is reflected in the vast square footage we've carefully planned.",
    content: "Reach out today to discuss your project requirements, and let our engineering expertise develop a tailored solution for your success.",
    buttonText: "Contact Us"
  },
  
  footer: {
    visitText: "Visit Us",
    copyright: `© ${new Date().getFullYear()} Stormant Designs. All Rights Reserved.`
  }
};

export default siteData;