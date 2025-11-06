import type { Monument } from "@/components/MonumentCard";
import { MonumentGallery } from "@/components/MonumentGallery";

export default function Home() {
  const monuments: Monument[] = [
    {
      id: "neo-eiffel",
      name: "Eiffel Tower Holo-Spire",
      location: "Paris Megalopolis · EuroSilk District",
      synopsis:
        "The 19th-century lattice icon now radiates quantum light, projecting adaptive weather shields across the Seine skyline while hosting orbital elevators.",
      projection:
        "Adaptive photonic coils convert Parisian auroras into grid energy with 97% efficiency.",
      variant: "spire",
      palette: {
        base: "#1f1436",
        accent: "#13f5ff",
        glow: "#ff2d95",
      },
    },
    {
      id: "luxor-prism",
      name: "Giza Axiom Prism",
      location: "Cairo Expanse · Horizon Sector",
      synopsis:
        "Ancient limestone geometry fortified with nano-sand plating, projecting archival hieroglyphics as volumetric data streams across the desert sky.",
      projection:
        "Geo-anchors redirect Saharan storms, shielding Alexandria trade lanes and desert bio-domes.",
      variant: "temple",
      palette: {
        base: "#2d1f3c",
        accent: "#ffce1f",
        glow: "#ff2d95",
      },
    },
    {
      id: "taj-lotus",
      name: "Taj Mahal Quantum Lotus",
      location: "Agra Hyperloop Gate · Bharat Corridor",
      synopsis:
        "The marble mausoleum now levitates on a chromatic pool of light, refracting memories into iridescent auroras that bloom across the Yamuna night.",
      projection:
        "Emotion-sensitive lattice filters restore river vitality and power memorial gardens.",
      variant: "garden",
      palette: {
        base: "#1a2b36",
        accent: "#79ffce",
        glow: "#7a5cff",
      },
    },
    {
      id: "liberty-warden",
      name: "Statue of Liberty Sentinel",
      location: "New Manhattan Haven · Atlantic Shield",
      synopsis:
        "Liberty's torch now beams a continental lattice, scanning aerial vectors while projecting diplomatic codex streams toward incoming skyport traffic.",
      projection:
        "Tri-axis beacon filters airborne toxins and stabilizes harbor microclimates year-round.",
      variant: "guardian",
      palette: {
        base: "#133047",
        accent: "#15f2ff",
        glow: "#ff5c8d",
      },
    },
    {
      id: "opera-halo",
      name: "Sydney Opera Halo",
      location: "Sydney Oceanic Arcology · Pacific Ring",
      synopsis:
        "Multi-shell acoustics reframed as sonic sails that conduct tidal energy into holographic performances mapped onto the night surf.",
      projection:
        "Resonant wave-harvesters amplify the Pacific grid while safeguarding coral renewal sanctuaries.",
      variant: "gateway",
      palette: {
        base: "#0f1b35",
        accent: "#8af7ff",
        glow: "#ff2dbd",
      },
    },
    {
      id: "andes-portal",
      name: "Machu Picchu Skyward Portal",
      location: "Lima Highline Nexus · Andean Crest",
      synopsis:
        "Terraced ruins interlaced with levitating rings that visualize ancestral constellations, guiding eco-migrants through the rarefied cloudline.",
      projection:
        "Quantum terraces monitor biosphere health while sequencing cloud seeding for mountain biomes.",
      variant: "ring",
      palette: {
        base: "#142d24",
        accent: "#9df2b1",
        glow: "#3ef7ff",
      },
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#ff2d95]/40 via-[#13f5ff]/20 to-transparent blur-3xl" />
        <div className="absolute right-[-120px] top-32 h-[380px] w-[380px] rounded-full bg-[#7a5cff33] blur-3xl" />
        <div className="absolute bottom-16 left-[-140px] h-[320px] w-[320px] rounded-full bg-[#13f5ff2b] blur-3xl" />
      </div>

      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <div className="w-full max-w-4xl rounded-[36px] border border-white/10 bg-white/5 p-0.5">
          <div className="matrix-flow relative overflow-hidden rounded-[34px] px-8 py-10 sm:px-12 sm:py-14">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
            <header className="relative flex flex-col gap-6 text-white">
              <p className="w-fit rounded-full border border-white/20 bg-white/10 px-5 py-1 text-xs font-semibold uppercase tracking-[0.42em] text-white/80">
                NeoSight Archives // Cycle 77.4
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight drop-shadow-[0_0_18px_rgba(19,245,255,0.35)] sm:text-5xl lg:text-6xl">
                Cyberpunk Monuments Index 2077
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Dive into a multi-sensory atlas where heritage meets hypertech.
                Each dossier fuses historical DNA with tactical upgrades curated
                for life beyond the solar smogline.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4 text-xs uppercase tracking-[0.35em] text-white/60">
                <span className="rounded-full bg-white/10 px-4 py-2">
                  Quantum Preservation
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2">
                  Atmospheric Shielding
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2">
                  Cultural Holography
                </span>
              </div>
            </header>
          </div>
        </div>
      </section>

      <MonumentGallery monuments={monuments} />
    </main>
  );
}
