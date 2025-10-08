import ContentBoxGroup from "../components/ContentBoxGroup";
import content from "../styles/Content.module.css";
import styles from "../styles/Home.module.css";

import RateJSON from "../util/rates.json";


function Rates() {
    const categories = RateJSON.rates.map(rate => {return {
        header: rate.type,
        text: rate.description,
        short: true,
        url: `#${rate.id}`
    }});

    return <>
        <div className={content.content_header}>Rates & Services</div>
        <div className={content.content_main}>
            <div className={content.content_default}>
                <h3>Hourly Rates</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Service Type</th>
                            <th>Hourly Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Personnel - Consultation</td>
                            <td>$150/hr</td>
                        </tr>
                        <tr>
                            <td>Personnel - Design & Analysis</td>
                            <td>$200/hr</td>
                        </tr>
                        <tr>
                            <td>Wet Lab</td>
                            <td>$100/hr</td>
                        </tr>
                        <tr>
                            <td>Imaging</td>
                            <td>$75/hr</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className={content.content_default}>
                <h3>Project Time Estimates</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>
                                Project Type
                            </th>
                            <th>
                                Personnel - Consultation (hrs)
                            </th>
                            <th>
                                Personnel - Design & Analysis (hrs)
                            </th>
                            <th>
                                Wet Lab (hrs)
                            </th>
                            <th>
                                Imaging (hrs)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {RateJSON.rates.map(rate => (
                            <tr id={rate.id}>
                                <td>
                                    {rate.type}
                                </td>
                                <td>
                                    {rate.personnel_consultation}
                                </td>
                                <td>
                                    {rate.personnel_design}
                                </td>
                                <td>
                                    {rate.wet_lab}
                                </td>
                                <td>
                                    {rate.imaging}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className={content.content_default}>
                <h3>Service Categories</h3>
            </div>
            <ContentBoxGroup contentBoxes={categories}/>
        </div>
    </>;
}

export default Rates;