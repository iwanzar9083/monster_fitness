import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Instagram,
  MapPin,
  Clock,
  Dumbbell,
  Users,
  Target,
  Zap,
  Star,
  CheckCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryRef.current) {
      // Responsive scroll amount: smaller on mobile, larger on desktop
      const isMobile = window.innerWidth < 640;
      const scrollAmount = isMobile ? 300 : 320; // Width of one image plus gap
      const currentScroll = galleryRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      galleryRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const handleCallNow = () => {
    window.open("tel:+917567004025", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917567004025", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/monster_fitness_98/", "_blank");
  };

  const handleOwnerInstagram = () => {
    window.open("https://www.instagram.com/supreme_soul_4224", "_blank");
  };

  const pricingPlans = [
    {
      title: "One Day Pass",
      price: "₹100",
      period: "per day",
      features: ["Full gym access", "Basic equipment"],
      popular: false,
    },
    {
      title: "Monthly",
      price: "₹600",
      period: "per month",
      features: [
        "Full gym access",
        "All equipment",
      ],
      popular: false,
    },
    {
      title: "Monthly + Cardio",
      price: "₹800",
      period: "per month",
      features: [
        "Full gym access",
        "All equipment",
      ],
      popular: true,
    },
    {
      title: "3 Months",
      price: "₹1,600",
      period: "3 months",
      features: [
        "Full gym access",
        "All equipment",
        "Nutrition guidance",
      ],
      popular: false,
    },
    {
      title: "6 Months",
      price: "₹3,300",
      period: "6 months",
      features: [
        "Full gym access",
        "All equipment",
        "Nutrition guidance",
        "Progress tracking",
      ],
      popular: false,
    },
    {
      title: "Annual",
      price: "₹6,500",
      period: "per year",
      features: [
        "Full gym access",
        "All equipment",
        "Nutrition guidance",
        "Progress tracking",
        "Priority support",
      ],
      popular: false,
    },
  ];

  const personalTraining = {
    title: "Personal Training",
    price: "₹3,000",
    period: "per month",
    features: [
      "One-on-one training",
      "Customized workout plan",
      "Diet plan included",
      "Progress monitoring",
      "Flexible scheduling",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-monster-black via-monster-gray to-monster-black">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-sm border-b border-monster-red/20 z-50 transition-all duration-300 ${
          isScrolled ? "bg-monster-black/98" : "bg-monster-black/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-monster-red animate-float" />
              <span className="text-2xl font-bold text-monster-white font-orbitron tracking-wider">
                MONSTER <span className="text-monster-red">FITNESS</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#home"
                className="text-monster-white hover:text-monster-red transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#gallery"
                className="text-monster-white hover:text-monster-red transition-colors duration-300"
              >
                Gallery
              </a>
              <a
                href="#pricing"
                className="text-monster-white hover:text-monster-red transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-monster-white hover:text-monster-red transition-colors duration-300"
              >
                Contact
              </a>
              <Button
                onClick={handleCallNow}
                className="btn-premium glow-premium text-white transition-all duration-300 font-oswald tracking-wide"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-monster-white hover:text-monster-red"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-monster-black/98 border-t border-monster-red/20 animate-fade-in-up">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-monster-white hover:text-monster-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#gallery"
                  className="block px-3 py-2 text-monster-white hover:text-monster-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-monster-white hover:text-monster-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-monster-white hover:text-monster-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="px-3 py-2">
                  <Button
                    onClick={() => {
                      handleCallNow();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full btn-premium text-white font-oswald tracking-wide"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F54691facdc284f1491ba450015f44b59?format=webp&width=800"
            alt="Monster Fitness Gym Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-monster-black/40 via-monster-black/20 to-monster-black/40"></div>
          <div className="absolute inset-0 bg-premium opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-monster-red/20 text-monster-red border-monster-red/50">
                Premium Fitness Experience
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron tracking-wider">
                <span className="text-premium">MONSTER</span>
                <span className="block text-premium-red float-premium">
                  FITNESS
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-monster-gray-light mb-8 max-w-3xl mx-auto font-exo">
                Transform your body, unleash your potential. Join Gujarat's most
                advanced fitness center.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-300">
              <Button
                onClick={handleCallNow}
                size="lg"
                className="btn-premium glow-premium text-white px-8 py-4 text-lg font-oswald tracking-wide"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 75670 04025
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="card-premium border-monster-red text-monster-red hover:text-white px-8 py-4 text-lg font-oswald tracking-wide"
              >
                WhatsApp Us
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-monster-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-monster-white mb-4 font-oswald">
              Why Choose{" "}
              <span className="text-monster-red">Monster Fitness?</span>
            </h2>
            <p className="text-xl text-monster-gray-light max-w-3xl mx-auto font-exo">
              State-of-the-art equipment, expert guidance, and a community that
              motivates you to achieve your best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group card-premium p-8 rounded-2xl transition-all duration-500">
              <div className="bg-gradient-to-br from-monster-red/30 to-monster-orange/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-monster-red/50 group-hover:to-monster-orange/50 transition-all duration-300 float-premium">
                <Dumbbell className="h-8 w-8 text-monster-red" />
              </div>
              <h3 className="text-xl font-bold text-premium mb-4 font-oswald">
                Modern Equipment
              </h3>
              <p className="text-monster-gray-light font-exo">
                Latest fitness equipment and machines for all your workout
                needs.
              </p>
            </div>

            <div className="text-center group card-premium p-8 rounded-2xl transition-all duration-500">
              <div
                className="bg-gradient-to-br from-monster-red/30 to-monster-orange/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-monster-red/50 group-hover:to-monster-orange/50 transition-all duration-300 float-premium"
                style={{ animationDelay: "1s" }}
              >
                <Users className="h-8 w-8 text-monster-red" />
              </div>
              <h3 className="text-xl font-bold text-premium mb-4 font-oswald">
                Expert Trainers
              </h3>
              <p className="text-monster-gray-light font-exo">
                Certified trainers to guide you through your fitness journey.
              </p>
            </div>

            <div className="text-center group card-premium p-8 rounded-2xl transition-all duration-500">
              <div
                className="bg-gradient-to-br from-monster-red/30 to-monster-orange/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-monster-red/50 group-hover:to-monster-orange/50 transition-all duration-300 float-premium"
                style={{ animationDelay: "2s" }}
              >
                <Target className="h-8 w-8 text-monster-red" />
              </div>
              <h3 className="text-xl font-bold text-premium mb-4 font-oswald">
                Goal Focused
              </h3>
              <p className="text-monster-gray-light font-exo">
                Personalized workout plans tailored to your specific goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Owner Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-premium mb-4 font-oswald">
              Meet Our <span className="text-premium-red">Founder</span>
            </h2>
            <p className="text-xl text-monster-gray-light max-w-3xl mx-auto font-exo">
              Passionate about fitness and dedicated to transforming lives
              through strength and determination.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-premium p-8 md:p-12 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Owner Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-premium mb-2 font-oswald">
                      Sagar Chauhan
                    </h3>
                    <div className="badge-premium inline-block px-4 py-2 rounded-full mb-4">
                      <span className="text-white font-semibold font-exo">
                        Founder & Owner
                      </span>
                    </div>
                  </div>

                  <p className="text-monster-gray-light font-exo text-lg leading-relaxed">
                    With years of dedication to fitness and helping others
                    achieve their goals, Sagar founded Monster Fitness to create
                    a community where transformation happens through hard work,
                    dedication, and the right guidance.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-monster-red/30 to-monster-orange/30 rounded-full flex items-center justify-center">
                        <Dumbbell className="h-5 w-5 text-monster-red" />
                      </div>
                      <span className="text-monster-gray-light font-exo">
                        Certified Personal Trainer
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      onClick={handleCallNow}
                      className="btn-premium text-white px-6 py-3 font-oswald tracking-wide"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Sagar
                    </Button>
                    <Button
                      onClick={handleOwnerInstagram}
                      className="btn-outline-premium px-6 py-3 font-oswald tracking-wide"
                    >
                      <Instagram className="mr-2 h-4 w-4" />
                      @supreme_soul_4224
                    </Button>
                  </div>
                </div>

                {/* Owner Image */}
                <div className="relative">
                  <div className="card-premium p-6 rounded-2xl">
                    <div className="aspect-square rounded-xl overflow-hidden relative">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F938145c09b344306a70b101e2a5a58d8?format=webp&width=800"
                        alt="Sagar Chauhan - Founder of Monster Fitness"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-monster-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-exo text-sm font-semibold">
                          Founder of Monster Fitness
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-monster-white mb-4 font-oswald">
              Our <span className="text-monster-red">Gym Gallery</span>
            </h2>
            <p className="text-xl text-monster-gray-light max-w-3xl mx-auto font-exo">
              Take a look inside Monster Fitness - state-of-the-art equipment,
              spacious workout areas, and the perfect environment to achieve
              your goals.
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <Button
                onClick={() => scrollGallery("left")}
                size="icon"
                className="bg-monster-red/90 hover:bg-monster-red text-white rounded-full shadow-lg hover-lift"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <Button
                onClick={() => scrollGallery("right")}
                size="icon"
                className="bg-monster-red/90 hover:bg-monster-red text-white rounded-full shadow-lg hover-lift"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Gallery Container */}
            <div
              ref={galleryRef}
              className="overflow-x-auto scrollbar-hide gallery-scroll"
            >
              <div
                className="flex space-x-6 pb-6"
                style={{ width: "max-content" }}
              >
                {[
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F83010b34fab94e93930bca1df2c53c9a?format=webp&width=800",
                    alt: "Monster Fitness gym member workout",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2Fe6b4f57719f04685a277ef7832fb7aba?format=webp&width=800",
                    alt: "Gym equipment and training area",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2Fa42f66254678458db482a10b5b9e67de?format=webp&width=800",
                    alt: "Monster Fitness member strength training",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2Fe8a1dcc2256b4ba4930b46241c623a33?format=webp&width=800",
                    alt: "Professional bodybuilding physique",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2Fbac6fe9f95644fe28fe4859ff3af3e47?format=webp&width=800",
                    alt: "Fitness transformation results",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2Fb35b78176fc54a57a06b393b8c0f424d?format=webp&width=800",
                    alt: "Monster Fitness back muscle development",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F8289c2fc4d094280bd3abc67059dd9c3?format=webp&width=800",
                    alt: "Gym member progress photos",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F2174593b95d64bc3ade1913bf4e93f02?format=webp&width=800",
                    alt: "Professional fitness photography",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2Fc3a3ffd568c047689b6780815639723e?format=webp&width=800",
                    alt: "Strength training at Monster Fitness",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2Fd1d854cdffea452f835433c5baadcbd1?format=webp&width=800",
                    alt: "Monster Fitness member poses",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F7161933a251f430aa86bc456bf694c99?format=webp&width=800",
                    alt: "Gym workout environment",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F3a07303b8613493ab24dd8d5dd047c2d?format=webp&width=800",
                    alt: "Monster Fitness training results",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F32dccac120624ff59e96478f59be232c?format=webp&width=800",
                    alt: "Professional gym member photos",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2F4ab5f2d0b19d433bbd49b0727194c28c?format=webp&width=800",
                    alt: "Monster Fitness member progress",
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F53a4c27e6d1b49baa534f65b1210572d%2Fffb3ce50ab694e41bd19b1c28e23a7d8?format=webp&width=800",
                    alt: "Gym member lifestyle photos",
                  },
                ].map((image, index) => (
                  <div key={index} className="flex-shrink-0 group gallery-item">
                    <div className="relative overflow-hidden rounded-lg bg-monster-gray/30 border border-monster-gray hover:border-monster-red transition-all duration-500 gallery-hover-effect hover-lift">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-72 sm:w-80 h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-monster-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-monster-white transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-monster-black/60 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-sm font-exo leading-relaxed">
                            {image.alt}
                          </p>
                        </div>
                      </div>
                      {/* Image number indicator */}
                      <div className="absolute top-4 right-4 bg-monster-red/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Instructions */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-8 rounded transition-all duration-300 ${
                      i === 0
                        ? "bg-monster-red"
                        : "bg-monster-gray hover:bg-monster-red/50"
                    }`}
                  ></div>
                ))}
              </div>
              <span className="text-monster-gray-light text-sm font-exo hidden md:block">
                Scroll to see more photos
              </span>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-monster-white mb-4 font-oswald">
                Join the{" "}
                <span className="text-monster-red">Monster Family</span>
              </h3>
              <p className="text-monster-gray-light font-exo mb-8 leading-relaxed">
                These photos showcase real transformations from our dedicated
                members. Your journey to greatness starts here at Monster
                Fitness - where ordinary people become extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCallNow}
                  size="lg"
                  className="btn-premium glow-premium text-white px-8 py-4 text-lg font-oswald tracking-wide"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Your Visit
                </Button>
                <Button
                  onClick={handleInstagram}
                  size="lg"
                  className="btn-outline-premium px-8 py-4 text-lg font-oswald tracking-wide"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow Our Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-monster-white mb-4 font-oswald">
              Choose Your <span className="text-monster-red">Plan</span>
            </h2>
            <p className="text-xl text-monster-gray-light max-w-3xl mx-auto font-exo">
              Flexible pricing options to suit your fitness goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="relative card-readable transition-all duration-500"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl font-oswald">
                    {plan.title}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-monster-red font-bebas tracking-wider">
                      {plan.price}
                    </span>
                    <span className="text-gray-300 font-exo">
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-200"
                      >
                        <CheckCircle className="h-5 w-5 text-monster-red mr-3 flex-shrink-0" />
                        <span className="font-exo">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleCallNow}
                    className="w-full mt-6 font-oswald tracking-wide card-premium hover:bg-monster-red text-white"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal Training */}
          <div className="max-w-md mx-auto">
            <Card className="card-readable glow-premium border-monster-red/30">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-2 bg-monster-red text-white">
                  <Star className="w-4 h-4 mr-1" />
                  Premium
                </Badge>
                <CardTitle className="text-white text-xl font-oswald">
                  {personalTraining.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-monster-red font-bebas tracking-wider">
                    {personalTraining.price}
                  </span>
                  <span className="text-gray-300 font-exo">
                    /{personalTraining.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {personalTraining.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                      <CheckCircle className="h-5 w-5 text-monster-red mr-3 flex-shrink-0" />
                      <span className="font-exo">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleCallNow}
                  className="w-full mt-6 btn-premium glow-premium text-white font-oswald tracking-wide"
                >
                  Book Personal Training
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gym Timings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-monster-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-monster-white mb-4 font-oswald">
              Gym <span className="text-monster-red">Timings</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-readable transition-all duration-500">
              <CardHeader className="text-center">
                <div className="bg-monster-red/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-monster-red" />
                </div>
                <CardTitle className="text-white font-oswald">
                  Morning Session
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-monster-red mb-2 font-bebas tracking-wider">
                  5:30 AM - 11:00 AM
                </div>
                <p className="text-gray-200 font-exo">
                  Perfect for early birds and pre-work sessions
                </p>
              </CardContent>
            </Card>

            <Card className="card-readable transition-all duration-500">
              <CardHeader className="text-center">
                <div className="bg-monster-red/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-monster-red" />
                </div>
                <CardTitle className="text-white font-oswald">
                  Evening Session
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-monster-red mb-2 font-bebas tracking-wider">
                  4:00 PM - 9:00 PM
                </div>
                <p className="text-gray-200 font-exo">
                  Ideal for after-work and evening workouts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-monster-white mb-4 font-oswald">
              Visit <span className="text-monster-red">Monster Fitness</span>
            </h2>
            <p className="text-xl text-monster-gray-light max-w-3xl mx-auto font-exo">
              Located in the heart of Ankleshwar, Gujarat. Easy to reach and
              equipped with everything you need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="card-readable">
                <CardHeader>
                  <CardTitle className="text-white flex items-center font-oswald">
                    <MapPin className="h-6 w-6 text-monster-red mr-3" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-lg leading-relaxed font-exo">
                    2nd Floor, Krishna Complex
                    <br />
                    Nr. Gokul Dham Society
                    <br />
                    Parshwanath Society, Andada
                    <br />
                    Ankleshwar, Gujarat 393010
                  </p>
                </CardContent>
              </Card>

              <Card className="card-readable">
                <CardHeader>
                  <CardTitle className="text-white flex items-center font-oswald">
                    <Phone className="h-6 w-6 text-monster-red mr-3" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-gray-300 mb-2 font-exo">
                      Phone & WhatsApp:
                    </p>
                    <p className="text-white text-lg font-semibold font-bebas tracking-wider">
                      +91 75670 04025
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      onClick={handleCallNow}
                      className="btn-premium text-white font-oswald tracking-wide"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button
                      onClick={handleWhatsApp}
                      className="btn-outline-premium font-oswald tracking-wide"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-readable">
                <CardHeader>
                  <CardTitle className="text-white flex items-center font-oswald">
                    <Instagram className="h-6 w-6 text-monster-red mr-3" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-gray-300 mb-2 font-exo">
                      Gym Instagram:
                    </p>
                    <Button
                      onClick={handleInstagram}
                      className="btn-outline-premium font-oswald tracking-wide"
                    >
                      @monsterfitness
                    </Button>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2 font-exo">
                      Owner: Sagar Chauhan
                    </p>
                    <Button
                      onClick={handleOwnerInstagram}
                      className="btn-outline-premium font-oswald tracking-wide"
                    >
                      @supreme_soul_4224
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <div className="bg-monster-gray/50 border border-monster-gray rounded-lg overflow-hidden">
              <div className="p-6 border-b border-monster-gray">
                <h3 className="text-xl font-bold text-monster-white">
                  Find Us on Map
                </h3>
                <p className="text-monster-gray-light mt-2">
                  Get directions to Monster Fitness
                </p>
              </div>
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8544!2d72.99!3d21.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM3JzQ4LjAiTiA3MsKwNTknMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Monster Fitness Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-monster-black border-t border-monster-red/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Dumbbell className="h-8 w-8 text-monster-red" />
              <span className="text-2xl font-bold text-monster-white font-orbitron tracking-wider">
                MONSTER <span className="text-monster-red">FITNESS</span>
              </span>
            </div>
            <p className="text-monster-gray-light mb-6 font-exo">
              Transform your body, unleash your potential.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <Button
                onClick={handleCallNow}
                size="sm"
                className="btn-outline-premium font-oswald tracking-wide"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call
              </Button>
              <Button
                onClick={handleInstagram}
                size="sm"
                className="btn-outline-premium font-oswald tracking-wide"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </Button>
            </div>
            <p className="text-monster-gray-light text-sm font-exo">
              © 2024 Monster Fitness. All rights reserved. | Owner: Sagar
              Chauhan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
