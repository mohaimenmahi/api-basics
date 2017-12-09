import React, { Component } from 'react';
import axios from 'axios';

// https://www.reddit.com/r/space.json
class Apicalls extends Component {
  componentWillMount() {
    this.getReddit();
  };
  // next time SuperAgent will be tried
  getReddit() {
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then((res) => {
      const posts = res.data.data.children.map((obj) => obj.data);
      this.setState({posts: posts});
    });
  };

  constructor(props){
    super(props);

    this.getReddit = this.getReddit.bind(this);

    this.state = {
      posts: [],
      subr: 'space'
    };
  }

  render(){
    return(
      <div>
        <h2>{`/r/${this.state.subr}`}</h2>
        <ul>
          {this.state.posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default Apicalls;
