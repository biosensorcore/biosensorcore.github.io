import styles from '../styles/ContentBox.module.css';
import ContentBox from './ContentBox';

function ContentBoxGroup({contentBoxes}) {
    return <div className={styles.content_box_group}>
        {contentBoxes.map((content) => (
            <ContentBox content={content}/>
        ))}
    </div>
}

export default ContentBoxGroup;