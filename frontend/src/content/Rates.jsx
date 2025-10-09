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
                <p><em>Note: Total cost ranges below include hourly charges only. Additional supply costs may apply (see Supply Costs table).</em></p>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Project Type</th>
                            <th>Total Cost Range (Hourly Charges Only)</th>
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
                <h3>Supply Costs</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Supply Category</th>
                            <th>Unit Cost</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PCR/Gibson Supplies (1 construct)</td>
                            <td>$400</td>
                            <td>Lab supplies + sequencing costs for constructing 1 simple plasmid (1 insert)</td>
                        </tr>
                        <tr>
                            <td>In Vitro Characterization Supplies (1 biosensor)</td>
                            <td>$500</td>
                            <td>Lab supplies for purifying and characterizing 1 biosensor in vitro (E. coli expression)</td>
                        </tr>
                        <tr>
                            <td>Imaging Supplies (1 construct)</td>
                            <td>$600</td>
                            <td>Lab supplies for maintaining 1 standard mammalian cell line for 1 week and performing 4 imaging experiments (~3h per experiment session)</td>
                        </tr>
                        <tr>
                            <td>Gene synthesis (per base)</td>
                            <td>$0.07</td>
                            <td>Cost per-base for synthesizing genes for plasmid construction (using Gibson and in-hand vector)</td>
                        </tr>
                        <tr>
                            <td>Whole-plasmid synthesis (1 plasmid)</td>
                            <td>$100</td>
                            <td>Additional cost for full synthesis whole plasmids (for complex constructs and/or custom vectors)</td>
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