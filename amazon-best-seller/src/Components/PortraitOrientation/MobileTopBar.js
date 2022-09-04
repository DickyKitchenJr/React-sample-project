import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './MobileTopBar.css';

function MobileTopBar() {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />;
  const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />;
  return (
    <div>MobileTopBar</div>
  )
}

export default MobileTopBar