import Image from "next/image";

export default function Homepage() {
  return (
    <main className="Homepage">
      <div>
        <h>Login</h>
      </div> 
      <input type="text" placeholder="Username" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" />
      <button class="btn btn-wide">Login</button>
    </main>
  );
}
