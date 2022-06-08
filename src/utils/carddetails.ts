// import CellTowerIcon from '@mui/icons-material/CellTower';
// import CommuteIcon from '@mui/icons-material/Commute';
// import FitbitIcon from '@mui/icons-material/Fitbit';
// import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import { faBoxesPacking, faBullseye, faChartPie, faArrowsSpin } from '@fortawesome/free-solid-svg-icons'
import { cardDetails } from '../types';
export const cardDetailData: cardDetails[] = [
    {
        key: 1,
        title: "Data Analytics",
        icon: faBoxesPacking,
        info: "We provide marketing service to startups businesses to looking for a partner digital media.",
        transparent: faBoxesPacking, 
        iconClassName: "item-logo first",
        transClassName: "transparent-logo first",
    },
    {
        key: 2,
        title: "Digital Marketing",
        icon: faBullseye,
        info: "We provide marketing service to startups businesses to looking for a partner digital media.",
        transparent: faBullseye, 
        iconClassName: "item-logo second",
        transClassName: "transparent-logo second",
    },
    {
        key: 3,
        title: "Customer Care",
        icon: faChartPie,
        info: "We provide marketing service to startups businesses to looking for a partner digital media.",
        transparent: faChartPie,
        iconClassName: "item-logo third",
        transClassName: "transparent-logo third", 
    },
    {
        key: 4,
        title: "Email Marketing",
        icon: faArrowsSpin,
        info: "We provide marketing service to startups businesses to looking for a partner digital media.",
        transparent:  faArrowsSpin,
        iconClassName: "item-logo last",
        transClassName: "transparent-logo last",
    },
]