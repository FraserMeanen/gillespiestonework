"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleProjects, setVisibleProjects] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const juraImages = [
    "/jura-project/jura-image-1.jpg",
    "/jura-project/jura-image-2.jpg",
    "/jura-project/jura-image-3.jpg",
    "/jura-project/jura-image-4.jpg",
    "/jura-project/jura-image-5.jpg",
    "/jura-project/jura-image-6.jpg",
    "/jura-project/jura-image-7.jpg",
    "/jura-project/jura-image-8.jpg",
  ];

  const firePlaceImages = [
    "/fire-place-project/fire-place-1.jpg",
    "/fire-place-project/fire-place-2.jpg",
    "/fire-place-project/fire-place-3.jpg",
    "/fire-place-project/fire-place-4.jpg",
    "/fire-place-project/fire-place-5.jpg",
    "/fire-place-project/fire-place-6.jpg",
    "/fire-place-project/fire-place-7.jpg",
  ];

  const chineseImages = [
    "/chinese/chinese-1.jpeg",
    "/chinese/chinese-2.jpeg",
    "/chinese/chinese-3.jpeg",
    "/chinese/chinese-4.jpeg",
    "/chinese/chinese-5.jpeg",
    "/chinese/chinese-6.jpeg",
    "/chinese/chinese-7.jpeg",
    "/chinese/chinese-8.jpeg",
  ];

  const slateImages = [
    "/slate/slate-1.jpg",
    "/slate/slate-2.jpg",
    "/slate/slate-3.jpg",
    "/slate/slate-4.jpg",
    "/slate/slate-6.jpg",
  ];

  const golfImages = [
    "/golf/golf-1.jpeg",
    "/golf/golf-2.jpeg",
    "/golf/golf-3.jpeg",
    "/golf/golf-4.jpeg",
    "/golf/golf-5.jpeg",
  ];

  const crossImages = [
    "/cross/cross-1.jpeg",
    "/cross/cross-2.jpeg",
    "/cross/cross-3.jpeg",
    "/cross/cross-4.jpeg",
    "/cross/cross-5.jpeg",
    "/cross/cross-6.jpeg",
    "/cross/cross-7.jpeg",
  ];

  const featureImages = [
    "/feature/feature-1.jpeg",
    "/feature/feature-2.jpeg",
    "/feature/feature-3.jpeg",
    "/feature/feature-4.jpeg",
    "/feature/feature-5.jpeg",
    "/feature/feature-6.jpeg",
  ];

  const seatImages = [
    "/seat/seat-1.jpeg",
    "/seat/seat-2.jpeg",
    "/seat/seat-3.jpeg",
    "/seat/seat-4.jpeg",
    "/seat/seat-5.jpeg",
    "/seat/seat-6.jpeg",
    "/seat/seat-7.jpeg",
    "/seat/seat-8.jpeg",
  ];

  const patioImages = [
    "/patio/patio-1.jpeg",
    "/patio/patio-2.jpeg",
    "/patio/patio-3.jpeg",
    "/patio/patio-4.jpeg",
    "/patio/patio-5.jpeg",
    "/patio/patio-6.jpeg",
    "/patio/patio-7.jpeg",
  ];

  const stepsImages = [
    "/steps/steps-1.jpg",
    "/steps/steps-2.jpg",
    "/steps/steps-3.jpg",
    "/steps/steps-4.jpg",
    "/steps/steps-5.jpg",
    "/steps/steps-6.jpg",
  ];

  const putWallImages = [
    "/put-wall/put-wall-1.jpeg",
    "/put-wall/put-wall-2.jpeg",
    "/put-wall/put-wall-3.jpeg",
    "/put-wall/put-wall-4.jpeg",
    "/put-wall/put-wall-5.jpeg",
    "/put-wall/put-wall-6.jpeg",
  ];

  const bridgeImages = [
    "/bridge/bridge-1.jpeg",
    "/bridge/bridge-2.jpeg",
    "/bridge/bridge-3.jpeg",
    "/bridge/bridge-4.jpeg",
    "/bridge/bridge-5.jpeg",
    "/bridge/bridge-6.jpeg",
  ];

  const hutImages = [
    "/hut/hut-1.jpeg",
    "/hut/hut-2.jpeg",
    "/hut/hut-3.jpeg",
    "/hut/hut-4.jpeg",
    "/hut/hut-5.jpeg",
    "/hut/hut-6.jpeg",
    "/hut/hut-7.jpeg",
    "/hut/hut-8.jpeg",
    "/hut/hut-9.jpeg",
    "/hut/hut-10.jpeg",
  ];

  const porchImages = [
    "/porch/porch-1.jpeg",
    "/porch/porch-2.jpeg",
    "/porch/porch-3.jpeg",
    "/porch/porch-4.jpeg",
    "/porch/porch-5.jpeg",
    "/porch/porch-6.jpeg",
    "/porch/porch-7.jpeg",
    "/porch/porch-8.jpeg",
  ];

  const gardenImages = [
    "/garden/garden-1.jpg",
    "/garden/garden-2.jpg",
    "/garden/garden-3.jpg",
    "/garden/garden-4.jpg",
    "/garden/garden-5.jpg",
  ];

  const [juraImageIndex, setJuraImageIndex] = useState(0);
  const [firePlaceImageIndex, setFirePlaceImageIndex] = useState(0);
  const [chineseImageIndex, setChineseImageIndex] = useState(0);
  const [slateImageIndex, setSlateImageIndex] = useState(0);
  const [golfImageIndex, setGolfImageIndex] = useState(0);
  const [crossImageIndex, setCrossImageIndex] = useState(0);
  const [featureImageIndex, setFeatureImageIndex] = useState(0);
  const [seatImageIndex, setSeatImageIndex] = useState(0);
  const [patioImageIndex, setPatioImageIndex] = useState(0);
  const [stepsImageIndex, setStepsImageIndex] = useState(0);
  const [putWallImageIndex, setPutWallImageIndex] = useState(0);
  const [bridgeImageIndex, setBridgeImageIndex] = useState(0);
  const [hutImageIndex, setHutImageIndex] = useState(0);
  const [porchImageIndex, setPorchImageIndex] = useState(0);
  const [gardenImageIndex, setGardenImageIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const showPrevJuraImage = () => {
    const maxIndex = Math.max(juraImages.length - imagesPerView, 0);
    setJuraImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextJuraImage = () => {
    const maxIndex = Math.max(juraImages.length - imagesPerView, 0);
    setJuraImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevFirePlaceImage = () => {
    const maxIndex = Math.max(firePlaceImages.length - imagesPerView, 0);
    setFirePlaceImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextFirePlaceImage = () => {
    const maxIndex = Math.max(firePlaceImages.length - imagesPerView, 0);
    setFirePlaceImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevChineseImage = () => {
    const maxIndex = Math.max(chineseImages.length - imagesPerView, 0);
    setChineseImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextChineseImage = () => {
    const maxIndex = Math.max(chineseImages.length - imagesPerView, 0);
    setChineseImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevSlateImage = () => {
    const maxIndex = Math.max(slateImages.length - imagesPerView, 0);
    setSlateImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextSlateImage = () => {
    const maxIndex = Math.max(slateImages.length - imagesPerView, 0);
    setSlateImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevGolfImage = () => {
    const maxIndex = Math.max(golfImages.length - imagesPerView, 0);
    setGolfImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextGolfImage = () => {
    const maxIndex = Math.max(golfImages.length - imagesPerView, 0);
    setGolfImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevCrossImage = () => {
    const maxIndex = Math.max(crossImages.length - imagesPerView, 0);
    setCrossImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextCrossImage = () => {
    const maxIndex = Math.max(crossImages.length - imagesPerView, 0);
    setCrossImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevFeatureImage = () => {
    const maxIndex = Math.max(featureImages.length - imagesPerView, 0);
    setFeatureImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextFeatureImage = () => {
    const maxIndex = Math.max(featureImages.length - imagesPerView, 0);
    setFeatureImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevSeatImage = () => {
    const maxIndex = Math.max(seatImages.length - imagesPerView, 0);
    setSeatImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextSeatImage = () => {
    const maxIndex = Math.max(seatImages.length - imagesPerView, 0);
    setSeatImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevPatioImage = () => {
    const maxIndex = Math.max(patioImages.length - imagesPerView, 0);
    setPatioImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextPatioImage = () => {
    const maxIndex = Math.max(patioImages.length - imagesPerView, 0);
    setPatioImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevStepsImage = () => {
    const maxIndex = Math.max(stepsImages.length - imagesPerView, 0);
    setStepsImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextStepsImage = () => {
    const maxIndex = Math.max(stepsImages.length - imagesPerView, 0);
    setStepsImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevPutWallImage = () => {
    const maxIndex = Math.max(putWallImages.length - imagesPerView, 0);
    setPutWallImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextPutWallImage = () => {
    const maxIndex = Math.max(putWallImages.length - imagesPerView, 0);
    setPutWallImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevBridgeImage = () => {
    const maxIndex = Math.max(bridgeImages.length - imagesPerView, 0);
    setBridgeImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextBridgeImage = () => {
    const maxIndex = Math.max(bridgeImages.length - imagesPerView, 0);
    setBridgeImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevHutImage = () => {
    const maxIndex = Math.max(hutImages.length - imagesPerView, 0);
    setHutImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextHutImage = () => {
    const maxIndex = Math.max(hutImages.length - imagesPerView, 0);
    setHutImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevPorchImage = () => {
    const maxIndex = Math.max(porchImages.length - imagesPerView, 0);
    setPorchImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextPorchImage = () => {
    const maxIndex = Math.max(porchImages.length - imagesPerView, 0);
    setPorchImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const showPrevGardenImage = () => {
    const maxIndex = Math.max(gardenImages.length - imagesPerView, 0);
    setGardenImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const showNextGardenImage = () => {
    const maxIndex = Math.max(gardenImages.length - imagesPerView, 0);
    setGardenImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 768) {
        setImagesPerView(4);
      } else {
        setImagesPerView(1);
      }
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);

    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);

          if (entry.isIntersecting) {
            setVisibleProjects((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="bg-[#173d22]">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-white/80 md:px-6">
          <div className="flex items-start justify-between gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col text-left">
              <a
                href="mailto:gillespiecolonsay@gmail.com"
                className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
              >
                gillespiecolonsay@gmail.com
              </a>

              <a
                href="mailto:patrickgillespie04@gmail.com"
                className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
              >
                patrickgillespie04@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-end text-right">
              <a
                href="tel:07771259321"
                className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
              >
                M: 07771 259 321
              </a>

              <a
                href="tel:07767017746"
                className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
              >
                M: 07767 017 746
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-[0.12em] text-white"
          >
            P. GILLESPIE & SON
          </Link>

          <nav className="hidden items-center gap-8 text-base text-white/80 md:flex">
            <Link
              href="/"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              About
            </Link>
            <Link
              href="/services"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="transition duration-300 hover:text-[#2f8f55] active:scale-95"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-md bg-[#2f8f55] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90 active:scale-95 md:inline-flex"
          >
            Get a Quote
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1 transition duration-300 active:scale-95 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-500 ease-in-out ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-500 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-500 ease-in-out ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        <div
          className={`mx-auto max-w-7xl origin-top px-4 transition-all duration-[1400ms] ease-in-out md:hidden ${
            menuOpen
              ? "max-h-96 scale-100 overflow-hidden pb-4 opacity-100"
              : "max-h-0 scale-95 overflow-hidden opacity-0"
          }`}
        >
          <div className="mt-2 rounded-xl border border-white/10 bg-black/85 p-3 shadow-2xl backdrop-blur-md transition duration-300 delay-100">
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-2 transition duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-black md:min-h-[420px]">
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/hero-wall1.jpeg"
            alt="Stone wall work"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 0px"
            className="object-cover object-[58%_45%]"
          />
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-[75%] md:block">
          <Image
            src="/hero-wall-ext.png"
            alt="Stone wall work"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 75vw"
            className="object-cover object-[75%_center] md:object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/85 to-transparent md:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-20">
          <div className="max-w-[320px] md:max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7fb857] md:text-base">
              Gallery
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
              A look at our stonework
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
              Explore examples of traditional stonework, restoration and bespoke
              projects completed across Argyll, Oban and the Western Isles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f2] text-black">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-10">
          <div className="text-center">
            <p className="text-2xl font-semibold uppercase tracking-[0.2em] text-[#2f8f55]">
              Our Gallery
            </p>

            <h2 className="mt-2 text-4xl font-semibold leading-tight md:text-5xl">
              Stonework Projects
            </h2>

            <div className="mx-auto mt-4 h-[2px] w-16 bg-[#2f8f55]" />
          </div>

          <div
            ref={(el) => {
              projectRefs.current[0] = el;
            }}
            data-index="0"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[0]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Jura New Build Stonework
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                New build completed on Jura using all natural stone from site,
                finished with a traditional lime pointing mix to give it an old
                school look.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevJuraImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous images"
              >
                ←
              </button>

              <button
                onClick={showNextJuraImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${juraImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {juraImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Jura stonework image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(juraImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[1] = el;
            }}
            data-index="1"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[1]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Fireplace Stonework
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Recently built fireplace for a property conversion, ready for
                stove installation. A solid feature that brings both character
                and practicality to the space.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevFirePlaceImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous fireplace images"
              >
                ←
              </button>

              <button
                onClick={showNextFirePlaceImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next fireplace images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${firePlaceImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {firePlaceImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Fireplace stonework image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(firePlaceImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[2] = el;
            }}
            data-index="2"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[2]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Chinese Stone Cladding at Glencruitten
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Chinese stone cladding carried out on villas at Glencruitten,
                creating a natural finish with strong detail and character
                throughout.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevChineseImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous Chinese stone images"
              >
                ←
              </button>

              <button
                onClick={showNextChineseImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next Chinese stone images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${chineseImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {chineseImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Chinese stone cladding image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(chineseImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[3] = el;
            }}
            data-index="3"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[3]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Slate Retaining Wall
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Slate retaining wall completed to provide a strong, tidy finish
                while making the most of the space and natural levels.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevSlateImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous slate wall images"
              >
                ←
              </button>

              <button
                onClick={showNextSlateImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next slate wall images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${slateImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {slateImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Slate retaining wall image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(slateImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[4] = el;
            }}
            data-index="4"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[4]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Dry Stone Wall at Ardfin Estate
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Dry stone walling completed at Ardfin Estate, creating a strong
                natural boundary that sits neatly within the surrounding
                landscape and coastal views.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevGolfImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous Ardfin wall images"
              >
                ←
              </button>

              <button
                onClick={showNextGolfImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next Ardfin wall images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${golfImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {golfImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Ardfin dry stone wall image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(golfImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[5] = el;
            }}
            data-index="5"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[5]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Celtic Cross Base Stonework
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Celtic cross installation at Loch Melfort, featuring a stone
                plinth built from locally sourced beach stone and finished with
                Caithness slabs. A strong, traditional piece designed to suit
                the surrounding landscape.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevCrossImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous Celtic cross images"
              >
                ←
              </button>

              <button
                onClick={showNextCrossImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next Celtic cross images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${crossImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {crossImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Celtic cross stonework image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(crossImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[6] = el;
            }}
            data-index="6"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[6]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Feature Wall with Water Fountain
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Feature wall with built-in water fountain at Kilchoan Estate,
                constructed using locally sourced beach stone with cobble-set
                detailing to the corners. Includes a concealed stone seat
                housing the pump, combining practicality with a clean,
                traditional finish.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevFeatureImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous feature images"
              >
                ←
              </button>

              <button
                onClick={showNextFeatureImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next feature images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${featureImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {featureImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Feature wall image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(featureImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[7] = el;
            }}
            data-index="7"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[7]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Stone Seat and Cairn for the Macintyre Clan Society
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Stone seat and cairn built for the Macintyre Clan Society,
                reusing original stone from the cairn to create a traditional
                feature that sits naturally within the surrounding landscape.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevSeatImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous seat and cairn images"
              >
                ←
              </button>

              <button
                onClick={showNextSeatImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next seat and cairn images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${seatImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {seatImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Stone seat and cairn image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(seatImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[8] = el;
            }}
            data-index="8"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[8]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Patio and Fire Pit
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Patio and fire pit built as a neat new addition to the garden,
                combining traditional stonework with a practical seating area
                and central fire pit feature.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevPatioImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous patio images"
              >
                ←
              </button>

              <button
                onClick={showNextPatioImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next patio images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${patioImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {patioImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Patio and fire pit image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(patioImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[9] = el;
            }}
            data-index="9"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[9]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Stone Steps
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Stone steps built with natural stone to create a clean, durable
                access route.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevStepsImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
              >
                ←
              </button>

              <button
                onClick={showNextStepsImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${stepsImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {stepsImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Stone steps image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(stepsImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[10] = el;
            }}
            data-index="10"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[10]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Putting Green Dry Stone Wall
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Dry stone wall built for the putting greens at Ardfin Estate,
                Jura, creating a strong natural boundary with a traditional
                finish that complements the surrounding landscape.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevPutWallImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous putting wall images"
              >
                ←
              </button>

              <button
                onClick={showNextPutWallImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next putting wall images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${putWallImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {putWallImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Putting green dry stone wall image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(putWallImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[11] = el;
            }}
            data-index="11"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[11]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Bridge and Walled Garden
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Bridge and walled garden completed at Kilchoan Estate, featuring
                traditional stonework built to suit the setting and create a
                strong natural finish.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevBridgeImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous bridge images"
              >
                ←
              </button>

              <button
                onClick={showNextBridgeImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next bridge images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${bridgeImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {bridgeImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Bridge and walled garden image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(bridgeImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[12] = el;
            }}
            data-index="12"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[12]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Fuel Store Extension at Port Appin Pier
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Fuel store extension completed at Port Appin Pier to create
                additional storage space. Built in a busy working area around
                the ferry traffic, with new stonework carefully matched to blend
                naturally with the existing structure.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevHutImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous hut images"
              >
                ←
              </button>

              <button
                onClick={showNextHutImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next hut images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${hutImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {hutImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Fuel store extension image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(hutImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[13] = el;
            }}
            data-index="13"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[13]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Stone Faced Porch on Islay
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Stone faced porch completed on Islay, bringing together
                traditional stonework and a clean finished entrance that suits
                the property beautifully.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevPorchImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous porch images"
              >
                ←
              </button>

              <button
                onClick={showNextPorchImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next porch images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${porchImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {porchImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Stone faced porch image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(porchImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              projectRefs.current[14] = el;
            }}
            data-index="14"
            className={`mt-12 rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 md:p-8 ${
              visibleProjects[14]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Garden Steps at Kilchoan Estate
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-7 text-black/85 md:text-lg">
                Garden steps completed at Kilchoan Estate, built in natural
                stone to create a smart, durable feature that sits neatly within
                the surrounding landscape.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={showPrevGardenImage}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Previous garden images"
              >
                ←
              </button>

              <button
                onClick={showNextGardenImage}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-105 hover:bg-[#2f8f55] active:scale-95"
                aria-label="Next garden images"
              >
                →
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${gardenImageIndex * (100 / imagesPerView)}%)`,
                  }}
                >
                  {gardenImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 md:w-1/4"
                    >
                      <div className="relative h-[280px] min-h-[280px] overflow-hidden rounded-xl md:h-[220px] md:min-h-[220px]">
                        <Image
                          src={image}
                          alt={`Garden steps image ${index + 1}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-pointer object-cover"
                          onClick={() => {
                            setLightboxImages(gardenImages);
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f8f55]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Contact P. Gillespie & Son
            </h2>

            <p className="mt-5 text-base leading-7 text-white/85 md:text-lg">
              Get in touch for quotes, enquiries or to discuss your stonework
              project across Argyll, Oban and the Western Isles.
            </p>
          </div>

          <div className="grid gap-4 self-start">
            <a
              href="tel:07771259321"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#2f8f55]">
                Mobile
              </p>
              <p className="mt-2 text-lg text-white">07771 259 321</p>
            </a>

            <a
              href="tel:07767017746"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#2f8f55]">
                Mobile
              </p>
              <p className="mt-2 text-lg text-white">07767 017 746</p>
            </a>

            <a
              href="mailto:gillespiecolonsay@gmail.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#2f8f55]">
                Email
              </p>
              <p className="mt-2 break-all text-lg text-white">
                gillespiecolonsay@gmail.com
              </p>
            </a>

            <a
              href="mailto:patrickgillespie04@gmail.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-[0.98]"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#2f8f55]">
                Email
              </p>
              <p className="mt-2 break-all text-lg text-white">
                patrickgillespie04@gmail.com
              </p>
            </a>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/P.Gillespieandson"
                aria-label="Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.03 1.792-4.705 4.533-4.705 1.313 0 2.686.236 2.686.236v2.977h-1.514c-1.49 0-1.955.931-1.955 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/pgillespieandson/"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-[#2f8f55] hover:bg-white/[0.05] active:scale-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 text-white"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-black/85 text-3xl text-white transition hover:bg-[#2f8f55] active:scale-95 md:right-6 md:top-6"
            aria-label="Close full screen image"
          >
            ×
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev === 0 ? lightboxImages.length - 1 : prev - 1,
              )
            }
            className="absolute left-3 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/85 text-3xl text-white transition hover:bg-[#2f8f55] active:scale-95 md:left-6"
            aria-label="Previous full screen image"
          >
            ←
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev === lightboxImages.length - 1 ? 0 : prev + 1,
              )
            }
            className="absolute right-3 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/85 text-3xl text-white transition hover:bg-[#2f8f55] active:scale-95 md:right-6"
            aria-label="Next full screen image"
          >
            →
          </button>

          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <div className="relative h-full w-full max-w-6xl">
              <Image
                src={lightboxImages[lightboxIndex]}
                alt={`Full screen image ${lightboxIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
