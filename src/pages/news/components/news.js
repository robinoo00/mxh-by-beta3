import Header from '../../../components/header/header'
import List from './list'

const News = () => {
    return (
        <div>
            <Header
                title={'资讯'}
                back={false}
            />
            <List/>
        </div>
    );
};

export default News

