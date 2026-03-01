import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import myAlways from "../assets/always.jpg";


const fadeLeft  = { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0, transition: { duration: 0.85 } } }
const fadeRight = { hidden: { opacity: 0, x:  36 }, visible: { opacity: 1, x: 0, transition: { duration: 0.85, delay: 0.1 } } }

export default function Story() {
  return (
    <section className="section-padding bg-[#FBF8F4]">
      <div className="container">

        <SectionHeader label="How it began" heading="Our Story" />

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image frame */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="aspect-[4/5] bg-[#EDE3D6] flex items-center justify-center relative overflow-hidden"
              style={{ boxShadow: '0 20px 50px rgba(122,15,27,0.12)' }}
            >
              <div className="absolute inset-4 border border-[#9E1B25]/15 pointer-events-none" style={{ boxShadow: '0 20px 50px rgba(122,15,27,0.12)' }} />
              <img
                src={myAlways}
                alt="Our story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Shadow offset frame */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full -z-10"
              style={{ border: '1px solid rgba(158,27,37,0.12)' }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h3
                className="heading-display"
                style={{ fontSize: '1.65rem' }}
              >
                How it all started
              </h3>
              <p className="prose-body">
                Our story started the most random way ever. I wasn't even trying to make a move on you, and you only thought of me as a friend. You even had someone else at the time... Anywayyss replying to your note was the best decision ever. 
                
                I can't believe 
                we started all because of cerelac. 
              </p>
            </div>

            <div
              className="w-10 h-px"
              style={{ background: 'rgba(158,27,37,0.25)' }}
            />

            <div className="space-y-3">
              <h3
                className="heading-display"
                style={{ fontSize: '1.65rem' }}
              >
                The day it all started
              </h3>
              <p className="prose-body">
                From the start, you had me. From the first time we spent the entire day together,
                swimming in the morning, and then jabi after, and then pier 88 for dinner, every 
                conversation we had just kept flowing. 
                And not just that, every conversation hit very close to my heart.
                We talked about everything, we laughed about small things, we even opened up and put our borders down to talk about deep stuff.
                You made me feel safe and that I could tell you anything.
                That's when I knew I didn't ever want to let go of you.

              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'First Padadat', value: 'Oct 15, 2025' },
                { label: 'Where',          value: 'Liloan, Cebu' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="text-center p-5"
                  style={{
                    background: '#F5EFE6',
                    border: '1px solid var(--col-border)',
                  }}
                >
                  <p className="section-label mb-2">{label}</p>
                  <p
                    className="heading-display"
                    style={{ fontSize: '1.1rem' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}