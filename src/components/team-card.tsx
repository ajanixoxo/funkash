/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Linkedin, Twitter } from "lucide-react";

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="group flex flex-col h-full rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-purple-500/10"
    >
      {/* Photo / Avatar Frame */}
      <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-gray-900 via-[#1a1f3a] to-purple-950/40 overflow-hidden shrink-0 border-b border-white/5 flex items-center justify-center">
        {member.image && !imageError ? (
          <>
            <img
              src={member.image}
              alt={member.name}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111625] via-transparent to-transparent opacity-60 pointer-events-none" />
          </>
        ) : (
          /* Elegant placeholder frame when photo is pending */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background grid ambient */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Subtle glow */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl absolute pointer-events-none" />
            
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-purple-300 mb-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <User className="w-9 h-9 opacity-60" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">
              Photo Pending
            </span>
          </div>
        )}

        {/* Department Badge Floating Top Left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#161b2e]/80 backdrop-blur-md text-purple-300 border border-purple-500/30">
            {member.department}
          </span>
        </div>
      </div>

      {/* Text Details Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-200">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-purple-400/90 leading-snug">
            {member.role}
          </p>
          {member.bio && (
            <p className="text-xs text-gray-400 leading-relaxed pt-2 font-light line-clamp-2">
              {member.bio}
            </p>
          )}
        </div>

        {/* Socials / Footer */}
        {member.socials && (member.socials.linkedin || member.socials.twitter) && (
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-purple-600/30 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.socials.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Twitter`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-purple-600/30 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
