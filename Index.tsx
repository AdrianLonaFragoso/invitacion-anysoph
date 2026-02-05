 import HeroSection from '@/components/invitation/HeroSection';
 import FamilySection from '@/components/invitation/FamilySection';
 import EventsSection from '@/components/invitation/EventsSection';
 import RSVPSection from '@/components/invitation/RSVPSection';
 import FooterSection from '@/components/invitation/FooterSection';
 
 const Index = () => {
   return (
     <main className="min-h-screen font-sans overflow-x-hidden">
       {/* Hero with baby photo and title */}
       <HeroSection />
       
       {/* Parents and Godparents */}
       <FamilySection />
       
       {/* Ceremony and Reception cards */}
       <EventsSection />
       
       {/* RSVP Section with modal */}
       <RSVPSection />
       
       {/* Footer with closing message */}
       <FooterSection />
     </main>
   );
 };
 
 export default Index;