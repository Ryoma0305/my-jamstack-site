//型定義

//APIの呼び出し
export const getStoryPosts = async () => {
  //   return await client.get<BlogResponse>({ endpoint: "blogs", queries });
  const data = await fetchAPI("", {});
  return { contents: data };
};

export const getStoryPostDetail = async (contentId: string) => {
  const data = await fetchAPI("", {});
  return data.filter((item: any) => {
    return item.id == contentId;
  })[0];
};

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(
    "http://practicearimuraryomacom.local/wp-json/wp/api/stories-detail2/(?P<id>[d]+)",
    {
      method: "GET",
      headers,
      //   body: JSON.stringify({ query, variables }),
    }
  );

  console.log(res);

  const json = await res.json();
  //   console.log(json);
  return json.map((item: any) => {
    return {
      id: item.ID,
      createdAt: item.date,
      updatedAt: item.modified,
      publishedAt: item.modified,
      revisedAt: item.modified,
      title: item.title,
      content: item.content,
      category: item.category,
      category_slug: item.category_slug,
      main_img: item.main_img,
      thumbnail_img: item.thumbnail_img,
    };
  });
}
