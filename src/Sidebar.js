import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCog,
  faFolder,
  faTable,
  faTachometerAlt,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="#!"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <a className="nav-link" href="#!">
          <FontAwesomeIcon icon={faTachometerAlt} fixedWidth />
          &nbsp;
          <span>Dashboard</span>
        </a>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>
      <li className="nav-item">
        <a
          className="nav-link "
          href="#!"
        >
          <FontAwesomeIcon icon={faCog} fixedWidth />
          &nbsp;
          <span>Components</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link "
          href="#!"
        >
          <FontAwesomeIcon icon={faWrench} fixedWidth />
          &nbsp;
          <span>Utilities</span>
        </a>
      </li>

      <hr className="sidebar-divider" />
      <li className="nav-item">
        <a
          className="nav-link "
          href="#!"
        >
          <FontAwesomeIcon icon={faFolder} fixedWidth />
          &nbsp;
          <span>Pages</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#!">
          <FontAwesomeIcon icon={faChartBar} fixedWidth />
          &nbsp;
          <span>Charts</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#!">
          <FontAwesomeIcon icon={faTable} fixedWidth />
          &nbsp;
          <span>Tables</span>
        </a>
      </li>
    </ul>
  );
}
