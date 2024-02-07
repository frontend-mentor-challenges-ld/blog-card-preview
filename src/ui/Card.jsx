import styled from "styled-components";
import { usePosts } from "../data/usePostData";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import User from "./User";

const StyledCard = styled.div``;

function Card() {
  const { isLoading, posts } = usePosts();

  if (isLoading) return "loading";

  return (
    <StyledCard>
      <CardHeader />
      <CardBody />
      <User />
    </StyledCard>
  );
}

export default Card;
