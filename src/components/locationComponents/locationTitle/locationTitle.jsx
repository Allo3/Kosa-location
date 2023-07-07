import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const LocationModule = ({ title, location, tags, host, rating }) => {
    const ratingStars = generateRatingStars(rating);

    return (
        <Container>
            <TitleContainer>
                <Title>{title}</Title>
                <Location>{location}</Location>
                <TagList>
                    {tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </TagList>
            </TitleContainer>
            <HostContainer>
                <HostInfo>
                    <HostName>
                        <FirstName>{getFirstName(host.name)}</FirstName>
                        <LastName>{getLastName(host.name)}</LastName>
                    </HostName>
                    <HostImage src={host.picture} alt={host.name} />
                </HostInfo>
                <RatingContainer>
                    <Rating>
                        {ratingStars.map((star, index) => (
                            <StarIcon key={index}>{star}</StarIcon>
                        ))}
                    </Rating>
                </RatingContainer>
            </HostContainer>
        </Container>
    );
};

const generateRatingStars = (rating) => {
    const stars = [];
    const fullStarIcon = <FontAwesomeIcon icon={faStar} color="#FF6060" />;
    const emptyStarIcon = <FontAwesomeIcon icon={faStar} color="#E3E3E3" />;

    for (let i = 1; i <= 5; i++) {
        stars.push(i <= rating ? fullStarIcon : emptyStarIcon);
    }

    return stars;
};

const getFirstName = (name) => {
    const names = name.split(' ');
    return names[0];
};

const getLastName = (name) => {
    const names = name.split(' ');
    return names.slice(1).join(' ');
};

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0;
  text-align: left;
  color: #FF6060;
  margin-bottom: 0;
`;

const Location = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
  color: #FF6060;
  margin-top: 0;
`;

const TagList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Tag = styled.li`
  background-color: #FF6060;
  color: #F6F6F6;
  width: 115px;
  height: 25px;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 8px;
  border-radius: 10px;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0;
  text-align: center;
`;

const HostContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HostInfo = styled.div`
  display: flex;
  align-items: center;
`;

const HostImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 10px;
`;

const HostName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
`;

const FirstName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: #FF6060;
  font-family: Montserrat, sans-serif;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
`;

const LastName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: #FF6060;
  font-family: Montserrat, sans-serif;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
`;

const RatingContainer = styled.div`
  margin-left: auto;
`;

const Rating = styled.div`
  font-size: 14px;
  color: #FF6060;
  margin-top: 8px;
`;

const StarIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

export default LocationModule;
