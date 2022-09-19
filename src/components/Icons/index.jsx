import {ReactComponent as WindowsIcon} from '../../assets/windows-brands.svg'
import {ReactComponent as BrowserIcon} from '../../assets/globe-solid.svg'
import {ReactComponent as HeartIcon} from '../../assets/heart-solid.svg'

export default function Icons({ platform }) {
    const icons = {
        'PC (Windows)': <WindowsIcon />,
        'Web Browser': <BrowserIcon />,
        'PC (Windows), Web Browser': <><WindowsIcon /> <BrowserIcon /> </>,
        'Heart Icon': <HeartIcon className="icon"/>,
        'Browser Icon': <BrowserIcon className="icon"/>
    }
    return <>{icons[platform]}</>
}
