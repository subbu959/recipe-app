import Popular from "../components/Popular.jsx";
import Veggie from "../components/Veggie.jsx";
import {motion} from 'framer-motion';

function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    transition={{duration: 1}}
    >
        <Popular />
        <Veggie />
    </motion.div>
  )
}

export default Home