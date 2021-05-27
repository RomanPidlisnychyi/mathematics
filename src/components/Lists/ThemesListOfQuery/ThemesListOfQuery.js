export default function ThemesListOfQuery({ themes, handleBtn }) {
  return (
    themes &&
    themes.length > 0 && (
      <ul>
        {themes.map((theme, index) => (
          <li key={theme._id}>
            <button value={index} onClick={handleBtn}>
              {theme.name}
            </button>
          </li>
        ))}
      </ul>
    )
  );
}
