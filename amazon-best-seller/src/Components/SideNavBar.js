import React from 'react';
import './SideNavBar.css';

function SideNavBar() {
  return (
    <div className='side-bar-nav'>
        <ul className='first-category'>
            <li>&lt; Any Department</li>
            <ul className='second-category'>
                <li>&lt; Books</li>
                <ul className='third-category'>
                    <li>&lt; Mystery, Thriller & Suspense</li>
                    <ul className='fourth-category'>
                        <li className='selected-category'>Thriller & Suspense</li>
                        <li>Crime</li>
                        <li>Domestic</li>
                        <li>Financial</li>
                        <li>Historical</li>
                        <li>Legal</li>
                        <li>Medical</li>
                        <li>Military</li>
                        <li>Psychological Thrillers</li>
                        <li>Spies & Politics</li>
                        <li>Suspense</li>
                        <li>Technothrillers</li>
                    </ul>
                </ul>
            </ul>
        </ul>
    </div>
  )
}

export default SideNavBar