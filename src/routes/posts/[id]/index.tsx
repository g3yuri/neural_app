import { Resource, component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { API_URL } from '~/components/config';
import { Post, type PostProps } from '~/components/post/post';

export const usePost = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const res = await fetch(`${API_URL}/posts/${requestEvent.params.id}`);
  const product = await res.json()  as { data: PostProps };
  return product.data;
});

export default component$(() => {
  const post = usePost()
  return (
    <div class="max-w-4xl m-auto">
      <Resource
    value={post}
    onPending={() => <>loading...</>}
    onResolved={(post) => (
      <Post post={post} />
    )}
  />
    </div>
  )
});