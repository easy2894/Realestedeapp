import React from "react";

const Header = ({ isLoggedIn, isAdmin, onLogout, onSwitchView }) => (
  <header className="bg-green-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => onSwitchView("home")}>Real Estate Marketplace</h1>
      <nav>
        <ul className="flex space-x-6">
          {isLoggedIn ? (
            <>
              <li className="cursor-pointer hover:underline" onClick={() => onSwitchView(isAdmin ? "adminDashboard" : "clientDashboard")}>Dashboard</li>
              {!isAdmin && <>
                <li className="cursor-pointer hover:underline" onClick={() => onSwitchView("myListings")}>My Listings</li>
                <li className="cursor-pointer hover:underline" onClick={() => onSwitchView("favorites")}>Favorites</li>
              </>}
              <li className="cursor-pointer hover:underline" onClick={onLogout}>Logout</li>
            </>
          ) : (
            <>
              <li className="cursor-pointer hover:underline" onClick={() => onSwitchView("login")}>Login</li>
              <li className="cursor-pointer hover:underline" onClick={() => onSwitchView("registration")}>Register</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
