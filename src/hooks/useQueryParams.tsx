import { useSearchParams } from 'react-router-dom';
// new query
function useQueryParams() {
    const [searchParams] = useSearchParams();
    return Object.fromEntries([...searchParams]);
}
//fix code useQuery
export default useQueryParams;
