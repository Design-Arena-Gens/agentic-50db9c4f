"use client";

import { motion } from "framer-motion";
import type { Monument } from "./MonumentCard";
import { MonumentCard } from "./MonumentCard";

type MonumentGalleryProps = {
  monuments: Monument[];
};

export function MonumentGallery({ monuments }: MonumentGalleryProps) {
  return (
    <section className="holo-grid relative z-10 mx-auto max-w-7xl px-4 pb-32 pt-10 sm:px-8 lg:px-12">
      <div className="mb-16 flex flex-col gap-6 text-white">
        <motion.p
          className="text-xs uppercase tracking-[0.45em] text-white/60"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Archive Index: 2077 / Global Monuments Directorate
        </motion.p>
        <motion.h2
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Immersive dossiers of Earth&apos;s most celebrated monuments re-coded
          for the megacities of 2077.
        </motion.h2>
        <motion.p
          className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Swipe through the holo-stream to review strategic upgrades, climate
          shielding, and cultural augmentations applied to each site after the
          Post-Carbon Reconstruction era. All feeds are quantum-synced to
          NeoSight&apos;s databanks in real time.
        </motion.p>
      </div>

      <motion.div
        className="grid gap-10 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {monuments.map((monument, index) => (
          <MonumentCard key={monument.id} monument={monument} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
