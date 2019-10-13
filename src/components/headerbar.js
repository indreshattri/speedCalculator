import React, { Component} from 'react';
import { connect } from 'react-redux'
import './../css/headerbar.css'

const mapStateToProps = (state) => {
   return {
   	headerText: state.headerText
   }
};

class Headerbar extends Component {
   render() {
      const {headerText} = this.props;
      return (
         <div className="app-header">
            <div className="header-text">
               {headerText}
            </div>
         </div>
      );
   }
}

export default connect(mapStateToProps)(Headerbar);