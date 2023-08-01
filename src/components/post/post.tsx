import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export type PostProps = {
  id: number;
  attributes: {
    titulo: string;
    intro?: string;
    post?: string;
    imagen?: string;
  }
}

export const PostInline = component$<{post: PostProps}>(({post}) => {
  return (
    <a href={"/posts/"+post.id} class="" rel="noopener noreferrer"  title={post.attributes.titulo} >
      <h1 class="text-2xl font-bold py-4"  >{post.attributes.titulo}</h1>
      <div class="w-full flex">
        <div class={post.attributes.imagen?"w-3/5":"w-full"}>{post.attributes.intro}</div>
        {post.attributes.imagen && <div class="w-2/5">
          <img src={post.attributes.imagen} class="rounded-lg" alt={post.attributes.titulo} width={100} height={100} loading="lazy" decoding="async" style={{objectFit: "cover"}} />
        </div>}
      </div>
    </a>
  );
})

export const Post = component$<{post: PostProps}>(({post}) => {
  return (
    <Link href={"/posts/"+post.id} class="" rel="noopener noreferrer"  title={post.attributes.titulo} >
      <h1 class="text-4xl font-bold py-4"  >{post.attributes.titulo}</h1>
      <div class="w-full">
        {post.attributes.imagen && <div class="w-full">
          <img src={post.attributes.imagen} class="rounded-lg" alt={post.attributes.titulo} width={100} height={100} loading="lazy" decoding="async" style={{objectFit: "cover"}} />
        </div>}
        <div class="w-full text-lg">{post.attributes.intro}</div>
        <div class="w-full text-lg">{post.attributes.post}</div>
      </div>
    </Link>
  );
})
