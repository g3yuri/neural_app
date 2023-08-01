import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <a class="px-4 normal-case text-xl">Neural.pe</a>
    <div class="form-control flex-1">
      <input type="text" placeholder="Buscar" class="input input-bordered w-24 md:w-auto" />
    </div>
      </div>
  <div class="navbar-center ">
  </div>
  <div class="navbar-end">
    <button class="btn btn-primary mr-4">
      Log In
    </button>
    {/* <div class="dropdown dropdown-end">
      <label tabIndex={0} class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
  </div>
</div>
<main>
  <Slot></Slot>
</main>
</div>
  );
});
