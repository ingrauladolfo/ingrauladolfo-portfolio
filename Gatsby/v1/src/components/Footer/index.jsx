import { Link, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { footerData } from '../../data/footerData'

const useStyles = makeStyles((theme) => ({
  developBy: {
    marginBottom: '40px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#cc1616',
  },
}))

export const Footer = () => {
  const styles = useStyles()
  return (
    <footer>
      <div className={styles.developBy}>
        {footerData.map((item) => (
          <>
            <Typography variant="p">{item.copyright}&nbsp;</Typography>
            <Typography variant="p">{item.text}</Typography>
            <Link underline="none" href={item.esdmxFb} target="_blank">
              <img src={item.imgUrl} width="60" alt={item.imgAlt} />
            </Link>
          </>
        ))}
      </div>
    </footer>
  )
}
