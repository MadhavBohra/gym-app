import React from 'react'
import { Stack, Typography} from '@mui/material';






const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  const iconSrc = require(`../assets/icons/gym-card/${item}.png`);
  return (
   <Stack type = "button" alignItems="center" justifyContent="center" className='bodyPart-card'
   sx={ {
    borderTop: bodyPart === item ? '4px solid #ff2625' : '',
    backgroundColor: '#fff',
    borderBottomLeftRadius: '20px',
    width: '270px',
    height: '280px',
    cursor: 'pointer',
    gap: '47px'
   } }
    onClick={() => {
        setBodyPart(item);
        window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
   >
    
    {/* <img src={`../assets/icons/gym-card/${String(item)}.png`} alt='dumbbell' style={{width: '40px', height: '40px'}} /> */}
    <img src={iconSrc} alt="dumbbell" style={{ width: '40px', height: '40px' }} />

    {console.log(item)}
    <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
   </Stack>
  )
}

export default BodyPart


// 1:16:05
// Video : https://www.youtube.com/watch?v=KBpoBc98BwM