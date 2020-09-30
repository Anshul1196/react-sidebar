
import React,{Component} from 'react';
import './header.css';

class Header  extends Component {
    constructor(props) {
      super(props);
      // Any number of links can be added here
      this.state = {
        links: [{
          text: 'Dashboard',
          link: 'https://github.com/Lakston',
          icon: 'fa-dashboard'
        }, {
          text: 'Project',
          link: 'https://github.com/Lakston',
          icon: 'fa-list-ol'
        }, {
          text: 'Clients',
          link: 'https://twitter.com/Fab_is_coding',
          icon: 'fa-user'
        }, {
            text: 'Logout',
            link: 'https://twitter.com/Fab_is_coding',
            icon: 'fa-power-off'
          }]
      }
    }
    render() {
      let links = this.state.links.map((link, i) => <li ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}></i><a href={link.link} >{link.text}</a></li>);
  
      return (
          <div className={this.props.menuStatus} id='menu'>
            <ul>
              { links }
            </ul>
          </div>
      )
    }
  }
  export default Header