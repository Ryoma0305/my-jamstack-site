//型定義

export const getTopSlides = async () => {
  //   return await client.get<BlogResponse>({ endpoint: "blogs", queries });
  const data = await fetchAPI("", {});
  // console.log(data);
  return { contents: data };
};

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(
    "https://jamstack-test.develop999.net/wp-json/wp/api/top",
    {
      method: "GET",
      headers,
    }
  );

  const json = await res.json();
  //   console.log(json);
  return json.map((item: any) => {
    return {
      comments: [
        {
          text: item.text1,
        },
        {
          text: item.text2,
        },
        {
          text: item.text3,
        },
        {
          text: item.text4,
        },
      ],
      reference: {
        text: "",
        url:
          item.post_type == "about"
            ? "/about/" + item.ID
            : "/stories/" + item.ID,
      },
      image: "",
    };
  });
}
