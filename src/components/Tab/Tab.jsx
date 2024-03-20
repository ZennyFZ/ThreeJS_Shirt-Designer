import { useSnapshot } from 'valtio'

import state from '../../store';
import styles from './Tab.module.scss'

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab 
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }

  return (
    <div
      key={tab.name}
      className={`${styles.tabBtn} ${isFilterTab ? styles.glassmorphism : ''}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img 
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? styles.img : styles.img2}`}
      />
    </div>
  )
}

export default Tab