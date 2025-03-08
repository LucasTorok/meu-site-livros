import { useState } from "react";

export default function BookCard({ cover, title, author }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="book-card flex flex-col gap-2.5 w-full max-w-[218px] cursor-pointer transition-all duration-300 hover:scale-[1.03]">
      <div className="book-card-img relative bg-[#EDEBE4] h-[18.75rem] w-full flex justify-center items-center">
        {cover.hasImage ? (
          <>
            {/* Skeleton Loading */}
            {!isImageLoaded && (
              <div className="w-full h-full bg-gray-300 animate-pulse absolute inset-0 z-10" />
            )}
            {/* Image */}
            <img
              src={cover.href}
              alt={cover.alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={handleImageLoad}
            />
          </>
        ) : (
          <span className="text-center text-sm text-[#888888]">Sem capa disponível</span>
        )}
      </div>
      <h4 className="book-card-title text-2xl text-[#74642F] text-center">
        {title}
      </h4>
      <p className="book-card-author text-sm text-[#888888] text-center">
        {author}
      </p>
    </div>
  );
}
