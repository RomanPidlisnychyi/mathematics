// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getArticleById } from '../../../store/selectors/articleSelectors

// export default function SectionsList({ pathname }) {
//   const sections = useSelector(getSections);
//   return (
//     <ul>
//       {sections.map(({ _id, name }) => (
//         <li key={_id}>
//           <Link to={`${pathname}/${_id}`}>{name}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// }