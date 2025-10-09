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
                            <td>$100/hr</td>
                        </tr>
                        <tr>
                            <td>Personnel - Design & Analysis</td>
                            <td>$100/hr</td>
                        </tr>
                        <tr>
                            <td>Wet Lab</td>
                            <td>$100/hr</td>
                        </tr>
                        <tr>
                            <td>Imaging (assisted/full-service)</td>
                            <td>$150/hr</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className={content.content_default}>
                <h3>Project Cost Estimates</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Project Type</th>
                            <th>Total Cost Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="consultation">
                            <td>Consultation</td>
                            <td>$100 - $400</td>
                        </tr>
                        <tr id="prototype_design">
                            <td>Prototype Biosensor Design</td>
                            <td>$200 - $500</td>
                        </tr>
                        <tr id="prototype_construction">
                            <td>Prototype Biosensor Construction</td>
                            <td>$400 - $800</td>
                        </tr>
                        <tr id="vitro">
                            <td>Biosensor Characterization (in vitro)</td>
                            <td>$1,200 - $2,600</td>
                        </tr>
                        <tr id="cellulo">
                            <td>Biosensor Characterization (in cellulo)</td>
                            <td>$1,600 - $3,100</td>
                        </tr>
                        <tr id="optimization">
                            <td>Full-Scale Biosensor Optimization</td>
                            <td>$2,900 - $5,700</td>
                        </tr>
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