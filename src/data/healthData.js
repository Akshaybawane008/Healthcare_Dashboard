import Bons from "../assets/Bons.png"
import Lungs from "../assets/Lungs.png"
import Teeth from "../assets/Teeth.png"

export const healthIndicators = [
  { label: 'Healthy Heart', colorClass: 'green', top: '20%', left: '30%' },
  { label: 'Lungs', colorClass: 'red', top: '40%', left: '25%' },
  { label: 'Teeth', colorClass: 'green', top: '15%', left: '45%' },
  { label: 'Bone', colorClass: 'green', top: '60%', left: '35%' }
]

export const healthCards = [
  {
    title: 'Lungs',
    status: 'Issue',
    date: 'Date: 24 May 2025',
    image: Lungs,
    color: "#D3212C"
  },
  {
    title: 'Teeth',
    status: 'OK',
    date: 'Date: 23 May 2025',
    image: Teeth,
    color: "#069C56"
  },
  {
    title: 'Bone',
    status: 'OK',
    date: 'Date: 21 May 2025',
    image: Bons,
    color: "#FF681E"
  }
]

