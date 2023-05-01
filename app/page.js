import { supabase } from "@/utils/supabase";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("./Form"), { ssr: false });

export const revalidate = 5;

export default async function Home() {
  const { data, error } = await supabase.from("socios").select();
  if (error) return <>Error!!</>;
  if (data)
    return (
      <>
        {data.map((e) => (
          <>
            <pre>
              {e.created_at}
              <br />
              {e.content}
              <br />
            </pre>
          </>
        ))}
        <Form />
      </>
    );
}
