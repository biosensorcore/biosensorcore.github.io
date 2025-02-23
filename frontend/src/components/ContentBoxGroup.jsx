import styles from '../styles/ContentBox.module.css';
import ContentBox from './ContentBox';

function ContentBoxGroup({contentBoxes}) {
    return <div className={`${styles.content_box_group} ${contentBoxes.length < 3 ? styles.content_box_group_less_full : ""}`}>
        {contentBoxes.map((content) => (
            <ContentBox content={content}/>
        ))}
    </div>
}

export default ContentBoxGroup;