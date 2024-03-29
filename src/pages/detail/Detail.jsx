import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();

  console.log(state, id);

  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img
          src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImg}
          alt="book-img"
        />
      </DetailImg>
      <Description>{state.volumeInfo.description}</Description>
      <InfoPart>
        <p>
          {state.volumeInfo.authors?.map((item) => (
            <span key={item}>{item},</span>
          ))}
        </p>

        <p>
          {state.volumeInfo.publishDate}{" "}
          {state.volumeInfo.publisher && (
            <span>/ {state.volumeInfo.publisher}</span>
          )}
        </p>
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;
