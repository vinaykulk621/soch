"use client";

import { supabase } from "@/utils/supabase";

async function handle(e) {
  e.preventDefault();
  const content = e.target.content.value;
  if (e.target.content.value != "") {
    try {
      console.log(data, error, "here");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("done");
    }
  }
}
export default async function Form() {
  return (
    <>
      <form onSubmit={handle}>
        <input
          type="text"
          className="text-black"
          name="content"
        />
        <button
          className="text-white"
          type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
