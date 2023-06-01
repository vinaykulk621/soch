"use client";

import { supabase } from "@/supabase";
import Link from "next/link";

async function handle(e) {
  e.preventDefault();
  const content = e.target.content.value.trim();
  try {
    await supabase.from("socio").insert([{ content: content }]);
  } catch (error) {
    console.log(error);
  } finally {
    window.location.reload();
    console.log("done");
  }
}

export default async function Form() {
  return (
    <>
      <div className="sticky top-1 flex flex-col items-center justify-center bg-black">
        <span className="text-6xl">
          <Link href={"/"}>SOCH</Link>
        </span>
        <span>Leave a soch</span>
        <form
          onSubmit={handle}
          className="flex flex-col items-center justify-center">
          <div className="relative">
            <textarea
              type="text"
              className="h-28 min-h-max items-center text-ellipsis rounded-xl bg-zinc-400 p-4 text-start text-2xl text-black focus:outline-none"
              name="content"
              maxLength={50}
              required
            />
            <div className="absolute bottom-2 right-2 rounded bg-gray-500 px-2 py-0 hover:bg-slate-600">
              <button
                className="text-white"
                type="submit">
                Soch
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
