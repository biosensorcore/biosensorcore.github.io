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
                            <th>UCSD Rate</th>
                            <th>Non-UCSD Academic Rate</th>
                            <th>Commercial Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Personnel - Consultation</td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>Personnel - Design & Analysis</td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>Wet Lab</td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>Imaging (full-service)</td>
                            <td>$150/hr</td>
                            <td>$218/hr</td>
                            <td>$375/hr</td>
                        </tr>
                        <tr>
                            <td>Imaging (Nikon Imaging Center)</td>
                            <td><a href="https://nic.ucsd.edu/rates/index.html" target="_blank" rel="noopener noreferrer">https://nic.ucsd.edu/rates/index.html</a></td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p><em>* Rates are provisional and subject to change.</em></p>
            </div>
            
            <div className={content.content_default}>
                <h3>Project Cost Estimates</h3>
                <p><em>Note: Total cost ranges below include hourly charges only. Additional supply costs may apply (see Supply Costs table).</em></p>
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
                            <td>Prototype Biosensor Design</td>
                            <td>$200 - $500</td>
                            <td>$290 - $725</td>
                            <td>$500 - $1,250</td>
                        </tr>
                        <tr id="prototype_construction">
                            <td>Prototype Biosensor Construction</td>
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
                            <td>$1,600 - $3,100</td>
                            <td>$2,320 - $4,495</td>
                            <td>$4,000 - $7,750</td>
                        </tr>
                        <tr id="optimization">
                            <td>Full-Scale Biosensor Optimization</td>
                            <td>$2,900 - $5,700</td>
                            <td>$4,205 - $8,265</td>
                            <td>$7,250 - $14,250</td>
                        </tr>
                    </tbody>
                </table>
                <p><em>* Rates are provisional and subject to change.</em></p>
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
                            <td><p>PCR/Gibson Supplies</p> (1 construct)</td>
                            <td>$400</td>
                            <td>Lab supplies + sequencing costs for constructing 1 simple plasmid (1 insert)</td>
                        </tr>
                        <tr>
                            <td><p>In Vitro Characterization Supplies</p> (1 biosensor)</td>
                            <td>$500</td>
                            <td>Lab supplies for purifying and characterizing 1 biosensor in vitro (E. coli expression)</td>
                        </tr>
                        <tr>
                            <td><p>Imaging Supplies</p> (1 construct)</td>
                            <td>$600</td>
                            <td>Lab supplies for maintaining 1 standard mammalian cell line for 1 week and performing 4 imaging experiments (~3h per experiment session)</td>
                        </tr>
                        <tr>
                            <td><p>Gene synthesis</p> (per base)</td>
                            <td>$0.07</td>
                            <td>Cost per-base for synthesizing genes for plasmid construction (using Gibson and in-hand vector)</td>
                        </tr>
                        <tr>
                            <td><p>Whole-plasmid synthesis</p> (1 plasmid)</td>
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