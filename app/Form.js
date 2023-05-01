"use client";

import { supabase } from "@/utils/supabase";

export default async function Form() {
  return (
    <>
      <form
        onClick={async () => {
          try {
            const { data, error } = await supabase
              .from("socios")
              .insert([{ content: "content" }]);
            // const { data, error } = await supabase.from("socios").select();
            console.log(data, "here");
          } catch (error) {
            console.log(error);
          } finally {
            console.log("done");
          }
        }}>
        <input
          type="text"
          className="text-black"
        />
        <button
          className="text-white"
          type="button">
          Submit
        </button>
      </form>
    </>
  );
}
