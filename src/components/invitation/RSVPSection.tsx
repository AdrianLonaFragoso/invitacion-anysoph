 import { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { X, Check, XCircle, Send } from 'lucide-react';
 
 const RSVPSection = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [guestName, setGuestName] = useState('');
   const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
 
   const phoneNumber = '525523441802';
   const eventName = 'Bautizo de Anya Sophia';
 
   const handleConfirm = () => {
     if (!guestName.trim() || !attendance) return;
 
     const attendanceText = attendance === 'yes' ? 'Sí asistiré' : 'No podré asistir';
     const message = encodeURIComponent(
       `¡Hola! Mi nombre es ${guestName}.\n\n${attendanceText} al ${eventName}.\n\n¡Gracias!`
     );
     
     window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
     setIsModalOpen(false);
     setGuestName('');
     setAttendance(null);
   };
 
   return (
     <>
       <section className="py-16 px-4">
         <motion.div
           className="text-center"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           {/* Decorative Line */}
           <div className="divider-ornament max-w-xs mx-auto mb-8">
             <span className="font-script text-3xl text-gold">RSVP</span>
           </div>
 
           <p className="font-serif text-lg text-muted-foreground mb-8 max-w-xs mx-auto">
             Por favor confirma tu asistencia
           </p>
 
           {/* RSVP Button */}
           <motion.button
             onClick={() => setIsModalOpen(true)}
             className="btn-gold py-4 px-10 rounded-full font-sans text-base tracking-wider inline-flex items-center gap-3"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <Send className="w-5 h-5" />
             Confirmar asistencia
           </motion.button>
         </motion.div>
       </section>
 
       {/* RSVP Modal */}
       <AnimatePresence>
         {isModalOpen && (
           <>
             {/* Backdrop */}
             <motion.div
               className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsModalOpen(false)}
             />
 
             {/* Modal */}
             <motion.div
               className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-sm mx-auto"
               initial={{ opacity: 0, scale: 0.9, y: "-45%" }}
               animate={{ opacity: 1, scale: 1, y: "-50%" }}
               exit={{ opacity: 0, scale: 0.9, y: "-45%" }}
               transition={{ type: "spring", duration: 0.5 }}
             >
               <div className="card-elegant rounded-3xl p-6 sm:p-8 relative">
                 {/* Close Button */}
                 <button
                   onClick={() => setIsModalOpen(false)}
                   className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                 >
                   <X className="w-4 h-4" />
                 </button>
 
                 {/* Modal Title */}
                 <h2 className="font-script text-4xl text-gold text-center mb-6">
                   Confirmación
                 </h2>
 
                 {/* Guest Name Input */}
                 <div className="mb-6">
                   <label className="font-sans text-sm text-muted-foreground block mb-2">
                     Tu nombre
                   </label>
                   <input
                     type="text"
                     value={guestName}
                     onChange={(e) => setGuestName(e.target.value)}
                     placeholder="Escribe tu nombre..."
                     className="w-full px-4 py-3 rounded-xl border border-border bg-card font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                   />
                 </div>
 
                 {/* Attendance Options */}
                 <div className="space-y-3 mb-8">
                   <p className="font-sans text-sm text-muted-foreground mb-3">
                     ¿Podrás asistir?
                   </p>
                   
                   <motion.button
                     onClick={() => setAttendance('yes')}
                     className={`w-full py-4 px-6 rounded-xl font-sans text-base flex items-center justify-center gap-3 transition-all border-2 ${
                       attendance === 'yes'
                         ? 'border-sage bg-sage/10 text-sage'
                         : 'border-border bg-card text-foreground hover:border-sage/50'
                     }`}
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                   >
                     <Check className="w-5 h-5" />
                     Sí asistiré
                   </motion.button>
 
                   <motion.button
                     onClick={() => setAttendance('no')}
                     className={`w-full py-4 px-6 rounded-xl font-sans text-base flex items-center justify-center gap-3 transition-all border-2 ${
                       attendance === 'no'
                         ? 'border-rose-deep bg-rose-deep/10 text-rose-deep'
                         : 'border-border bg-card text-foreground hover:border-rose-soft/50'
                     }`}
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                   >
                     <XCircle className="w-5 h-5" />
                     No podré asistir
                   </motion.button>
                 </div>
 
                 {/* Confirm Button */}
                 <motion.button
                   onClick={handleConfirm}
                   disabled={!guestName.trim() || !attendance}
                   className={`w-full py-4 rounded-full font-sans text-base tracking-wider flex items-center justify-center gap-3 transition-all ${
                     guestName.trim() && attendance
                       ? 'btn-gold'
                       : 'bg-muted text-muted-foreground cursor-not-allowed'
                   }`}
                   whileHover={guestName.trim() && attendance ? { scale: 1.02 } : {}}
                   whileTap={guestName.trim() && attendance ? { scale: 0.98 } : {}}
                 >
                   <Send className="w-5 h-5" />
                   Enviar por WhatsApp
                 </motion.button>
               </div>
             </motion.div>
           </>
         )}
       </AnimatePresence>
     </>
   );
 };
 
 export default RSVPSection;