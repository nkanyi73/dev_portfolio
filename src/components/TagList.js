import styled from "styled-components";
const TagList = ({ tags }) => {
  const TagDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const Tag = styled.span`
    display: inline-block;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    background-color: ${(props) => {
      switch (props.category) {
        case "red":
          return "#ff4136";
        case "blue":
          return "#0074d9";
        case "green":
          return "#2ecc40";
        default:
          return "#f1f1f1";
      }
    }};
    color: white;
  `;
  return (
    <TagDiv>
      {tags.map((tag) => (
        <Tag category={tag.color} key={tag.name}>
          {tag.name}
        </Tag>
      ))}
    </TagDiv>
  );
};

export default TagList;
