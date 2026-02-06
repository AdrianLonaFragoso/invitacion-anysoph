import { Church, UtensilsCrossed } from "lucide-react";
import EventCard from "./EventCard";
import parroquiaLogo from "@/assets/parroquialogo.png";
import restauranteLogo from "@/assets/logo-la-casa-verde.jpg";

const EventsSection = () => {
  return (
    <section className="py-12 px-4 space-y-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <div className="divider-ornament max-w-xs mx-auto mb-4">
          <span className="font-script text-3xl text-gold">Eventos</span>
        </div>
      </div>

      {/* Ceremonia */}
      <EventCard
        icon={Church}
        title="Ceremonia"
        placeLogo={parroquiaLogo}
        venue="🕊️ Parroquia Virgen de la Anunciación"
        time="11:00 am"
        address="P.º de Belgrado 244, Tejeda, 76901 El Pueblito, Qro."
        mapLink="https://share.google/SDQ07gpuTjNx9zbUY"
        delay={0}
      />

      {/* Recepción */}
      <EventCard
        icon={UtensilsCrossed}
        title="Recepción"
        placeLogo={restauranteLogo}
        venue="🍽️ Restaurante La Casa Verde"
        time="1:00 pm"
        address="Brasil 35, Lomas de Querétaro, 76190 Santiago de Querétaro, Qro."
        mapLink="https://share.google/yv0Fw8WDC2rVb1qgI"
        delay={0.2}
      />
    </section>
  );
};

export default EventsSection;
