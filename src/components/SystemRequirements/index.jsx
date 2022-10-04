import { nanoid } from 'nanoid'
import './styles.scss'
export default function SystemRequirements({ minimum_system_requirements }) {
    return (
        <>
            <h2 className="text-blue">System Requirements {`${!minimum_system_requirements ? '(Browser)' : ''}`}</h2>
            <ul className="system-requirements">
                {minimum_system_requirements &&
                    Object.entries(minimum_system_requirements).map(([key, value]) => {
                        return <li key={nanoid()}><h3>{key.length > 2 ? key.slice(0, 1).toUpperCase() + key.slice(1) : key.toUpperCase()}:</h3> {value ?? 'Unknown'}</li>
                    })
                }
            </ul>
        </>
    )
}
