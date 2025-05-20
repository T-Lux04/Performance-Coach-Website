import { motion } from "framer-motion";
import { useInView } from "../hooks/UseInView";

const fadeRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 2.0, ease: "easeOut" } },
};
export default function AnimateRight({ children }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeRight}
      style={{ marginBottom: "4rem" }}
    >
      {children}
    </motion.div>
  );
}
