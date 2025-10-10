import content from "../styles/Content.module.css";
import styles from "../styles/Home.module.css";

import RateJSON from "../util/rates.json";


function Rates() {

    return <>
        <div className={content.content_header}>Rates & Services</div>
        <div className={content.content_main}>
            <div className={content.content_default}>
                <h3>Hourly Rates</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Service Type</th>
                            <th>UCSD Rate</th>
                            <th>Non-UCSD Academic Rate</th>
                            <th>Commercial Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Consultation</td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>Sensor Design & Data Analysis</td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>Wet Lab Work</td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>Live-Cell Imaging (full-service)</td>
                            <td>$150/hr</td>
                            <td>$218/hr</td>
                            <td>$375/hr</td>
                        </tr>
                        <tr>
                            <td>Imaging (Nikon Imaging Center)</td>
                            <td></td>
                            <td><a href="https://nic.ucsd.edu/rates/index.html" target="_blank" rel="noopener noreferrer">https://nic.ucsd.edu/rates/index.html</a></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p className={styles.table_footnote}>* Rates are provisional and subject to change.</p>
                <p className={styles.table_footnote}>** An initial 30-minute meeting is complimentary for all academic users.</p>
            </div>
            
            <div className={content.content_default}>
                <h3>Project Cost Estimates</h3>
                <p><em>Note: Total cost range estimates below include hourly charges only. Additional supply costs may apply (see Supply Costs table).</em></p>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Project Type</th>
                            <th>UCSD Rate</th>
                            <th>Non-UCSD Academic Rate</th>
                            <th>Commercial Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="consultation">
                            <td>Consultation</td>
                            <td>$100 - $400</td>
                            <td>$145 - $580</td>
                            <td>$250 - $1,000</td>
                        </tr>
                        <tr id="prototype_design">
                            <td>Prototype Biosensor Design (one target)</td>
                            <td>$200 - $500</td>
                            <td>$290 - $725</td>
                            <td>$500 - $1,250</td>
                        </tr>
                        <tr id="prototype_construction">
                            <td>Prototype Biosensor Construction (one plasmid)</td>
                            <td>$400 - $800</td>
                            <td>$580 - $1,160</td>
                            <td>$1,000 - $2,000</td>
                        </tr>
                        <tr id="vitro">
                            <td>Biosensor Characterization (<i>in vitro</i>)</td>
                            <td>$1,200 - $2,600</td>
                            <td>$1,740 - $3,770</td>
                            <td>$3,000 - $6,500</td>
                        </tr>
                        <tr id="cellulo">
                            <td>Biosensor Characterization (<i>in cellulo</i>)</td>
                            <td>$1,800 - $4,900</td>
                            <td>$2,610 - $7,105</td>
                            <td>$4,500 - $12,250</td>
                        </tr>
                        <tr id="optimization">
                            <td>Full-Scale Biosensor Optimization (one scaffold)</td>
                            <td>$3,000 - $9,000</td>
                            <td>$4,350 - $13,050</td>
                            <td>$7,500 - $22,500</td>
                        </tr>
                    </tbody>
                </table>
                <p className={styles.table_footnote}>* Rates are provisional and subject to change.</p>
            </div>
            
            <div className={content.content_default}>
                <h3>Common Supply Costs</h3>
                <table className={`${styles.table} ${styles.supply_costs_table}`}>
                    <thead>
                        <tr>
                            <th>Supply Category</th>
                            <th><p>UCSD</p> Unit Cost</th>
                            <th><p>Non-UCSD Academic</p> Unit Cost</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>PCR/Gibson Supplies</p> (1 construct)</td>
                            <td>$400</td>
                            <td>$580</td>
                            <td>Lab supplies + sequencing costs for constructing 1 simple plasmid (1 insert)</td>
                        </tr>
                        <tr>
                            <td><p><i>in vitro</i> Characterization Supplies</p> (1 biosensor)</td>
                            <td>$500</td>
                            <td>$725</td>
                            <td>Lab supplies for purifying and characterizing 1 biosensor <i>in vitro</i> (<i>E. coli</i> expression)</td>
                        </tr>
                        <tr>
                            <td><p>Imaging Supplies</p> (1 construct)</td>
                            <td>$600</td>
                            <td>$870</td>
                            <td>Lab supplies for maintaining 1 standard mammalian cell line for 1 week and performing 4 imaging experiments (~3h per experiment session)</td>
                        </tr>
                        <tr>
                            <td><p>Gene synthesis</p> (per base)</td>
                            <td>$0.07</td>
                            <td>$0.10</td>
                            <td>Cost per-base for synthesizing genes for plasmid construction (using Gibson and in-hand vector)</td>
                        </tr>
                        <tr>
                            <td><p>Whole-plasmid synthesis</p> (1 plasmid)</td>
                            <td>$100</td>
                            <td>$145</td>
                            <td>Additional cost for full synthesis whole plasmids (for complex constructs and/or custom vectors)</td>
                        </tr>
                    </tbody>
                </table>
                <p className={styles.table_footnote}>* Supply costs for commercial users will be included in contract negotiations.</p>
            </div>
            
            <div className={content.content_default}>
                <h3>Service Categories</h3>
                <table className={`${styles.table} ${styles.service_categories_table}`}>
                    <thead>
                        <tr>
                            <th>Service Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RateJSON.rates.map((rate) => (
                            <tr key={rate.id} id={rate.id}>
                                <td>{rate.type}</td>
                                <td>{rate.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>;
}

export default Rates;