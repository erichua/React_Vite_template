import React, { useState } from 'react'

const SiderBar = (storedSidebarExpanded: {
    storedSidebarExpanded: boolean | null
}) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded,
    )
    return (
        <aside className="aside is-placed-left {storedSidebarExpanded？is-expanded：''}">
            <div className="aside-tools">
                <div>Eric Testing</div>
            </div>
            <div className="menu is-menu-main">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                    <li className="--set-active-index-html">
                        <a href="index.html">
                            <span className="icon">
                                <i className="mdi mdi-desktop-mac"></i>
                            </span>
                            <span className="menu-item-label">Dashboard</span>
                        </a>
                    </li>
                </ul>
                <p className="menu-label">Examples</p>
                <ul className="menu-list">
                    <li className="--set-active-tables-html">
                        <a href="tables.html">
                            <span className="icon">
                                <i className="mdi mdi-table"></i>
                            </span>
                            <span className="menu-item-label">Tables</span>
                        </a>
                    </li>
                    <li className="--set-active-forms-html active">
                        <a href="forms.html">
                            <span className="icon">
                                <i className="mdi mdi-square-edit-outline"></i>
                            </span>
                            <span className="menu-item-label">Forms</span>
                        </a>
                    </li>
                    <li className="--set-active-profile-html">
                        <a href="profile.html">
                            <span className="icon">
                                <i className="mdi mdi-account-circle"></i>
                            </span>
                            <span className="menu-item-label">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="login.html">
                            <span className="icon">
                                <i className="mdi mdi-lock"></i>
                            </span>
                            <span className="menu-item-label">Login</span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown">
                            <span className="icon">
                                <i className="mdi mdi-view-list"></i>
                            </span>
                            <span className="menu-item-label">Submenus</span>
                            <span className="icon">
                                <i className="mdi mdi-plus"></i>
                            </span>
                        </a>
                        <ul>
                            <li>
                                <a href="#void">
                                    <span>Sub-item One</span>
                                </a>
                            </li>
                            <li>
                                <a href="#void">
                                    <span>Sub-item Two</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="menu-label">About</p>
                <ul className="menu-list">
                    <li>
                        <a
                            href="https://justboil.me/tailwind-admin-templates/free-dashboard/"
                            className="has-icon"
                        >
                            <span className="icon">
                                <i className="mdi mdi-help-circle"></i>
                            </span>
                            <span className="menu-item-label">About</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/justboil/admin-one-tailwind"
                            className="has-icon"
                        >
                            <span className="icon">
                                <i className="mdi mdi-github-circle"></i>
                            </span>
                            <span className="menu-item-label">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SiderBar
