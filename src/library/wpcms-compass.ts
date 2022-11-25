//型定義

//APIの呼び出し
export const getCompass = async () => {
  //   return await client.get<BlogResponse>({ endpoint: "blogs", queries });
  const data = await fetchAPI("", {});
  return { contents: data };
};

export const getCompassDetail = async (contentId: string) => {
  const data = await fetchAPI("", {});
  return data.filter((item: any) => {
    return item.id == contentId;
  })[0];
};

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(
    "https://jamstack-test.develop999.net/wp-json/wp/api/about",
    {
      method: "GET",
      headers,
      //   body: JSON.stringify({ query, variables }),
    }
  );

  const json = await res.json();
  return json.map((item: any) => {
    return {
      id: item.ID,
      createdAt: item.date,
      title: item.title,
      content: item.content,
      main_copy: item.main_copy,
      update_date: item.update_date,
      speaker: item.speaker,
      dialog: item.dialog,
      description: item.description,
    };
  });
}
