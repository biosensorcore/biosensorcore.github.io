import content from "../styles/Content.module.css";
import styles from "../styles/Home.module.css";

import RateJSON from "../util/rates.json";


function Rates() {

    return <>
        <div className={content.content_header}>Rates & Services</div>
        <div className={content.content_main}>
            <div className={content.content_default}>
                <p className={styles.page_note}>Rates updated September 2026</p>
                <p className={styles.page_note}>Non-UCSD Academic rates include a 45% institutional overhead charge applied to the corresponding UC San Diego rate.</p>
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
            
            <div className={content.content_default}>
                <h3>Hourly Rates</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>UC San Diego</th>
                            <th>Non-UCSD Academic</th>
                            <th>Commercial</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Consultation
                                <span className={styles.rate_description}>Scientific planning and discussion related to biosensor selection, assay design, imaging strategy, experimental controls, troubleshooting, or interpretation.</span>
                            </td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>
                                Sensor Design & Data Analysis
                                <span className={styles.rate_description}>Biosensor and construct design, sequence and architecture analysis, quantitative data analysis, development or adaptation of analysis workflows, and interpretation of biosensor measurements.</span>
                            </td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>
                                Wet Lab Work
                                <span className={styles.rate_description}>Hands-on experimental work performed by Core staff, including molecular biology, cloning, cell culture, protein expression or purification, assay execution, sample preparation, and routine characterization as appropriate to the project. Supplies and external pass-through costs are billed separately unless explicitly included in an estimate.</span>
                            </td>
                            <td>$100/hr</td>
                            <td>$145/hr</td>
                            <td>$250/hr</td>
                        </tr>
                        <tr>
                            <td>
                                Live-Cell Imaging (full-service)
                                <span className={styles.rate_description}>Core staff time for live-cell imaging experiments, including acquisition setup, experimental monitoring, image acquisition, and routine handling of the resulting data. Instrument charges from other imaging facilities and project-specific supplies may be billed separately where applicable.</span>
                            </td>
                            <td>$150/hr</td>
                            <td>$218/hr</td>
                            <td>$375/hr</td>
                        </tr>
                        <tr>
                            <td>Imaging (Nikon Imaging Center)</td>
                            <td colSpan="3"><a href="https://nic.ucsd.edu/rates/index.html" target="_blank" rel="noopener noreferrer">https://nic.ucsd.edu/rates/index.html</a></td>
                        </tr>
                    </tbody>
                </table>
                <p className={styles.table_footnote}>* Rates are provisional and subject to change.</p>
                <p className={styles.table_footnote}>** An initial 30-minute meeting is complimentary for all academic users.</p>
            </div>
            
            <div className={content.content_default}>
                <h3>Typical Project Planning Ranges</h3>
                <p>The ranges below are intended for project planning and are not fixed-price quotes. Actual cost depends on experimental readiness, construct and assay complexity, the number of variants, conditions, and controls, the amount of troubleshooting required, and whether new methods or sensor engineering are needed. Established workflows can usually be estimated relatively closely, whereas novel biosensor development and optimization are inherently less predictable. We will discuss substantial changes in scope or expected cost before proceeding.</p>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>UC San Diego</th>
                            <th>Non-UCSD Academic</th>
                            <th>Commercial</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="est-consultation">
                            <td>
                                Consultation
                                <span className={styles.rate_description}>Focused planning, sensor selection, troubleshooting, or analysis consultation. Straightforward questions may require only a short consultation, whereas development of a new experimental approach can require several sessions.</span>
                            </td>
                            <td>$100–$800</td>
                            <td>$145–$1,160</td>
                            <td>$250–$2,000</td>
                        </tr>
                        <tr id="est-prototype-design">
                            <td>
                                Prototype Biosensor Design
                                <span className={styles.rate_description}>Design of one or more biosensor architectures or constructs for a defined biological measurement. Scope depends on the amount of literature and sequence analysis required, construct complexity, and the number of alternative designs considered.</span>
                            </td>
                            <td>$300–$1,500</td>
                            <td>$435–$2,175</td>
                            <td>$750–$3,750</td>
                        </tr>
                        <tr id="est-prototype-construction">
                            <td>
                                Prototype Biosensor Construction
                                <span className={styles.rate_description}>Construction of prototype plasmids using standard molecular biology approaches. More complex assemblies, multiple constructs, iterative troubleshooting, or outsourced synthesis can increase total cost.</span>
                            </td>
                            <td>$500–$2,500</td>
                            <td>$725–$3,625</td>
                            <td>$1,250–$6,250</td>
                        </tr>
                        <tr id="est-vitro">
                            <td>
                                Biosensor Characterization (<i>in vitro</i>)
                                <span className={styles.rate_description}>Biochemical characterization of an existing or prototype biosensor or variant set. Scope depends on protein production, assay development, controls, experimental conditions, and the number of variants examined.</span>
                            </td>
                            <td>$1,500–$6,000</td>
                            <td>$2,175–$8,700</td>
                            <td>$3,750–$15,000</td>
                        </tr>
                        <tr id="est-cellulo">
                            <td>
                                Biosensor Characterization (<i>in cellulo</i>)
                                <span className={styles.rate_description}>Cell-based characterization of an existing or prototype biosensor or variant set. Scope depends on the cell model, assay maturity, number of constructs and conditions, required controls, imaging burden, troubleshooting, and quantitative analysis.</span>
                            </td>
                            <td>$2,000–$10,000</td>
                            <td>$2,900–$14,500</td>
                            <td>$5,000–$25,000</td>
                        </tr>
                        <tr id="est-optimization">
                            <td>
                                Full-Scale Biosensor Optimization
                                <span className={styles.rate_description}>Iterative biosensor engineering that may include library design, screening, directed evolution, repeated characterization, and assay development. These projects are inherently less predictable than established assays and may extend beyond the planning range shown above after discussion with the investigator.</span>
                            </td>
                            <td>$5,000–$30,000</td>
                            <td>$7,250–$43,500</td>
                            <td>$12,500–$75,000</td>
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
                            <th><p>UC San Diego</p> Unit Cost</th>
                            <th><p>Non-UCSD Academic</p> Unit Cost</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>PCR/Gibson Supplies</p> (1 construct)</td>
                            <td>$400</td>
                            <td>$580</td>
                            <td>Supplies and sequencing for construction of one simple plasmid from existing DNA templates using PCR/Gibson or comparable in-house molecular biology methods. Synthetic gene costs, when applicable, are billed separately.</td>
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
                            <td>Project-specific cell culture, transfection and other reagents, and routine microscopy consumables for maintaining and imaging cells over approximately one week.</td>
                        </tr>
                        <tr>
                            <td><p>Gene synthesis</p> (per base)</td>
                            <td>$0.09/base</td>
                            <td>$0.13/base</td>
                            <td>Vendor pass-through cost for gene synthesis based on current vendor pricing. The current UC San Diego planning rate is $0.09 per base and may change if vendor pricing changes. The Non-UCSD Academic rate includes the applicable 45% overhead.</td>
                        </tr>
                        <tr>
                            <td><p>Standard-vector cloning and sequence verification</p> (per plasmid)</td>
                            <td>$25/plasmid</td>
                            <td>$36.25/plasmid</td>
                            <td>Vendor pass-through charge for cloning a synthesized gene into a standard vector and sequence verification. The current planning rate may change if vendor pricing changes. The Non-UCSD Academic rate includes the applicable 45% overhead.</td>
                        </tr>
                    </tbody>
                </table>
                <p className={styles.table_footnote}>* Supply costs for commercial users will be included in contract negotiations.</p>
                <p className={styles.table_footnote}>** Additional charges may apply for large-scale plasmid preparation, purification, unusually complex constructs, or other requested preparation.</p>
            </div>
        </div>
    </>;
}

export default Rates;
