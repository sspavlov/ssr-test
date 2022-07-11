const Home = (props) => {
  console.log(props);
  return (
    <div className="home">
      <h1>What Can I Deploy to Static Apps?</h1>
      <div className="card-grid">{JSON.stringify(props)}</div>
    </div>
  );
};

export default Home;

export const getStaticProps = async (context) => {
  const subreddit = 'typescript';
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const result = await response.json();

  return {
    props: {
      subreddit,
      posts: result.data.children,
    },
  };
};
