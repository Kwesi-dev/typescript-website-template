import CellTowerIcon from '@mui/icons-material/CellTower';
import CommuteIcon from '@mui/icons-material/Commute';
import FitbitIcon from '@mui/icons-material/Fitbit';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import { cardDetails } from '../declaration';
export const cardDetailData: cardDetails[] = [
    {
        key: 1,
        title: "Data Analytics",
        icon: CellTowerIcon,
        info: "We provide marketing service to startups businesses to looking for a partner digital media.",
        transparent: CellTowerIcon, 
        iconClassName: "item-logo first",
        transClassName: "transparent-logo first",
    },
    {
        key: 2,
        title: "Digital Marketing",
        icon: CommuteIcon,
        info: "We provide marketing service to startups businesses to looking for a partner digital media.",
        transparent: CommuteIcon, 
        iconClassName: "item-logo second",
        transClassName: "transparent-logo second",
    },
    {
        key: 3,
        title: "Customer Care",
        icon: FitbitIcon,
        info: "We provide marketing service to startups businesses to looking for a partner digital media.",
        transparent: FitbitIcon,
        iconClassName: "item-logo third",
        transClassName: "transparent-logo third", 
    },
    {
        key: 4,
        title: "Email Marketing",
        icon: FilterTiltShiftIcon,
        info: "We provide marketing service to startups businesses to looking for a partner digital media.",
        transparent:  FilterTiltShiftIcon,
        iconClassName: "item-logo fourth",
        transClassName: "transparent-logo fourth",
    },
]