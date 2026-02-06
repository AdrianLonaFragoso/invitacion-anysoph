import { motion } from "framer-motion";
import floralBottom from "@/assets/floral-decoration-2.png";

const FooterSection = () => {
  return (
    <footer className="relative pt-8 pb-24 overflow-hidden">
      {/* Decorative top line */}
      <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8" />

      {/* Footer Text */}
      <motion.div
        className="text-center px-4 mb-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-script text-5xl sm:text-6xl text-gold mb-4">
          ¡Te esperamos!
        </p>
        <p className="font-serif text-lg text-muted-foreground">Con cariño,</p>
        <p className="font-serif text-xl text-foreground mt-1">
          Jimena, Adrian & Any Soph
        </p>
      </motion.div>

      {/* Bottom Floral Decoration */}
      <motion.img
        src={floralBottom}
        alt="Decoración floral"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </footer>
  );
};

export default FooterSection;
