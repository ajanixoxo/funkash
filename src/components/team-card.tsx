/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User } from "iconsax-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image?: string;
  bio?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, index = 0 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      className="group flex flex-col h-full rounded-xl bg-[#161b2e] border border-white/[0.06] hover:border-white/20 transition-all duration-300 overflow-hidden"
    >
      {/* Photo Frame */}
      <div className="relative w-full aspect-[4/5] bg-[#1a2035] overflow-hidden shrink-0 border-b border-white/[0.04] flex items-center justify-center">
        {member.image && !imageError ? (
          <>
            <img
              src={member.image}
              alt={member.name}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161b2e] via-transparent to-transparent opacity-40 pointer-events-none" />
          </>
        ) : (
          /* Clean, understated placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#131728]">
            <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 mb-3">
              <User size="28" color="#9ca3af" variant="Outline" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">
              Photo Pending
            </span>
          </div>
        )}

        {/* Department Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#0B1226]/90 text-[#C7A56A] border border-[#C7A56A]/20">
            {member.department}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-gray-300">
            {member.role}
          </p>
          {member.bio && (
            <p className="text-xs text-gray-400 leading-relaxed pt-2 font-light line-clamp-2">
              {member.bio}
            </p>
          )}
        </div>

        {/* Socials / Action */}
        {member.socials && (member.socials.linkedin || member.socials.twitter) && (
          <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center gap-2">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="px-2.5 py-1 rounded bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white text-xs font-medium transition-colors"
              >
                LinkedIn
              </a>
            )}
            {member.socials.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Twitter`}
                className="px-2.5 py-1 rounded bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white text-xs font-medium transition-colors"
              >
                Twitter
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
