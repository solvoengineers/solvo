"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";
import { allBlogs, blogCategories } from "@/app/helpers/blogs.data";
import BlogCard from "@/app/components/BlogCard";
import Slider from "@/app/components/Slider";
import { allIcons } from "@/app/helpers/icons";

interface BlogListSectionProps {}

const BlogListSection: React.FC<BlogListSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    allBlogs[0].categories[0]
  );
  const categoryListRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handlePrevious = () => {
    swiperInstance?.slidePrev();
  };

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  const handleDotClick = (index: number) => {
    swiperInstance?.slideTo(index);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  // Filter blogs based on selected category ID
  const filteredBlogs = selectedCategoryId
    ? allBlogs.filter((blog) => blog.categories.includes(selectedCategoryId))
    : allBlogs;

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategoryId(categoryId);
    setCurrentIndex(0);
    // Reset swiper to first slide when category changes
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  };

  const checkScrollPosition = () => {
    if (categoryListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoryListRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollCategoryList = (direction: "left" | "right") => {
    if (categoryListRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        direction === "left"
          ? categoryListRef.current.scrollLeft - scrollAmount
          : categoryListRef.current.scrollLeft + scrollAmount;
      categoryListRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      // Check scroll position after animation completes
      setTimeout(() => {
        checkScrollPosition();
      }, 500);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const categoryList = categoryListRef.current;
    if (categoryList) {
      categoryList.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        categoryList.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  return (
    <section className="w-full flex flex-col items-center gap-[1.875rem] relative sm:px-side-space">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6">
        {/* Title Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-footer-heading font-semibold font-poppins">
            <span className="text-primary-blue">Insights & </span>Articles
          </h2>

          {/* Category Filter Section */}
          <div className="relative flex flex-row sm:flex-col gap-5 items-start">
            {/* All Categories Button */}
            <button
              onClick={() => handleCategoryClick(null)}
              className={`px-4 py-2 border rounded-2xl whitespace-nowrap shrink-0 transition-all ${
                selectedCategoryId === null
                  ? "border-primary-blue bg-primary-blue/10"
                  : "border-footer-border bg-white"
              }`}
            >
              <span
                className={`text-sm  font-normal font-poppins ${
                  selectedCategoryId === null
                    ? "text-primary-blue"
                    : "text-footer-border"
                }`}
              >
                All Categories
              </span>
            </button>

            {/* Category Buttons Container with Chevrons */}
            <div className="relative flex-1 w-full">
              {/* Left Chevron - Mobile Only */}
              {true && (
                <button
                  onClick={() => scrollCategoryList("left")}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block text-primary-blue hover:text-primary-blue transition-colors"
                  aria-label="Scroll left"
                >
                  {allIcons.chevronLeft(16, 16)}
                </button>
              )}

              {/* Category Buttons */}
              <div
                ref={categoryListRef}
                className="flex flex-row gap-[0.625rem] items-center overflow-x-auto w-full pb-1 custom-scrollbar"
              >
                {blogCategories.map((category) => {
                  const isSelected = selectedCategoryId === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`flex flex-row items-center gap-[0.625rem] cursor-pointer rounded-2xl px-4 py-2 whitespace-nowrap shrink-0 transition-all ${
                        isSelected
                          ? "border-primary-blue bg-primary-blue/10"
                          : "border-footer-border bg-white"
                      }`}
                    >
                      {/* Icon */}
                      <div className="relative w-4 h-4 shrink-0">
                        <Image
                          src={category.icon}
                          alt={category.name}
                          fill
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span
                        className={`text-sm  font-normal font-poppins ${
                          isSelected
                            ? "text-primary-blue"
                            : "text-footer-border"
                        }`}
                      >
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Chevron - Mobile Only */}
              {true && (
                <button
                  onClick={() => scrollCategoryList("right")}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block text-primary-blue hover:text-primary-blue transition-colors"
                  aria-label="Scroll right"
                >
                  {allIcons.chevronRight(16, 16)}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Swiper Container */}
        {filteredBlogs.length > 0 && (
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={1.25}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={handleSlideChange}
              className="w-full [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:!items-stretch"
              allowTouchMove={true}
              touchEventsTarget="container"
              speed={500}
              grabCursor={true}
              resistance={true}
              resistanceRatio={0.85}
              autoHeight={false}
            >
              {filteredBlogs.map((blog, index) => (
                <SwiperSlide key={blog.id} className="!h-auto">
                  <BlogCard blog={blog} className="w-full h-full" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Slider Controls */}
        {filteredBlogs.length > 0 && (
          <div className="w-full flex items-center justify-end gap-3">
            <Slider
              currentIndex={currentIndex}
              totalItems={filteredBlogs.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onDotClick={handleDotClick}
              mode="arrows-only"
            />
          </div>
        )}

        {/* No blogs message */}
        {filteredBlogs.length === 0 && (
          <div className="w-full flex items-center justify-center py-12">
            <p className="text-base text-footer-text font-normal font-poppins">
              No blogs found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogListSection;
