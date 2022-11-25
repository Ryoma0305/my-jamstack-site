//型定義

//APIの呼び出し
export const getForbizPrograms = async () => {
  //   return await client.get<BlogResponse>({ endpoint: "blogs", queries });
  const data = await fetchAPI("", {});
  return { contents: data };
};

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(
    "http://practicearimuraryomacom.local/wp-json/wp/api/forbiz_programs",
    {
      method: "GET",
      headers,
      //   body: JSON.stringify({ query, variables }),
    }
  );

  const json = await res.json();
  return json.map((item: any) => {
    return {
      program_title: item.program_title,
      program_text: item.program_text,
    };
  });
}
