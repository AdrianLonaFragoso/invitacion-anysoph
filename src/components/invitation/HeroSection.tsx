import { motion } from "framer-motion";
import floralTop from "@/assets/floral-decoration-2.png";
import floralWreath from "@/assets/floral-wreath.png";
import babyPhoto from "@/assets/baby-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Top Floral Decoration */}
      <motion.img
        src={floralTop}
        alt="Decoración floral"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md pointer-events-none"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Baby Photo with Wreath */}
      <motion.div
        className="relative mt-28 mb-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative w-64 h-64 sm:w-96 sm:h-96">
          {/* Gold ring behind wreath */}
          <div className="absolute inset-2 rounded-full border-4 border-gold/40" />

          {/* Baby photo */}
          <div className="absolute inset-1 rounded-full overflow-hidden shadow-lg">
            <img
              src={babyPhoto}
              alt="Anya Sophia"
              className="w-full h-full object-cover absolute top-4 left-2"
            />
          </div>

          {/* Floral wreath overlay */}
          <img
            src={floralWreath}
            alt="Corona floral"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none scale-150 sm:scale-125"
          />
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="font-serif text-lg tracking-widest text-muted-foreground uppercase">
          Mi Bautizo
        </p>
        <h1 className="font-script text-6xl sm:text-7xl text-gold leading-tight">
          Anya Sophia
        </h1>
      </motion.div>

      {/* Invitation Text */}
      <motion.p
        className="mt-6 font-serif text-lg text-center text-foreground/80 italic max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Te invitamos a celebrar con nosotros el bautizo de nuestra pequeña hija
      </motion.p>

      {/* Date Display */}
      <motion.div
        className="mt-8 flex items-center justify-center gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="text-center">
          <p className="font-sans text-sm tracking-widest text-muted-foreground uppercase">
            Sábado
          </p>
        </div>

        <div className="text-center border-x-2 border-gold/30 px-4 sm:px-6 py-2">
          <p className="font-script text-5xl sm:text-6xl text-gold">28</p>
          <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
            Febrero
          </p>
        </div>

        <div className="text-center">
          <p className="font-sans text-sm tracking-widest text-muted-foreground uppercase">
            A las 11:00
          </p>
        </div>
      </motion.div>

      {/* Year */}
      <motion.p
        className="mt-2 font-serif text-lg text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        2026
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
