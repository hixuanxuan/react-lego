### 数据交互
config: repeat, 节流 防抖 自动message.error

``` jsx
const useReuqest = (url, method ,payload, config) => {
    return [];
}

{
    [pageSizeKey]: '',
    [pageNoKey]: '',
    ...params
}

const useListData = ({
    pageSizeKey,
    pageNoKey,
    params
}) => {
    const [payload, setPayload] = useState({
        page
    });
    const [data] = useRequest(url, 'post', {
        [pageSizeKey]: 
    }, {
        header: {},
        norepeate: true,
        autoError: true
    });
    const loadMore = () => {

    }
    const loadPn = () => {

    }
    return [
        data,
        setParams,
        loadMore,
        loadPn,
    ];


}
const formatData = () => {

};
const ListTable = () => {
    const [data, loadPn] = useList({
        pn: 1,
        pageSize: 100
    });

    return (
        <Table data={formatData(data)} onPageChange={loadPn}>
    );

};




```

