"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function AnimatedTheme() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className="relative w-full h-[400px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-600" />

      {/* Tree */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-1/4 w-24 h-64 bg-brown-800"
      >
        {/* Tree Trunk */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-700 to-brown-900" />
        
        {/* Tree Branches */}
        <div className="absolute top-0 left-0 w-full h-32 bg-green-800 rounded-t-full" />
        
        {/* Fire Effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-yellow-500 to-red-600 rounded-full blur-sm"
        />
      </motion.div>

      {/* Giraffe */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 right-1/4 w-32 h-64"
      >
        {/* Giraffe Body */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-40 bg-yellow-600 rounded-t-full" />
        
        {/* Giraffe Neck */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-32 bg-yellow-600" />
        
        {/* Giraffe Head */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-600 rounded-full" />
        
        {/* Giraffe Spots */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-brown-800 rounded-full" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-brown-800 rounded-full" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-4 bg-brown-800 rounded-full" />
        
        {/* Giraffe Eyes */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full" />
        
        {/* Giraffe Horns */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-brown-800 rounded-t-full" />
      </motion.div>

      {/* Impact Effect */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full blur-lg"
      />

      {/* Fire Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: -100 },
          }}
          transition={{
            duration: 2,
            delay: 1.5 + i * 0.1,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-b from-yellow-500 to-red-600 rounded-full"
        />
      ))}
    </div>
  )
} 