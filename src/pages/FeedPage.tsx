import { useEffect, useState } from 'react';
import { backendClient } from '../clients/backendClient';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../App';

type PostType = {
  title: string;
  body: string;
};

function FeedPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const [posts, setPosts] = useState(new Array<PostType>());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('social-app-token');
    if (!token)
      return navigate(import.meta.env.PROD ? `${baseURL}/signin` : `../signin`);

    backendClient.defaults.headers.common['Authorization'] = token;
    try {
      const res = await backendClient.post('/posts', { title, body });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('social-app-token');
        if (!token)
          return navigate(
            import.meta.env.PROD ? `${baseURL}/signin` : `../signin`
          );
        backendClient.defaults.headers.common['Authorization'] = token;

        const res = await backendClient.get('/posts');

        setPosts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main className="flex flex-col gap-5">
      <h1>Feed Page</h1>
      {posts.map(post => (
        <section>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </section>
      ))}
      <form onSubmit={handleSubmit}>
        <h2>What's in your mind?</h2>
        <label htmlFor="title" />
        <input
          type="text"
          title={title}
          placeholder="title"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="body" />
        <input
          type="text"
          name="body"
          placeholder="body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />

        <input type="submit" value="Post" />
      </form>
    </main>
  );
}

export default FeedPage;
