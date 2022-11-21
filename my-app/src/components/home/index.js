import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {getPostsRequest} from '../../actions/home';
import Card from './card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../index.css";

export function Home (props) {
    const {getPostsRequest, threads} = props;
    const [isGridView, setIsGridView] = useState(false);
    const toggleView = () => setIsGridView(value => !value);

    useEffect(() => {
      getPostsRequest();
    }, []);
    
    return (
      <div className="container">
        <Typography variant="h3">Threads</Typography>
        <Button onClick={toggleView} variant="outlined">
          {isGridView ? 'Switch to List' : 'Switch to Grid'}
        </Button>
        <div className={isGridView ? 'row' : 'column'}>
          {
            threads && threads.map((item, i) => {
              const posts = item.get('posts');
              const firstPost = posts.get(0);
              return <Card title={firstPost.get('semantic_url')} 
                description={firstPost.get('com')} numPosts={posts.size} key={i}
                isGridView={isGridView}/>
            })
          }
        </div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    threads: state.home.get('threads')
  }
};

const mapDispatchToProps = dispatch => ({
  getPostsRequest: () => dispatch(getPostsRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
