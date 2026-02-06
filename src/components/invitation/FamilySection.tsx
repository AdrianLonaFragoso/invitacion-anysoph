import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FamilySection = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {/* Papás */}
          <div className="text-center flex-1">
            <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
              Papás
            </p>
            <div className="space-y-1">
              <p className="font-serif text-xl text-foreground">
                Jimena Patricia Vega Cano
              </p>
              <p className="font-serif text-xl text-foreground">
                Julio Adrian Lona Fragoso
              </p>
            </div>
          </div>

          {/* Decorative Cross */}
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-16 relative">
              {/* Vertical bar */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-full bg-gradient-to-b from-gold via-gold-light to-gold rounded-full" />
              {/* Horizontal bar */}
              <div className="absolute top-4 left-0 w-full h-3 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full" />
              {/* Center heart */}
              <Heart className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 text-rose-soft fill-rose-soft" />
            </div>
            {/* Small floral accent */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-contain bg-no-repeat bg-center opacity-60" />
          </motion.div>

          {/* Padrinos */}
          <div className="text-center flex-1">
            <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
              Padrinos
            </p>
            <div className="space-y-1">
              <p className="font-serif text-xl text-foreground">
                Marisela Pérez Dávila
              </p>
              <p className="font-serif text-xl text-foreground">
                Felipe Cano Flores
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FamilySection;
