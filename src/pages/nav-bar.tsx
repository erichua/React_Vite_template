import React, { useState } from 'react'

const NavBar = (storedSidebarExpanded: {
    storedSidebarExpanded: boolean | null
}) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded,
    )
    return (
        <nav id="navbar-main" className="navbar is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item mobile-aside-button">
                    <span className="icon">
                        <i className="mdi mdi-forwardburger mdi-24px"></i>
                    </span>
                </a>
                <div className="navbar-item">
                    <div className="control">
                        <input
                            placeholder="Search everywhere..."
                            className="input"
                        />
                    </div>
                </div>
            </div>
            <div className="navbar-brand is-right">
                <a
                    className="navbar-item --jb-navbar-menu-toggle"
                    data-target="navbar-menu"
                >
                    <span className="icon">
                        <i className="mdi mdi-dots-vertical mdi-24px"></i>
                    </span>
                </a>
            </div>
            <div className="navbar-menu" id="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item dropdown has-divider">
                        <a className="navbar-link">
                            <span className="icon">
                                <i className="mdi mdi-menu"></i>
                            </span>
                            <span>Sample Menu</span>
                            <span className="icon">
                                <i className="mdi mdi-chevron-down"></i>
                            </span>
                        </a>
                        <div className="navbar-dropdown">
                            <a href="profile.html" className="navbar-item">
                                <span className="icon">
                                    <i className="mdi mdi-account"></i>
                                </span>
                                <span>My Profile</span>
                            </a>
                            <a className="navbar-item">
                                <span className="icon">
                                    <i className="mdi mdi-settings"></i>
                                </span>
                                <span>Settings</span>
                            </a>
                            <a className="navbar-item">
                                <span className="icon">
                                    <i className="mdi mdi-email"></i>
                                </span>
                                <span>Messages</span>
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                <span className="icon">
                                    <i className="mdi mdi-logout"></i>
                                </span>
                                <span>Log Out</span>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-item dropdown has-divider has-user-avatar">
                        <a className="navbar-link">
                            <div className="user-avatar">
                                <img
                                    src="https://avatars.dicebear.com/v2/initials/john-doe.svg"
                                    alt="John Doe"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="is-user-name">
                                <span>John Doe</span>
                            </div>
                            <span className="icon">
                                <i className="mdi mdi-chevron-down"></i>
                            </span>
                        </a>
                        <div className="navbar-dropdown">
                            <a
                                href="profile.html"
                                className="navbar-item --set-active-profile-html"
                            >
                                <span className="icon">
                                    <i className="mdi mdi-account"></i>
                                </span>
                                <span>My Profile</span>
                            </a>
                            <a className="navbar-item">
                                <span className="icon">
                                    <i className="mdi mdi-settings"></i>
                                </span>
                                <span>Settings</span>
                            </a>
                            <a className="navbar-item">
                                <span className="icon">
                                    <i className="mdi mdi-email"></i>
                                </span>
                                <span>Messages</span>
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                <span className="icon">
                                    <i className="mdi mdi-logout"></i>
                                </span>
                                <span>Log Out</span>
                            </a>
                        </div>
                    </div>
                    <a
                        href="https://justboil.me/tailwind-admin-templates/free-dashboard/"
                        className="navbar-item has-divider desktop-icon-only"
                    >
                        <span className="icon">
                            <i className="mdi mdi-help-circle-outline"></i>
                        </span>
                        <span>About</span>
                    </a>
                    <a
                        href="https://github.com/justboil/admin-one-tailwind"
                        className="navbar-item has-divider desktop-icon-only"
                    >
                        <span className="icon">
                            <i className="mdi mdi-github-circle"></i>
                        </span>
                        <span>GitHub</span>
                    </a>
                    <a
                        title="Log out"
                        className="navbar-item desktop-icon-only"
                    >
                        <span className="icon">
                            <i className="mdi mdi-logout"></i>
                        </span>
                        <span>Log out</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar