import React from 'react'
import styles from './imageGrid.module.css'
import grid1 from '../../assets/tokyo.png'
import grid2 from '../../assets/2.png'
import grid3 from '../../assets/1.png'

const ImageGrid = () => {
  return (
    <div className={styles['container']}>
      <img src={grid1} alt="Tokyo" className={styles['leftImage']} />
      <img src={grid2} alt="Grid 2" className={styles['topRightImage']} />
      <img src={grid3} alt="Grid 3" className={styles['bottomRightImage']} />
    </div>
  )
}

export default ImageGrid
