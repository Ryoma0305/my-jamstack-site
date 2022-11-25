//型定義

export const getThemes = async () => {
  //   return await client.get<BlogResponse>({ endpoint: "blogs", queries });
  const cat = await fetchAPI("", {});
  return { contents: cat };
};

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(
    "https://jamstack-test.develop999.net/wp-json/wp/api/service_theme",
    {
      method: "GET",
      headers,
    }
  );

  const json = await res.json();
  // console.log(json);
  return json.map((item: any) => {
    return {
      term_id: item.term_id,
      name: item.name,
      slug: item.slug,
      term_order: item.term_order,
    };
  });
}
