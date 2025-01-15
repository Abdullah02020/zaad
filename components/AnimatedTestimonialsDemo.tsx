import { AnimatedTestimonials } from "@/components/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "James Carter",
      designation: "Product Manager at TechFlow",
      src: "/james-person-1.jpg",
    },
    {
      quote:
        "Implementation was seamless, and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/person4.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "David Johnson",
      designation: "Operations Director at CloudScale",
      src: "/person 3.jpg",
    },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "/james-person-1.jpg",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "/james-person-1.jpg",
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
