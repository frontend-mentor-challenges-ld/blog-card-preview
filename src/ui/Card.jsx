import styled from "styled-components";
import { usePosts } from "../data/usePostData";

const StyledCard = styled.div``;

function Card() {
  const { isLoading, posts } = usePosts();

  if (isLoading) return "loading";

  return <StyledCard>{posts.title}</StyledCard>;
}

export default Card;
