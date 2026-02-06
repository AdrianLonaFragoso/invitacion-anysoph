import { motion } from "framer-motion";
import { MapPin, Clock, LucideIcon } from "lucide-react";

interface EventCardProps {
  icon: LucideIcon;
  placeLogo: string;
  title: string;
  venue: string;
  time: string;
  address: string;
  mapLink: string;
  delay?: number;
}

const EventCard = ({
  icon: Icon,
  placeLogo,
  title,
  venue,
  time,
  address,
  mapLink,
  delay = 0,
}: EventCardProps) => {
  return (
    <motion.div
      className="card-elegant rounded-2xl p-6 sm:p-8 max-w-sm mx-auto w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <div>
        <img
          src={placeLogo}
          alt="Lugar"
          className="w-40 h-40 mx-auto rounded-full mb-8"
        />
      </div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <Icon className="w-5 h-5 text-gold" />
        </div>
        <h3 className="font-serif text-2xl text-foreground">{title}</h3>
      </div>

      {/* Venue */}
      <p className="font-serif text-lg text-primary mb-4">{venue}</p>

      {/* Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Clock className="w-4 h-4 text-gold shrink-0" />
          <span className="font-sans text-sm">{time}</span>
        </div>
        <div className="flex items-start gap-3 text-muted-foreground">
          <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <span className="font-sans text-sm leading-relaxed">{address}</span>
        </div>
      </div>

      {/* Map Button */}
      <motion.a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-gold block text-center py-3 px-6 rounded-full font-sans text-sm tracking-wide"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Ver mapa
      </motion.a>
    </motion.div>
  );
};

export default EventCard;
