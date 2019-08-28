import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(idx) {
    this.setState({ selectedIndex: idx });
    
  }

  render() {
    return (
      <div>
        <h1 id="tab-head">Tabs</h1>
        <div id="tabs">
          <ul>
            {this.props.tabs.map((tab, idx) => {
              if (idx === this.state.selectedIndex) {
                return <li key={idx}>
                      <header><h1>{tab.title}</h1></header>
                        <article>{tab.content}</article>
                      </li>
              }
              else {
                return <li onClick={() => this.changeTab(idx)} key={idx}>
                  <header><h1>{tab.title}</h1></header>
                </li>
              }
            })}
          </ul>
        </div>
      </div>
    )
  }
}