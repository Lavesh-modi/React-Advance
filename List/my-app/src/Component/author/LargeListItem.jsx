export const LargeListItem = ({ author }) => {
  const {name, age, books, country} = author;

  return (
    <ul>
      <li>
        {name} - {age}
      </li>
      <li>
        {books} - {country}{" "}
      </li>
    </ul>
  );
};
