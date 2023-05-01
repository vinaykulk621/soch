import { supabase } from "@/supabase";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("./Form"), { ssr: false });

export const revalidate = 0;

export default async function Home() {
  const { data, error } = await supabase.from("socios").select();
  if (error) return <>Error!!</>;
  if (data)
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <Form />
          <div className="m-5 flex flex-row flex-wrap space-x-10">
            {data.map((e) => (
              <>
                <pre
                  className="mb-5"
                  key={e.id}>
                  {e.created_at.split("T")[0]}{" "}
                  {e.created_at.split("T")[1].split(".")[0]}
                  <br />
                  {"> "}
                  {e.content}
                </pre>
              </>
            ))}
          </div>
        </div>
      </>
    );
}
