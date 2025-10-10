import styles from '../styles/ContentBox.module.css';
import ContentBox from './ContentBox';

function ContentBoxGroup({contentBoxes, variant}) {
    const groupClass = variant === 'resources' ? styles.content_box_group_resources : styles.content_box_group;
    
    return <div className={groupClass}>
        {contentBoxes.map((content, index) => (
            <ContentBox key={index} content={content} variant={variant}/>
        ))}
    </div>
}

export default ContentBoxGroup;