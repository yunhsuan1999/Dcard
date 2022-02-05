import styled from 'styled-components';
import List from './List';
import { Component } from 'react';
import axios from 'axios';

const StyledApp = styled.div`
  background-color: rgb(0, 50, 78);
  min-height: 100vh;
  padding: 50px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      lastId: null
    };
  }

  getPosts = (postId = '') => {
    const { data } = this.state;

    axios
      .get(`/posts?popular=true${!!postId ? '&before=' + postId : ''}`)
      .then(({ data: apiData }) => {
        this.setState({
          data: data.concat(apiData),
          lastId: apiData[apiData.length - 1].id
        });
      })
      .catch(() => {
        console.log('fail');
      });
  };

  onScrollHandle = () => {
    const { lastId } = this.state;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const isBottom = clientHeight + scrollTop === scrollHeight;

    if(isBottom && lastId) {
      this.getPosts(lastId)
    }
  };

  async componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandle);

    await this.getPosts();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandle);
  }

  render() {
    const { data } = this.state;

    return (
      <StyledApp>
        <List data={data}></List>
      </StyledApp>
    );
  }
}

export default App;
