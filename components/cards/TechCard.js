import styled from "styled-components";

const TechCard = ({ tech }) => {
  return (
    <Card>
      <img src={`/images/icons/${tech}.svg`} alt={`${tech}`} />
      <p>{tech}</p>
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 3px;
  width: max-content;
  text-decoration: none;

  img {
    filter: ${({ theme }) => theme.filter.shadowMedium};
    width: 3.5rem;
    height: 5rem;
  }

  p {
    filter: ${({ theme }) => theme.filter.shadowSmall};
  }
`;

export default TechCard;
