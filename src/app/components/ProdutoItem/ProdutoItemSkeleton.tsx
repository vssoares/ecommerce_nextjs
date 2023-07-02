import { motion } from 'framer-motion';
export default function ProdutoItemSkeleton({ produto }: any) {
   return (
      <>
         <motion.div
            initial="hidden"
            animate={produto.skeleton ? 'visible' : 'hidden'}
            variants={{
               hidden: { opacity: 0 },
               visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut', }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex justify-center aspect-w-1 aspect-h-1 w-full transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:shadow-lg"
         >
            <div className="" role="status">
               <div className="flex flex-col roundedsm w-64 animate-pulse h-96">
                  <div className="h-48 rounded-t dark:bg-gray-300"></div>
                  <div className="flex-1 px-4 py-8 space-y-4 sm:p-8">
                     <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                     <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                     <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
                  </div>
               </div>
            </div>
         </motion.div>
      </>
   )
}
