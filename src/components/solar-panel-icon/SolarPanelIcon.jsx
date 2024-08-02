import React, { useEffect, useState } from 'react'
import './SolarPanelIcon.css'

const SolarPanelIcon = ( { panel, onClick } ) => {

    const unselectedIcon = <>
        <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="31" height="56" rx="5" fill="#D9D9D9"/>
            <rect x="2" y="2" width="27" height="52" rx="3" fill="#F3F7F5"/>
            <rect x="29" width="31" height="56" rx="5" fill="#D9D9D9"/>
            <rect x="31" y="2" width="27" height="52" rx="3" fill="#F3F7F5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4H23L27 9V22L23 27H8L4 22V9L8 4Z" fill="#EAEAEA"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 29H23L27 34V47L23 52H8L4 47V34L8 29Z" fill="#EAEAEA"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37 4H52L56 9V22L52 27H37L33 22V9L37 4Z" fill="#EAEAEA"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37 29H52L56 34V47L52 52H37L33 47V34L37 29Z" fill="#EAEAEA"/>
        </svg>
    </>

    const selectedIcon = <>
        <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="31" height="56" rx="5" fill="#293F35"/>
            <rect x="2" y="2" width="27" height="52" rx="3" fill="#F3F7F5"/>
            <rect x="29" width="31" height="56" rx="5" fill="#293F35"/>
            <rect x="31" y="2" width="27" height="52" rx="3" fill="#F3F7F5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4H23L27 9V22L23 27H8L4 22V9L8 4Z" fill="#293F35"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 29H23L27 34V47L23 52H8L4 47V34L8 29Z" fill="#293F35"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37 4H52L56 9V22L52 27H37L33 22V9L37 4Z" fill="#293F35"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37 29H52L56 34V47L52 52H37L33 47V34L37 29Z" fill="#293F35"/>
        </svg>
    </>

    const faultyIcon = <>
        <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="31" height="56" rx="5" fill="#E0A7A5"/>
            <rect x="2" y="2" width="27" height="52" rx="3" fill="#F3F7F5"/>
            <rect x="29" width="31" height="56" rx="5" fill="#E0A7A5"/>
            <rect x="31" y="2" width="27" height="52" rx="3" fill="#F3F7F5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4H23L27 9V22L23 27H8L4 22V9L8 4Z" fill="#E0A7A5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 29H23L27 34V47L23 52H8L4 47V34L8 29Z" fill="#E0A7A5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37 4H52L56 9V22L52 27H37L33 22V9L37 4Z" fill="#E0A7A5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37 29H52L56 34V47L52 52H37L33 47V34L37 29Z" fill="#E0A7A5"/>
        </svg>
    </>
    
    const [icon, setIcon] = useState(unselectedIcon)

    useEffect(() => {
        if (panel.status === "selected") {
            setIcon(selectedIcon);
        } else if(panel.isFaulty) {
            setIcon(faultyIcon);
        } else {
            setIcon(unselectedIcon);
        }
    }, [panel.status])

  return  <div className={(panel.status == 'selected')? 'selected' : 'unselected'} onClick={()=> onClick(panel.id)}> { icon } </div>
}

export default SolarPanelIcon