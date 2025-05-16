// components/AnimatedSection.jsx
import { motion } from "framer-motion";
import { useInView } from "../hooks/UseInView";

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.0, ease: "easeOut" } },
};

export default function AnimatedSection({ children }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      style={{ marginBottom: "4rem" }}
    >
      {children}
    </motion.div>
  );
}
