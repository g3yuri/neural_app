import { component$, useSignal,
  Resource } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { PostInline, type PostProps } from "../components/post/post";
import { API_URL } from "~/components/config";


export const usePosts = routeLoader$(async () => {
  const res = await fetch(`${API_URL}/posts`);
  const product = await res.json()  as { data: PostProps[] };
  return product.data;
});

export default component$(() => {
  const count = useSignal(0);

  const posts = usePosts()

  return (
    <>
    <main class="w-full">
    <div class="w-full md:w-4/5 m-auto text-center">
    <h1 class="py-14 text-[12vw] text-center sm:text-[8vw] leading-none select-none tracking-tightest font-extrabold flex justify-center flex-wrap">
  <span data-content="Minería" class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-1">
    <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"> Minería</span>
  </span>
  <span data-content="Digital" class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-2">
    <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2"> Digital</span>
  </span>
  <span data-content="{neural.pe}" class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-3">
    <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">{'{neural.pe}'}</span>
  </span>
</h1>

      <p class="py-6 text-xl md:text-3xl text-slate-500">Un mundo digital para mejorar la productividad reduciendo los riesgos en la mineria.</p>
      <button class="btn btn-primary" onClick$={() => count.value++}>Incrementar {count.value} veces</button>
    </div>
    <div class="w-4/5 m-auto py-10">
      <Resource
        value={posts}
        onPending={() => <>loading...</>}
        onResolved={(posts) => (
          <ul>
            {posts.map((post, i) => (
              <li key={i}>
                <PostInline post={post} />
              </li>
            ))}
          </ul>
        )}
      />
    </div>
    </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Neural",
  meta: [
    {
      name: "Neural web",
      content: "Web para la digitalización de la minería",
    },
  ],
};
