import { useQuery } from "@tanstack/react-query";

import postData from "./post.json";

function getPosts() {
  return postData;
}

export function usePosts() {
  const {
    isLoading,
    data: posts,
    error
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts
  });

  return { isLoading, error, posts };
}
