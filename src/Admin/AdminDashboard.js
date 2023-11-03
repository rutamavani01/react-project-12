import React from 'react'
import '../style.css'
import { NavLink } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
      {/* <div className="header">
        <div className="navbar">
          <div className="logo">
            <NavLink><img src="https://i.ibb.co/kDVwgwp/logo.png" alt="RedStore" width="125px" /></NavLink>
          </div>
          <img src="https://i.ibb.co/6XbqwjD/menu.png" alt className="menu-icon" onclick="menutoggle()" />
        </div>
      </div> */}

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
          </li>{/* End Dashboard Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide" /><span>Components</span><i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <NavLink to={'/AdminUser'}>
                  <i className="bi bi-circle" /><span>user</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/AdminProduct'}>
                  <i className="bi bi-circle" /><span>product</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/AdminCatagory'}>
                  <i className="bi bi-circle" /><span>category</span>
                </NavLink>
              </li>
            </ul>
          </li>{/* End Components Nav */}

          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-layout-text-window-reverse" /><span>Tables</span><i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle" /><span>General Tables</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i className="bi bi-circle" /><span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-bar-chart" /><span>Charts</span><i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" /><span>Chart.js</span>
                </a>
              </li>
              <li>
                <a href="charts-apexcharts.html">
                  <i className="bi bi-circle" /><span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a href="charts-echarts.html">
                  <i className="bi bi-circle" /><span>ECharts</span>
                </a>
              </li>
            </ul>
          </li>{/* End Charts Nav */}

          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person" />
              <span>Profile</span>
            </a>
          </li>{/* End Profile Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle" />
              <span>F.A.Q</span>
            </a>
          </li>{/* End F.A.Q Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope" />
              <span>Contact</span>
            </a>
          </li>{/* End Contact Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <i className="bi bi-card-list" />
              <span>Register</span>
            </a>
          </li>{/* End Register Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <i className="bi bi-box-arrow-in-right" />
              <span>Login</span>
            </a>
          </li>{/* End Login Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <i className="bi bi-dash-circle" />
              <span>Error 404</span>
            </a>
          </li>{/* End Error 404 Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark" />
              <span>Blank</span>
            </a>
          </li>{/* End Blank Page Nav */}
        </ul>
      </aside>
    </>

  )
}

export default AdminDashboard
