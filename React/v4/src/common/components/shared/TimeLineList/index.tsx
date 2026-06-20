import type { TimelineListProps } from "@/common/interfaces/components/shared/TimelineList";
import type { FC } from "react";
import { motion } from "framer-motion";

export const TimelineList: FC<TimelineListProps> = ({ items, theme, renderCard }) => {
  return (
    <>
      {items.map((item: any, idx: number) => {
        const alignLeft = idx % 2 === 0;

        return (
          <motion.div
            key={item.id ?? item.educationId ?? item.workId ?? idx}
            className="mb-12 grid grid-cols-9 items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: idx * 0.08,
              ease: "easeOut",
            }}
          >
            <div className="col-span-4">
              {alignLeft && (
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.25 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {renderCard(item, idx)}
                </motion.div>
              )}
            </div>

            <div className="col-span-1 flex flex-col items-center">
              <motion.div
                className={`z-10 flex h-6 w-6 items-center justify-center rounded-full ${theme === "dark" ? "bg-red-600" : "bg-amber-300"
                  }`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.25 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: idx * 0.08 + 0.1,
                }}
                whileHover={{ scale: 1.15 }}
              >
                <span className="text-sm font-semibold">{idx + 1}</span>
              </motion.div>

              {idx < items.length - 1 && (
                <motion.div
                  className="w-px flex-1"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ amount: 0.25 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                  style={{ transformOrigin: "top" }}
                />
              )}
            </div>

            <div className="col-span-4">
              {!alignLeft && (
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.25 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {renderCard(item, idx)}
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </>
  );
};