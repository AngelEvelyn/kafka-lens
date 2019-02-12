import React from 'react';
import Topic from '../components/Topic.jsx';
import PartitionList from '../components/PartitionList.jsx';

import '../css/TopicPage.css'

class TopicPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      showPartitions: false,
      topicInfo: {}
    };

    this.showPartitions = this.showPartitions.bind(this);
  }
  // Lifecycle methods
  componentDidMount() {
    //code here
  }
  // Methods
  showPartitions(event) {
    const topicInfo = this.props.topicList
    const i = parseInt(event.target.id)

    let newState = this.state
    newState.showPartitions = true;
    newState.topicInfo = topicInfo[i];

    return this.setState(newState)

  }
  render() {
    const Topics = this.props.topicList.map((element, i) => {
      return <Topic key={i} id={i} topicInfo={element} showPartitions={this.showPartitions} />;
    });

    return (
      <div>
        <h1>Active Topics</h1>
        <div>{Topics}</div>
        <div className="partition-list">
          {this.state.showPartitions === true ? (<PartitionList topicInfo={this.state.topicInfo} />) : ''}
        </div>
      </div>
    );
  }
}

export default TopicPage;
