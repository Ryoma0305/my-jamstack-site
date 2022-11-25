//型定義

//APIの呼び出し
export const getAuthors = async () => {
  //   return await client.get<BlogResponse>({ endpoint: "blogs", queries });
  const data = await fetchAPI("", {});
  return { contents: data };
};

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(
    "https://jamstack-test.develop999.net/wp-json/wp/api/authors",
    {
      method: "GET",
      headers,
      //   body: JSON.stringify({ query, variables }),
    }
  );

  const json = await res.json();
  //   console.log(json);
  return json.map((item: any) => {
    return {
      id: item.ID,
      createdAt: item.date,
      title: item.title,
      content: item.content,
      author_img: item.author_img,
      name_jp: item.name_jp,
      name_en: item.name_en,
      profile_text: item.profile_text,
      related_post1: [item.related_post1],
      related_post2: [item.related_post2],
    };
  });
}
