import React from 'react';
import { Instagram } from 'lucide-react';

const instaPhotos = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
  '/images/6.jpeg',
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F1E8] text-[#1F2418] border-t border-[#DDD6C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#4A5D2A]">
            FOLLOW ALONG
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#1F2418]">
            Follow us on Instagram
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-base font-semibold text-[#4A5D2A] hover:underline"
          >
            @bowlora
          </a>
        </div>

        {/* 6-Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaPhotos.map((img, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-[14px] overflow-hidden aspect-square border border-[#DDD6C4] shadow-sm bg-white"
            >
              <img
                src={img}
                alt={`Bowlora Instagram Post ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Olive Hover Overlay with Instagram Icon */}
              <div className="absolute inset-0 bg-[#4A5D2A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
