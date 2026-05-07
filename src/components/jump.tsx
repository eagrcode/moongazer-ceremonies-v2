import { Jump } from "@/lib/s3StaticImages";
import { motion } from "framer-motion";
import Image from "next/image";

export default function JumpImage() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full md:min-w-96 rounded-sm grayscale max-w-screen-xl shadow-lg overflow-hidden"
    >
      <Image
        className="opacity-90 shadow-lg"
        src={Jump}
        alt={"Groom & best-men jumping"}
        width={1920}
        height={1080}
        style={{ objectFit: "contain" }}
      />
    </motion.div>
  );
}
