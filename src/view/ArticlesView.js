import { Articles } from '../components/Articles';
import { ViewLayout } from '../components/Layout';

export default function ArticlesView(props) {
  return (
    <ViewLayout>
      <Articles {...props} />
    </ViewLayout>
  );
}
