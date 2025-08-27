// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// type Direction = "up" | "down" | "left" | "right";

// interface MotionWrapperProps {
//   children: ReactNode;
//   direction?: Direction;
//   duration?: number;
//   delay?: number;
//   className?: string;
// }

// const MotionWrapper = ({
//   children,
//   direction = "up",
//   duration = 0.9,
//   delay = 0,
//   className = "",
// }: MotionWrapperProps) => {
//   // Setup offset depending on direction
//   const getOffset = () => {
//     switch (direction) {
//       case "up":
//         return { y: 40, x: 0 };
//       case "down":
//         return { y: -40, x: 0 };
//       case "left":
//         return { x: 40, y: 0 };
//       case "right":
//         return { x: -40, y: 0 };
//       default:
//         return { y: 40, x: 0 };
//     }
//   };

//   const offset = getOffset();

//   const variants = {
//     hidden: { opacity: 0, ...offset },
//     show: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration, delay, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       className={className}
//       variants={variants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.1 }} 
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default MotionWrapper;
